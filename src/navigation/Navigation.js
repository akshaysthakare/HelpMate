import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CategoryScreen from '../screens/CategoryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PaymentScreen from '../screens/PaymentScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HelperListScreen from '../screens/HelperListScreen';

const NewNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: () => false,
    },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      header: () => false,
    },
  },
  Category: {
    screen: CategoryScreen,
    navigationOptions: {
      header: () => false,
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      header: () => false,
    },
  },
  HelperScreen: {
    screen: HelperListScreen,
    navigationOptions: {
      header: () => false,
    },
  },
  Payment: {
    screen: PaymentScreen,
    navigationOptions: {
      header: () => false,
    },
  },
});

export default createAppContainer(NewNavigator);
