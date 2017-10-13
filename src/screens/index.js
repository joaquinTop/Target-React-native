import { Navigation } from 'react-native-navigation';

import HomeScreen from '../containers/HomeScreen';
import LoginScreen from '../containers/LoginScreen';
import SignUpScreen from '../containers/SignUpScreen';
import Drawer from '../components/common/Drawer';

const registerScreens = (store, Provider) => {
  Navigation.registerComponent('target.HomeScreen', () => HomeScreen, store, Provider);
  Navigation.registerComponent('target.LoginScreen', () => LoginScreen, store, Provider);
  Navigation.registerComponent('target.SignUpScreen', () => SignUpScreen, store, Provider);
  Navigation.registerComponent('target.Drawer', () => Drawer, store, Provider);
};

export default registerScreens;
