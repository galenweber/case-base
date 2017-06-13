import { StackNavigator } from 'react-navigation';
import Home from '../containers/Home';
import CasePage from '../containers/CasePage';
import Settings from '../containers/Settings';

export default StackNavigator({
  Home: { screen: Home },
  CasePage: { screen: CasePage },
  Settings: { screen: Settings },
});

