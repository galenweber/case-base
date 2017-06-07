/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import Main from './src-ios/Main';

console.ignoredYellowBox = ['Warning: BackAndroid', 'Remote debugger']

class CaseBase extends React.Component {
  render(){
    return(
      <Main />
    );
  }
}

AppRegistry.registerComponent('CaseBase', () => CaseBase);

