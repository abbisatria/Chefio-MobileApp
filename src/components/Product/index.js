import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Product = ({
  photoProfile,
  name,
  photoProduct,
  nameProduct,
  category,
  minutes,
  onPressDetail,
}) => {
  return (
    <View style={styles.container}>
      {photoProfile && name && (
        <View style={styles.rowHeader}>
          <Image
            source={{
              uri: photoProfile,
            }}
            style={styles.photoProfile}
          />
          <Text style={styles.name}>{name}</Text>
        </View>
      )}
      <TouchableOpacity onPress={onPressDetail}>
        <Image
          source={{
            uri: photoProduct,
          }}
          style={styles.photoProduct}
        />
      </TouchableOpacity>
      <View style={styles.rowBody}>
        <Text style={styles.nameProduct}>{nameProduct}</Text>
        <TouchableOpacity>
          <Icon name="heart" color="#9FA5C0" size={15} />
        </TouchableOpacity>
      </View>
      <View style={styles.rowFooter}>
        <Text style={styles.category}>{category}</Text>
        <Icon name="circle" color="#9FA5C0" size={5} />
        <Text style={styles.minutes}>{minutes}</Text>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  rowHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  photoProfile: {
    resizeMode: 'cover',
    width: 31,
    height: 31,
    borderRadius: 11,
  },
  name: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#2E3E5C',
    marginLeft: 8,
  },
  photoProduct: {
    resizeMode: 'cover',
    width: 151,
    height: 151,
    borderRadius: 16,
  },
  nameProduct: {
    fontSize: 17,
    fontFamily: 'Inter-Bold',
    color: '#3E5481',
  },
  rowFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  category: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#9FA5C0',
    marginRight: 8,
  },
  minutes: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#9FA5C0',
    marginLeft: 8,
  },
  rowBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
});
