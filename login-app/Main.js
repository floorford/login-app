import React from 'react';
import { StatusBar } from 'react-native';

import { createStackNavigator } from 'react-navigation';

import Register from './containers/Register';
import Login from './containers/Login';
import Home from './containers/Home';


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
      backgroundColor: '#47A5D4'
    },
    headerTintColor: '#ffffff'
  }
});

export default RootNavigator;
