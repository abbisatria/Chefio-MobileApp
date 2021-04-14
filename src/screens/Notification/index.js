import React, {Component} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Notif} from '../../components';

export default class Notification extends Component {
  state = {
    data: [
      {
        id: 1,
        photoProfile:
          'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        name: 'Calum Lewis',
        notif: 'now following you',
        date: '1h',
        status: 'new',
      },
      {
        id: 2,
        photoProfile:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        name: 'Eilif Sonas',
        photoProduct:
          'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        notif: 'liked your recipe',
        date: '20 min',
        status: 'today',
      },
      {
        id: 3,
        photoProfile:
          'https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
        name: 'John Priyadi',
        notif: 'now following you',
        date: '1h',
        status: 'today',
      },
      {
        id: 4,
        photoProfile:
          'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
        name: 'Boy Naki',
        photoProduct:
          'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        notif: 'liked your recipe',
        date: '20 min',
        status: 'today',
      },
      {
        id: 5,
        photoProfile:
          'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        name: 'Irene',
        notif: 'now following you',
        date: '1h',
        status: 'today',
      },
      {
        id: 6,
        photoProfile:
          'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80',
        name: 'Christiana Rivers',
        photoProduct:
          'https://images.unsplash.com/photo-1500631195312-e3a9a5819f92?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        notif: 'liked your recipe',
        date: '20 min',
        status: 'today',
      },
      {
        id: 7,
        photoProfile:
          'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        name: 'Irene',
        notif: 'now following you',
        date: '1h',
        status: 'today',
      },
      {
        id: 8,
        photoProfile:
          'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80',
        name: 'Christiana Rivers',
        photoProduct:
          'https://images.unsplash.com/photo-1500631195312-e3a9a5819f92?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        notif: 'liked your recipe',
        date: '20 min',
        status: 'today',
      },
      {
        id: 9,
        photoProfile:
          'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        name: 'Irene',
        notif: 'now following you',
        date: '1h',
        status: 'today',
      },
      {
        id: 10,
        photoProfile:
          'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80',
        name: 'Christiana Rivers',
        photoProduct:
          'https://images.unsplash.com/photo-1500631195312-e3a9a5819f92?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        notif: 'liked your recipe',
        date: '20 min',
        status: 'today',
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <>
              <Notif
                profile={item.photoProfile}
                name={item.name}
                notif={item.notif}
                date={item.date}
                product={item.photoProduct}
              />
              <View style={{height: 24}} />
            </>
          )}
          keyExtractor={item => String(item.id)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 24,
    paddingBottom: 0,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontFamily: 'Inter-Bold',
    color: '#3E5481',
    marginBottom: 24,
  },
});
