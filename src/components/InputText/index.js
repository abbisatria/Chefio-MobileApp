import React, {Component} from 'react';
import {TextInput, StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class InputText extends Component {
  constructor(props) {
    super(props);
    this.inputPassword = React.createRef();
  }
  componentDidMount() {
    this.inputPassword.current.setNativeProps({
      style: {fontFamily: 'Inter-Medium'},
    });
  }
  componentDidUpdate() {
    if (this.inputPassword) {
      this.inputPassword.current.setNativeProps({
        style: {fontFamily: 'Inter-Medium'},
      });
    }
  }
  state = {
    isPasswordShown: false,
  };
  togglePasswordVisiblity = () => {
    const {isPasswordShown} = this.state;
    this.setState({isPasswordShown: !isPasswordShown});
  };
  render() {
    const {isPasswordShown} = this.state;
    return (
      <View style={styles.input(this.props.backgroundColor)}>
        <Icon
          name={this.props.icon}
          color="#2E3E5C"
          size={20}
          style={styles.icon}
        />
        <TextInput
          ref={this.inputPassword}
          placeholder={this.props.placeholder}
          placeholderTextColor={this.props.placeholderTextColor}
          keyboardType={this.props.keyboardType}
          secureTextEntry={
            this.props.password ? (isPasswordShown ? false : true) : false
          }
          onChangeText={this.props.onChange}
          defaultValue={this.props.value}
          onBlur={this.props.onBlur}
          style={styles.text}
          multiline={this.props.numberOfLines ? true : false}
          numberOfLines={this.props.numberOfLines}
        />
        {this.props.password && (
          <TouchableOpacity onPress={this.togglePasswordVisiblity}>
            <Icon
              name={isPasswordShown ? 'eye-off' : 'eye'}
              color="#9FA5C0"
              size={20}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: backgroundColor => ({
    flexDirection: 'row',
    borderColor: '#D0DBEA',
    borderWidth: 1,
    backgroundColor: backgroundColor,
    alignItems: 'center',
    borderRadius: 32,
    paddingHorizontal: 24,
    paddingVertical: 5,
  }),
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: '#2E3E5C',
  },
});
