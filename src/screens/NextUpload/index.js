import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {Button, HeaderUpload, InputText} from '../../components';

export default class NextUpload extends Component {
  state = {
    ingredient: [
      {
        id: 1,
        input: '',
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <HeaderUpload step={2} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={styles.row}>
              <Text style={styles.title}>Ingredients</Text>
              <TouchableOpacity
                onPress={() => {
                  const {ingredient} = this.state;
                  const add = [
                    ...ingredient,
                    {id: ingredient.length + 1, input: ''},
                  ];
                  this.setState({
                    ingredient: add,
                  });
                }}>
                <Icon name="plus" color="#3E5481" size={24} />
              </TouchableOpacity>
            </View>
            {this.state.ingredient.length > 0 &&
              this.state.ingredient.map((item, index) => {
                return (
                  <View style={styles.rowIngredient} key={String(index)}>
                    <Text>{item.input}</Text>
                    <View style={styles.inputIngredient}>
                      <InputText placeholder="Enter ingredient" />
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        const deleteIngredient = this.state.ingredient.filter(
                          value => value.id !== item.id,
                        );
                        this.setState({ingredient: deleteIngredient});
                      }}>
                      <Icon name="trash" color="red" size={20} />
                    </TouchableOpacity>
                  </View>
                );
              })}
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Steps</Text>
            <Icon name="plus" color="#3E5481" size={24} />
          </View>
          <View style={styles.rowStep}>
            <View>
              <View style={styles.circleStep}>
                <Text style={styles.numberStep}>1</Text>
              </View>
              <TouchableOpacity>
                <Icon name="trash" color="red" size={24} />
              </TouchableOpacity>
            </View>
            <View style={styles.flex}>
              <InputText
                numberOfLines={5}
                placeholder="Tell a little about your food"
              />
              <TouchableOpacity style={styles.button}>
                <Icon name="camera" color="#2E3E5C" size={24} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.rowSubmit}>
            <View style={styles.flex}>
              <Button
                color="#F4F5F7"
                textColor="#2E3E5C"
                onPress={() => this.props.navigation.goBack()}>
                Back
              </Button>
            </View>
            <View style={styles.gap} />
            <View style={styles.flex}>
              <Button>Submit</Button>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 24,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 17,
    fontFamily: 'Inter-Bold',
    color: '#3E5481',
  },
  rowIngredient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  inputIngredient: {
    flex: 1,
    marginRight: 8,
  },
  rowStep: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  circleStep: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#2E3E5C',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    marginBottom: 16,
  },
  numberStep: {
    fontSize: 12,
    fontFamily: 'Inter-Bold',
    color: 'white',
  },
  flex: {
    flex: 1,
  },
  button: {
    backgroundColor: '#F4F5F7',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 8,
  },
  rowSubmit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 34,
  },
  gap: {
    width: 15,
  },
});
