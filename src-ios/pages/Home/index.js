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
  static navigationOptions = {
    title: 'Cases',
  };

  componentDidMount() {
    const keysArr = [
      'c1p1', 'c1p2'
    ];

    AsyncStorage.multiGet(keysArr)
      .then(keyValues => {
        keyValues.forEach((arr) => this.setState({[arr[0]]: arr[1]}))
      });
  }

  render() {
    AsyncStorage.setItem("c1p2", "false");
    console.log('this.state is ', this.state);
    const { navigation } = this.props;
    return (
      <View
      >
        {cases.map(e => <CasePanel
          key={e.name}
          name={e.name}
          company={e.company}
          updated={e.updated}
          pages={e.pages}
          navigation={navigation}
        />)}
      </View>
    )
  };
}

