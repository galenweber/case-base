import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import * as actions from '../../actions';

const mapStateToProps = state => state;


class CaseSwiper extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
  });

  componentDidMount() {
    const { pages, caseIndex } = this.props.navigation.state.params;
    const { handleInput, setSubmitted } = this.props;

    const keys = pages.map((e, i) => `c${caseIndex}p${i}`);
    AsyncStorage.multiGet(keys, (err, stores) => {
      stores.map((result, i, store) => {
        // get at each store's key/value so you can work with it
        const key = store[i][0];
        const value = store[i][1];
        handleInput(key, value);
        setSubmitted(key, (value !== null));
        return key;
      });
    });
  }

  render() {
    const { pages, caseIndex } = this.props.navigation.state.params;

    return (
      <View
        style={styles.outer}
      >
        <Swiper
          style={styles.wrapper}
          loadMinimal
          loadMinimalSize={1}
          loadMinimalLoader={<ActivityIndicator />}
        >
          {pages.map((Page, index) => (
            <View style={styles.container} key={`page-${Page.name}`}>
              <Page {...this.props} caseIndex={caseIndex} pageIndex={index} />
            </View>
          ))}
        </Swiper>
      </View>
    );
  }
}

const propTypes = {
  handleInput: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        pages: PropTypes.array.isRequired,
        caseIndex: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  setSubmitted: PropTypes.func.isRequired,
};

CaseSwiper.propTypes = propTypes;

export default connect(
  mapStateToProps,
  actions,
)(CaseSwiper);

