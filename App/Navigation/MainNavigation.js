import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import TransactionScreen from '../Containers/Transaction';
import TransactionDetailScreen from '../Containers/Transaction/TransactionDetailScreen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const MainNav = createStackNavigator(
  {
    TransactionScreen: {screen: TransactionScreen},
    TransactionDetailScreen: {screen: TransactionDetailScreen},
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'TransactionScreen',
  },
);

export default MainNav;
