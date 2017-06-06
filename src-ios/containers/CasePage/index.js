import React from 'react';
import {
  Animated,
  AsyncStorage,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import * as actions from '../../actions';


import Swiper from 'react-native-swiper';

const mapStateToProps = (state) => state;
const mapDispatchToProps = () => { submitResponse };

class CasePage extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
  });

  constructor(props) {
    super(props);
    //AsyncStorage.clear();
  }

  componentDidMount() {
    const { pages, caseIndex } = this.props.navigation.state.params;
    const { handleInput, submitResponse } = this.props;

    const keys = pages.map((e, i) => `c${caseIndex}p${i}`);
    AsyncStorage.getAllKeys().then((res) => console.log('all keys are ', res));
    AsyncStorage.multiGet(keys, (err, stores) => {
      console.log('stores are ', stores);
      stores.map((result, i, store) => {
        // get at each store's key/value so you can work with it
        let key = store[i][0];
        let value = store[i][1];
        handleInput(key, value);
        if (value !== null) submitResponse(key);
      });
    });
  }

  render() {
    const { pages, caseIndex } = this.props.navigation.state.params;

    return (
      <View
        style={styles.outer}
      >
        <Swiper style={styles.wrapper}>
          {pages.map((Page, index) => {
            return (<View style={styles.container} key={`page-${index}`}>
              {<Page {...this.props} caseIndex={caseIndex} pageIndex={index} />}
            </View>)
          })}
        </Swiper>
      </View>
    )
  }
}

export default connect(
  mapStateToProps,
  actions
)(CasePage);

