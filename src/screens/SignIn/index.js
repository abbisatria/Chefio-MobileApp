import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Button, Header, InputText} from '../../components';

export default class SignIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Welcome Back!"
          subTitle="Please enter your account here"
        />
        <InputText
          icon="mail"
          placeholder="Email"
          keyboardType="email-address"
        />
        <View style={styles.gap} />
        <InputText icon="lock" placeholder="Password" password />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ForgotPassword')}>
          <Text style={styles.textForgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <Button onPress={() => this.props.navigation.navigate('MainApp')}>
          Login
        </Button>
        <View style={styles.row}>
          <Text style={styles.textAccount}>Don’t have any account? </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={styles.textSignUp}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  textForgot: {
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: '#2E3E5C',
    textAlign: 'right',
    marginBottom: 72,
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 9,
  },
  textAccount: {
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: '#2E3E5C',
  },
  textSignUp: {
    fontSize: 15,
    fontFamily: 'Inter-Bold',
    color: '#1FCC79',
  },
  gap: {
    height: 16,
  },
});
