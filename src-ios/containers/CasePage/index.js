import React from 'react';
import {
  AsyncStorage,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import * as actions from '../../actions';

const mapStateToProps = state => state;


class CasePage extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
  });

  componentDidMount() {
    const { pages, caseIndex } = this.props.navigation.state.params;
    const { handleInput, submitResponse } = this.props;

    const keys = pages.map((e, i) => `c${caseIndex}p${i}`);
    AsyncStorage.multiGet(keys, (err, stores) => {
      stores.map((result, i, store) => {
        // get at each store's key/value so you can work with it
        const key = store[i][0];
        const value = store[i][1];
        handleInput(key, value);
        if (value !== null) submitResponse(key);
        return key;
      });
    });
  }

  render() {
    const { pages, caseIndex } = this.props.navigation.state.params;
    console.log('this.prop are ', this.props);

    return (
      <View
        style={styles.outer}
      >
        <Swiper style={styles.wrapper}>
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
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        pages: PropTypes.array.isRequired,
        caseIndex: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  handleInput: PropTypes.func.isRequired,
  submitResponse: PropTypes.func.isRequired,
};

CasePage.propTypes = propTypes;

export default connect(
  mapStateToProps,
  actions,
)(CasePage);

