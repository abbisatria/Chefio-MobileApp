import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {Button, Header} from '../../components';

export default class Verification extends Component {
  state = {
    code: '',
    time: '',
  };
  componentDidMount() {
    const countDownDate = new Date().getTime() + 300000;
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      this.setState({time: `0${minutes}:${seconds}`});
      if (distance < 0) {
        clearInterval(timer);
        this.setState({time: '00:00'});
      }
    }, 1000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Check your email"
          subTitle="We.ve sent the code to your email"
        />
        <View style={styles.code}>
          <SmoothPinCodeInput
            codeLength={4}
            cellStyle={styles.cell}
            cellStyleFocused={styles.focus}
            value={this.state.code}
            onTextChange={code => this.setState({code})}
            cellSize={60}
            cellSpacing={15}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>code expires in: </Text>
          <Text style={styles.time}>{this.state.time}</Text>
        </View>
        <Button>Verify</Button>
        <View style={styles.gap} />
        <Button
          color="white"
          textColor="#9FA5C0"
          borderWidth={1}
          borderColor="#D0DBEA">
          Send again
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  code: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell: {
    borderWidth: 1,
    borderColor: '#D0DBEA',
    borderRadius: 10,
  },
  focus: {
    borderColor: '#1FCC79',
  },
  gap: {
    height: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    marginTop: 48,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: '#2E3E5C',
  },
  time: {
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: '#FF6464',
  },
});
