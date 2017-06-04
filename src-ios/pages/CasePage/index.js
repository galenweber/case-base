import React from 'react';
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

import Swiper from 'react-native-swiper';

export default class CasePage extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
  });

  constructor(props) {
    super(props);
  }


  render() {
    const pages = this.props.navigation.state.params.pages;

    return (
      <View
        style={styles.outer}
      >
        <Swiper style={styles.wrapper}>
          {pages.map((Page, index) => {
            return (<View style={styles.container} key={`page-${index}`}>
              {<Page />}
            </View>)
          })}
        </Swiper>
      </View>
    )
  }
}


