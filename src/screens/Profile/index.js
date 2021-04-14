import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, FlatList} from 'react-native';
import {Product} from '../../components';

export default class Profile extends Component {
  state = {
    data: [
      {
        id: 1,
        photoProfile:
          'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        name: 'Calum Lewis',
        photoProduct:
          'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        nameProduct: 'Salad',
        category: 'Food',
        minutes: '<60 mins',
      },
      {
        id: 2,
        photoProfile:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        name: 'Eilif Sonas',
        photoProduct:
          'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        nameProduct: 'Pasta',
        category: 'Food',
        minutes: '<60 mins',
      },
      {
        id: 3,
        photoProfile:
          'https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
        name: 'John Priyadi',
        photoProduct:
          'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        nameProduct: 'Sushi',
        category: 'Food',
        minutes: '<60 mins',
      },
      {
        id: 4,
        photoProfile:
          'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
        name: 'Boy Naki',
        photoProduct:
          'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        nameProduct: 'Red Cury',
        category: 'Food',
        minutes: '<60 mins',
      },
      {
        id: 5,
        photoProfile:
          'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        name: 'Irene',
        photoProduct:
          'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        nameProduct: 'Iced Tea',
        category: 'Drink',
        minutes: '<15 mins',
      },
      {
        id: 6,
        photoProfile:
          'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80',
        name: 'Christiana Rivers',
        photoProduct:
          'https://images.unsplash.com/photo-1500631195312-e3a9a5819f92?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        nameProduct: 'Detox Water',
        category: 'Drink',
        minutes: '<15 mins',
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.rowImage}>
            <Image
              source={{
                uri:
                  'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
              }}
              style={styles.image}
            />
          </View>
          <Text style={styles.name}>Choirul Syafril</Text>
          <View style={styles.rowInfo}>
            <View style={styles.columnInfo}>
              <Text style={styles.number}>32</Text>
              <Text style={styles.text}>Recipes</Text>
            </View>
            <View style={styles.columnInfo}>
              <Text style={styles.number}>782</Text>
              <Text style={styles.text}>Following</Text>
            </View>
            <View style={styles.columnInfo}>
              <Text style={styles.number}>1.287</Text>
              <Text style={styles.text}>Following</Text>
            </View>
          </View>
        </View>
        <View style={styles.grid} />
        <FlatList
          data={this.state.data}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.body}
          numColumns={2}
          renderItem={({item}) => (
            <Product
              photoProduct={item.photoProduct}
              nameProduct={item.nameProduct}
              category={item.category}
              minutes={item.minutes}
            />
          )}
          keyExtractor={item => String(item.id)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    paddingVertical: 24,
  },
  rowImage: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 17,
    fontFamily: 'Inter-Bold',
    color: '#3E5481',
    textAlign: 'center',
    marginVertical: 24,
  },
  rowInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  columnInfo: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  number: {
    fontSize: 17,
    fontFamily: 'Inter-Bold',
    color: '#3E5481',
  },
  text: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#9FA5C0',
  },
  grid: {
    height: 8,
    backgroundColor: '#F4F5F7',
  },
  body: {
    padding: 19,
  },
});
