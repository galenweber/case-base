import React from 'react';
import {
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
  render() {
    const { navigation } = this.props;
    return (
      <View
        style={styles.container}
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

