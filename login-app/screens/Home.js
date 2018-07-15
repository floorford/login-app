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
        <TouchableHighlight style={ styles.button } underlayColor="#4EA0C9" onPress={ this.handleLogout }>
          <Text style={ styles.text }>Logout</Text>
        </TouchableHighlight>
        <Text style={ [styles.text, {color: '#6A8E9F'}] }>Hello, you are logged in!</Text>
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
    backgroundColor: 'white',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#47A5D4',
    width: 40 + "%",
    borderRadius: 10,
    marginTop: 5
  },
  text: {
    fontSize: 19,
    color: 'white',
    textAlign: 'center',
    padding: 5,
    color: '#6A8E9F',
  }
});

export default Home;
