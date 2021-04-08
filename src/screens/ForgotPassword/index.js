import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Header, InputText} from '../../components';

export default class ForgotPassword extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Password recovery"
          subTitle="Enter your email to recover your password"
        />
        <InputText
          icon="mail"
          placeholder="Email"
          keyboardType="email-address"
        />
        <View style={styles.gap} />
        <Button onPress={() => this.props.navigation.navigate('ResetPassword')}>
          Confirm
        </Button>
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
  gap: {
    height: 32,
  },
});
