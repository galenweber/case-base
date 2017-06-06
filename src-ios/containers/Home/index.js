import React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  View,
} from 'react-native';
import CasePanel from '../../components/CasePanel';
import cases from '../../services/cases';
import styles from './styles';

export default class Home extends React.Component {

 constructor(props) {
    super(props);
    this.state = {};
 }

  static navigationOptions = {
    title: 'Cases',
  }

  render() {
    const { navigation } = this.props;

    return (
      <View
      >
        {cases.map((e, i) => <CasePanel
          key={e.name}
          caseIndex={i}
          {...e}
          navigation={navigation}
        />)}
      </View>
    )
  };
}

