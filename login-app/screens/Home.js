import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

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

  render () {
    return (
      <View style={ styles.container }>
        {/* if not auth do this */}
        <TouchableHighlight style={ styles.button} onPress={ this.handleRegister }>
          <Text style={ styles.text }>Go to Register Page</Text>
        </TouchableHighlight>
        {/* else do this */}
        <TouchableHighlight style={ styles.button} onPress={ this.handleRegister }>
          <Text style={ styles.text }>Logout</Text>
        </TouchableHighlight>
        <Text style={ styles.text }>Hello, you are logged in!</Text>
      </View>
    )
  }
};

Home.navigationOptions = {
  title: 'Home',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink'
  },
  button: {
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 19,
    color: 'white',
    textAlign: 'center',
    padding: 5,
  },
  formLabel: {
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 20,
    fontSize: 22,
  },
  formText: {
    marginLeft: 20,
    fontSize: 19,
  },
  div: {
    marginBottom: 10
  }
});

export default Home;
