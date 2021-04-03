import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function Header({title, subTitle}) {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontFamily: 'Inter-Bold',
    color: '#2E3E5C',
    textAlign: 'center',
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: '#9FA5C0',
    textAlign: 'center',
    marginBottom: 32,
  },
});
