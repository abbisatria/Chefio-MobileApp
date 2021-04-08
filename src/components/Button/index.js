import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Button({
  children,
  onPress,
  disabled,
  color = '#1FCC79',
  textColor = 'white',
  borderWidth,
  borderColor,
  paddingHorizontal,
  paddingVertical = 19,
}) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View
        style={styles.button(
          color,
          borderWidth,
          borderColor,
          paddingHorizontal,
          paddingVertical,
        )}>
        <Text style={styles.textButton(textColor)}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: (
    color,
    borderWidth,
    borderColor,
    paddingHorizontal,
    paddingVertical,
  ) => ({
    borderWidth: borderWidth,
    borderColor: borderColor,
    backgroundColor: color,
    paddingVertical: paddingVertical,
    paddingHorizontal: paddingHorizontal,
    borderRadius: 32,
  }),
  textButton: textColor => ({
    fontSize: 15,
    fontFamily: 'Inter-Bold',
    color: textColor,
    textAlign: 'center',
  }),
});
