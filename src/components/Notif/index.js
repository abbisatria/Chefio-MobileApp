import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from '..';

const Notif = ({profile, name, notif, date, product}) => {
  return (
    <View style={styles.row}>
      <View style={styles.row}>
        <Image
          source={{
            uri: profile,
          }}
          style={styles.image}
        />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.text}>
            {notif} ・ {date}
          </Text>
        </View>
      </View>
      {product ? (
        <Image
          source={{
            uri: product,
          }}
          style={styles.imageProduct}
        />
      ) : (
        <Button paddingHorizontal={24} paddingVertical={12}>
          Follow
        </Button>
      )}
    </View>
  );
};

export default Notif;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 10,
  },
  name: {
    fontSize: 15,
    fontFamily: 'Inter-Bold',
    color: '#3E5481',
  },
  text: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#9FA5C0',
  },
  imageProduct: {
    resizeMode: 'cover',
    height: 65,
    width: 65,
    borderRadius: 12,
  },
});
