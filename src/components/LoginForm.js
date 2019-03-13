/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  Card, CardSection, Input, Button, Spinner,
} from './common';
import {
  emailChanged,
  passwordChanged,
  loginUser
} from '../actions';

// eslint-disable-next-line react/prefer-stateless-function
class LoginForm extends Component {
  constructor() {
    super();
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onEmailChange(text) {
    const { _emailChanged } = this.props;
    _emailChanged(text);
  }

  onPasswordChange(text) {
    const { _passwordChanged } = this.props;
    _passwordChanged(text);
  }

  onLogin() {
    const { email, password, _loginUser } = this.props;
    _loginUser({ email, password });
  }

  renderError() {
    const { error } = this.props;
    if (error) {
      return (
        <View>
          <Text style={styles.errorTextStyle}>
            {error}
          </Text>
        </View>
      );
    }
    return null;
  }

  renderButton() {
    const { loading } = this.props;
    if (loading) {
      return (
        <Spinner size="large" />
      );
    }
    return (
      <Button onPress={this.onLogin}>
            Login
      </Button>
    );
  }

  render() {
    const { email, password } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="test@test.com"
            label="Email"
            onChangeText={this.onEmailChange}
            value={email}
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder="password"
            label="Password"
            secureTextEntry
            onChangeText={this.onPasswordChange}
            value={password}
          />
        </CardSection>

        {this.renderError()}

        {this.renderButton()}

      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 16,
    color: 'red',
    alignSelf: 'center',
    margin: 5,
    padding: 5,
  },
});


const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
  loading: state.auth.loading,
});


export default connect(mapStateToProps, {
  _emailChanged: emailChanged,
  _passwordChanged: passwordChanged,
  _loginUser: loginUser
})(LoginForm);
