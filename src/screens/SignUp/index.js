import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Button, Header, InputText} from '../../components';
import Icon from 'react-native-vector-icons/Feather';

export default class SignUp extends Component {
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
        <View style={styles.gap(16)} />
        <InputText icon="lock" placeholder="Password" password />
        <Text style={styles.text}>Your Password must contain:</Text>
        <View style={styles.row}>
          <View style={styles.check('#E3FFF1')}>
            <Icon name="check" size={15} color="#1FCC79" />
          </View>
          <Text style={styles.textCheck}>Atleast 6 characters</Text>
        </View>
        <View style={styles.gap(16)} />
        <View style={styles.row}>
          <View style={styles.check('#EAEAED')}>
            <Icon name="check" size={15} color="#9FA5C0" />
          </View>
          <Text style={styles.textCheck}>Contains a number</Text>
        </View>
        <View style={styles.gap(24)} />
        <Button onPress={() => this.props.navigation.navigate('Verification')}>
          Sign Up
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
  gap: value => ({
    height: value,
  }),
  text: {
    fontSize: 17,
    fontFamily: 'Inter-Medium',
    color: '#3E5481',
    marginTop: 24,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  check: color => ({
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  }),
  textCheck: {
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: '#2E3E5C',
  },
});
