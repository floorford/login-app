import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Home extends Component {
  constructor(props) {
    super(props);

    this.handleLogin =  this.handleLogin.bind(this);
    this.handleRegister =  this.handleRegister.bind(this);
  }

  handleLogin() {
    this.props.navigation.navigate('Login')
  };

  handleRegister() {
    this.props.navigation.navigate('Register')
  };

  return() {
    render(
      <View>
        <TouchableHighlight onPress={ this.handleLogin }>
          <Text>Go to Login Page</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={ this.handleRegister }>
          <Text>Go to Register Page</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

Home.navigationOptions = () => {
  title: 'Home',
}

export default Home;
