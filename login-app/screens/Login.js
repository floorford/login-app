import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, TouchableHighlight, Button } from "react-native";
import { FormValidationMessage } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      error: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleHome = this.handleHome.bind(this);
  }

  handleSubmit(e) {
    const { email, password } = this.state;

    this.props.onSubmit(email, password);
  };

  handleRegister() {
    this.props.navigation.navigate('Register');
  };

  handleHome() {
    if (this.props.loggedIn === true) {
      this.props.navigation.navigate('Home');
      this.setState({
        error: ""
      });
    } else {
      this.setState({
        error: "You must login to continue"
      });
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.navigation.navigate('Home');
      this.setState({
        password: "",
        error: ""
      });
    } else if (nextProps.loggedIn === false){
      this.setState({
        error: "Your email or password is incorrect, please try again"
      });
    }
  }

  render() {
    const { email, password, error } = this.state;
    const regExp = RegExp(/@/);

    // render logic for form validation
    let emailErr = (!regExp.test(email)) ? true : false;
    let passwordErr = password.length < 1 || password.length > 20 ? true : false;

    let disabled = (passwordErr || emailErr) ? true : false;

    return (
      <View style={ styles.container }>
        <Text style={ [styles.text, {color: '#6A8E9F'}] }>Not a member?</Text>
        <TouchableHighlight style={ styles.button } underlayColor="#4EA0C9" onPress={ this.handleRegister }>
          <Text style={ styles.text }>Register</Text>
        </TouchableHighlight>

        <View style={ styles.div }/>

        <View style={ styles.form }>
          <Text style={ styles.formLabel }>Email</Text>
          <TextInput style={ styles.formText } textContentType="emailAddress" keyboardType="email-address" placeholder='someone@example.com' autoCapitalize="none" value={ email } onChangeText={ (email) => this.setState({ email: email }) }/>
          { emailErr ? <FormValidationMessage>Must provide a valid email</FormValidationMessage> : null }

          <View style={ styles.div }/>

          <Text style={ styles.formLabel }>Password</Text>
          <TextInput style={ styles.formText } placeholder='Enter a password here...' textContentType="password" value={ password }  password={ true } secureTextEntry={ true } onChangeText={ (password) => this.setState({ password: password }) }/>
          { passwordErr && !this.props.loggedIn ? <FormValidationMessage>Password must be between 1 and 20 characters</FormValidationMessage> : null }

          <View style={ styles.div }/>

          <Button title="Login" color="#47A5D4" onPress={ this.handleSubmit } disabled={ disabled }/>

          <FormValidationMessage>{ error }</FormValidationMessage>
        </View>
        <TouchableHighlight style={ styles.button } underlayColor="#4EA0C9" onPress={ this.handleHome }>
          <Text style={ styles.text }>Home</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

Login.navigationOptions = {
  title: 'Login',
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
  },
  formLabel: {
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 20,
    fontSize: 22,
    color: '#6A8E9F',
  },
  formText: {
    marginLeft: 20,
    fontSize: 19,
  },
  form: {
    width: 96 + "%"
  },
  div: {
    marginBottom: 10
  }
});

export default Login;
