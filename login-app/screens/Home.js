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
        <Text style={ [styles.text, {color: '#6A8E9F', marginTop: 20}] }>Hello, you are logged in!</Text>
        <TouchableHighlight style={ styles.button } underlayColor="#4EA0C9" onPress={ this.handleLogout }>
          <Text style={ styles.text }>Logout</Text>
        </TouchableHighlight>
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
  }
});

export default Home;
