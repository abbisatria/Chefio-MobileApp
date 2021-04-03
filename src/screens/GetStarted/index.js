import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Onboarding from '../../assets/Illustrations/Onboarding.svg';
import {Button} from '../../components';

export default function GetStarted(props) {
  return (
    <View style={styles.container}>
      <Onboarding />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>Start Cooking</Text>
          <Text style={styles.subTitle}>
            Let’s join our community to cook better food!
          </Text>
        </View>
        <Button onPress={() => props.navigation.replace('SignIn')}>
          Get Started
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Inter-Bold',
    color: '#2E3E5C',
    textAlign: 'center',
    marginBottom: 16,
  },
  subTitle: {
    fontSize: 17,
    fontFamily: 'Inter-Medium',
    color: '#9FA5C0',
    textAlign: 'center',
  },
});
