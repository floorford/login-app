import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Login extends Component {
  constructor(props) {
    super(props)

    this.handleHome = this.handleHome.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleHome() {
    this.props.navigation.navigate('Home')
  };

  handleRegister() {
    this.props.navigation.navigate('Register')
  };

  render() {
    return(
      <View>
        <TouchableHighlight onPress={ this.handleHome }>
          <Text>Go to Home Page</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={ this.handleRegister }>
          <Text>Go to Register Page</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

Login.navigationOptions = () => {
  title: 'Login'
};

export default Login;
