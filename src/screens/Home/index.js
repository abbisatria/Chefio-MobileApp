import React, {Component} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import {Button, InputText, Product} from '../../components';

export default class Home extends Component {
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
          <InputText
            icon="search"
            placeholder="Search"
            backgroundColor="#F4F5F7"
            placeholderTextColor="#9FA5C0"
          />
          <Text style={styles.title}>Category</Text>
          <View style={styles.rowHeader}>
            <Button paddingHorizontal={24} paddingVertical={15}>
              All
            </Button>
            <View style={styles.gap} />
            <Button
              paddingHorizontal={24}
              paddingVertical={15}
              color="#F4F5F7"
              textColor="#9FA5C0">
              Food
            </Button>
            <View style={styles.gap} />
            <Button
              paddingHorizontal={24}
              paddingVertical={15}
              color="#F4F5F7"
              textColor="#9FA5C0">
              Drink
            </Button>
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
              photoProfile={item.photoProfile}
              name={item.name}
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
  header: {
    padding: 24,
  },
  container: {
    backgroundColor: 'white',
  },
  title: {
    fontSize: 17,
    fontFamily: 'Inter-Bold',
    color: '#3E5481',
    marginTop: 24,
    marginBottom: 16,
  },
  rowHeader: {
    flexDirection: 'row',
  },
  gap: {
    width: 16,
  },
  grid: {
    height: 8,
    backgroundColor: '#F4F5F7',
  },
  body: {
    backgroundColor: 'white',
    padding: 19,
    paddingBottom: 240,
  },
});
