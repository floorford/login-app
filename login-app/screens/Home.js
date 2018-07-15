import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

class Home extends Component {
  constructor(props) {
    super(props);

    this.handleLogout =  this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.onLogout(this.props.user);
    this.props.navigation.navigate('Login');
  };

  render () {
    return (
      <View style={ styles.container }>
        <TouchableHighlight style={ styles.button} onPress={ this.handleLogout }>
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
