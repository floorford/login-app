import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, TouchableHighlight, Button } from "react-native";
import { FormValidationMessage } from 'react-native-elements'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
    }

    this.handleHome = this.handleHome.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleHome() {
    const { email, password } = this.state;
    // check things match else bad
    this.props.navigation.navigate('Home')
  };

  handleRegister() {
    this.props.navigation.navigate('Register')
  };

  render() {
    const { email, password } = this.state;
    const regExp = RegExp(/@/);

    // render logic for form validation
    let emailErr = (!regExp.test(email)) ? true : false;
    let passwordErr = password.length < 1 || password.length > 20 ? true : false;

    let disabled = (passwordErr || emailErr) ? true : false;

    return (
      <View style={ styles.container }>
        <Text style={ [styles.text, {color: 'black'}] }>Not a member?</Text>
        <TouchableHighlight style={ styles.button } onPress={ this.handleRegister }>
          <Text style={ styles.text }>Go to Register Page</Text>
        </TouchableHighlight>

        <View style={ styles.div }/>

        <View>
          <Text style={ styles.formLabel }>Email</Text>
          <TextInput style={ styles.formText } textContentType="emailAddress" keyboardType="email-address" placeholder='someone@example.com' value={ email } onChangeText={ (email) => this.setState({ email: email }) }/>
          { emailErr ? <FormValidationMessage>Must provide a valid email</FormValidationMessage> : null }

          <View style={ styles.div }/>

          <Text style={ styles.formLabel }>Password</Text>
          <TextInput style={ styles.formText } placeholder='Enter a password here...' textContentType="password" value={ password }  password={ true } secureTextEntry={ true } onChangeText={ (password) => this.setState({ password: password }) }/>
          { passwordErr ? <FormValidationMessage>Password must be between 1 and 20 characters</FormValidationMessage> : null }

          <View style={ styles.div }/>

          <Button title="Login" style={ styles.text } onPress={ this.handleHome } disabled={ disabled }/>
          {/* if not recognised  */}
          <FormValidationMessage>Email address or password not recognised</FormValidationMessage>
          {/* else null */}
        </View>
      </View>
    )
  }
};

Login.navigationOptions = {
  title: 'Login'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
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

export default Login;
