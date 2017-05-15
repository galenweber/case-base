/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './src-ios/pages/Home';
import CasePage from './src-ios/pages/CasePage';

const CaseBase = StackNavigator({
  Home: { screen: Home },
  CasePage: { screen: CasePage },
});

AppRegistry.registerComponent('CaseBase', () => CaseBase);

