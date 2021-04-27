import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HeaderUpload = ({step}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.cancel}>Cancel</Text>
      </TouchableOpacity>
      <View style={styles.rowStep}>
        <Text style={styles.step('#3E5481')}>{step}/</Text>
        <Text style={styles.step('#9FA5C0')}>2</Text>
      </View>
    </View>
  );
};

export default HeaderUpload;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  cancel: {
    fontSize: 17,
    fontFamily: 'Inter-Bold',
    color: '#FF6464',
  },
  rowStep: {
    flexDirection: 'row',
  },
  step: color => ({
    fontSize: 17,
    fontFamily: 'Inter-Bold',
    color: color,
  }),
});
