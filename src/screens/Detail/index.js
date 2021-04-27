import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Heart from '../../assets/Icons/heart-off.svg';

export default class Detail extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.parent}>
        <View>
          <Image
            source={{
              uri:
                'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Cacao Maca Walnut Milk</Text>
          <View style={styles.rowCategory}>
            <Text style={styles.category}>Food</Text>
            <Icon name="circle" color="#9FA5C0" size={5} />
            <Text style={styles.minutes}>60 mins</Text>
          </View>
          <View style={styles.columnProfile}>
            <View style={styles.rowProfile}>
              <Image
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80',
                }}
                style={styles.imageProfile}
              />
              <Text style={styles.nameProfile}>Elena Shelby</Text>
            </View>
            <View style={styles.rowProfile}>
              <TouchableOpacity>
                <View style={styles.circleHeart}>
                  <Heart />
                </View>
              </TouchableOpacity>
              <Text style={styles.nameProfile}>273 Likes</Text>
            </View>
          </View>
          <View style={styles.grid} />
          <Text style={styles.title}>Description</Text>
          <Text style={styles.desc}>
            Your recipe has been uploaded, you can see it on your profile. Your
            recipe has been uploaded, you can see it on your
          </Text>
          <View style={styles.grid} />
          <Text style={styles.title}>Ingredients</Text>
          <View style={styles.rowIngre}>
            <View style={styles.check}>
              <Icon name="check" size={15} color="#1FCC79" />
            </View>
            <Text style={styles.ingre}>4 Eggs</Text>
          </View>
          <View style={styles.rowIngre}>
            <View style={styles.check}>
              <Icon name="check" size={15} color="#1FCC79" />
            </View>
            <Text style={styles.ingre}>1/2 Butter</Text>
          </View>
          <View style={styles.rowIngre}>
            <View style={styles.check}>
              <Icon name="check" size={15} color="#1FCC79" />
            </View>
            <Text style={styles.ingre}>1/2 Butter</Text>
          </View>
          <View style={styles.grid} />
          <Text style={styles.title}>Steps</Text>
          <View style={styles.rowStep}>
            <View style={styles.circleStep}>
              <Text style={styles.numberStep}>1</Text>
            </View>
            <View style={styles.rowShrink}>
              <Text style={styles.step}>
                Your recipe has been uploaded, you can see it on your profile.
                Your recipe has been uploaded, you can see it on your
              </Text>
              <Image
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                }}
                style={styles.imageStep}
              />
            </View>
          </View>
          <View style={styles.rowStep}>
            <View style={styles.circleStep}>
              <Text style={styles.numberStep}>2</Text>
            </View>
            <View style={styles.rowShrink}>
              <Text style={styles.step}>
                Your recipe has been uploaded, you can see it on your profile.
                Your recipe has been uploaded, you can see it on your
              </Text>
              <Image
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                }}
                style={styles.imageStep}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
  },
  image: {
    resizeMode: 'cover',
    height: 375,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  container: {
    padding: 24,
  },
  title: {
    fontSize: 17,
    fontFamily: 'Inter-Bold',
    color: '#3E5481',
  },
  rowCategory: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  category: {
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: '#9FA5C0',
    marginRight: 8,
  },
  minutes: {
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: '#9FA5C0',
    marginLeft: 8,
  },
  columnProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  rowProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageProfile: {
    resizeMode: 'cover',
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  nameProfile: {
    fontSize: 15,
    fontFamily: 'Inter-Bold',
    color: '#3E5481',
    marginLeft: 8,
  },
  circleHeart: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#1FCC79',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    height: 1,
    backgroundColor: '#D0DBEA',
    marginVertical: 16,
  },
  desc: {
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: '#9FA5C0',
    marginTop: 8,
  },
  rowIngre: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  check: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E3FFF8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ingre: {
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: '#2E3E5C',
    marginLeft: 8,
  },
  rowStep: {
    flexDirection: 'row',
    marginTop: 16,
  },
  rowShrink: {
    flexShrink: 1,
  },
  circleStep: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#2E3E5C',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  numberStep: {
    fontSize: 12,
    fontFamily: 'Inter-Bold',
    color: 'white',
  },
  step: {
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: '#2E3E5C',
  },
  imageStep: {
    resizeMode: 'cover',
    height: 155,
    borderRadius: 12,
    marginTop: 16,
  },
});
