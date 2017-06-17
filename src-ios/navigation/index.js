import { StackNavigator } from 'react-navigation';
import Home from '../containers/Home';
import CaseSwiper from '../containers/CaseSwiper';
import Settings from '../containers/Settings';

export default StackNavigator({
  Home: { screen: Home },
  CaseSwiper: { screen: CaseSwiper },
  Settings: { screen: Settings },
});

