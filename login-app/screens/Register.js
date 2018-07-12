import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Register extends Component {
  constructor(props) {
    super(props)

    this.handleLogin = this.handleLogin.bind(this);
    this.handleHome = this.handleHome.bind(this);
  }


  handleLogin() {
    this.props.navigation.navigate('Login')
  };

  handleHome() {
    this.props.navigation.navigate('Home')
  };

  return() {
    render(
      <View>
        <TouchableHighlight onPress={ this.handleLogin }>
          <Text>Go to Login Page</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={ this.handleHome }>
          <Text>Go to Home Page</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

Register.navigationOptions = () => {
  title: 'Register',
};

export default Register;
