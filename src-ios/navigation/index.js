import { StackNavigator } from 'react-navigation';
import Home from '../containers/Home';
import CasePage from '../containers/CasePage';

export default StackNavigator({
  Home: { screen: Home },
  CasePage: { screen: CasePage },
});

