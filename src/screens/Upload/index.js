import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {Button, HeaderUpload, InputText} from '../../components';

import IcUpload from '../../assets/Images/upload.svg';

export default class Upload extends Component {
  state = {
    checked: '<10',
  };
  render() {
    const {checked} = this.state;
    return (
      <View style={styles.container}>
        <HeaderUpload step={1} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity>
            <View style={styles.borderUpload}>
              <IcUpload />
              <Text style={styles.textUpload}>Add Cover Photo</Text>
              <Text style={styles.infoUpload}>(up to 12 Mb)</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.gap}>
            <Text style={styles.label}>Food Name</Text>
            <InputText placeholder="Enter food name" />
          </View>
          <View style={styles.gap}>
            <Text style={styles.label}>Description</Text>
            <InputText
              placeholder="Tell a little about your food"
              numberOfLines={5}
            />
          </View>
          <View style={styles.gap}>
            <Text style={styles.label}>Cooking Duration</Text>
            <View style={styles.row}>
              <View style={styles.checked}>
                <Text>{'<10'}</Text>
                <RadioButton
                  value="<10"
                  onPress={() => this.setState({checked: '<10'})}
                  status={checked === '<10' ? 'checked' : 'unchecked'}
                />
              </View>
              <View style={styles.checked}>
                <Text>{'30'}</Text>
                <RadioButton
                  value="30"
                  onPress={() => this.setState({checked: '30'})}
                  status={checked === '30' ? 'checked' : 'unchecked'}
                />
              </View>
              <View style={styles.checked}>
                <Text>{'>60'}</Text>
                <RadioButton
                  value=">60"
                  onPress={() => this.setState({checked: '>60'})}
                  status={checked === '>60' ? 'checked' : 'unchecked'}
                />
              </View>
            </View>
          </View>
          <Button onPress={() => this.props.navigation.navigate('NextUpload')}>
            Next
          </Button>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 24,
    paddingBottom: 0,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  borderUpload: {
    borderWidth: 2,
    borderColor: '#D0DBEA',
    borderStyle: 'dashed',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  textUpload: {
    fontSize: 15,
    fontFamily: 'Inter-Bold',
    color: '#3E5481',
    marginTop: 16,
  },
  infoUpload: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#9FA5C0',
    marginTop: 8,
  },
  gap: {
    marginTop: 24,
  },
  label: {
    fontSize: 17,
    fontFamily: 'Inter-Bold',
    color: '#3E5481',
    marginBottom: 10,
  },
  checked: {
    alignItems: 'center',
  },
});
