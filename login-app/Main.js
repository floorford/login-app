import React from 'react';
import { StatusBar } from 'react-native';

import { createStackNavigator } from 'react-navigation';

import Register from './containers/Register';
import Login from './screens/Login';
import Home from './screens/Home';


// ************* Status Bar Stuff ***************

StatusBar.setBarStyle('light-content');

// ************** Root Nav ****************

const RootNavigator = createStackNavigator({
  Register: Register,
  Login: Login,
  Home: Home
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'rgb(21, 160, 180)'
    },
    headerTintColor: '#ffffff'
  }
});

export default RootNavigator;
