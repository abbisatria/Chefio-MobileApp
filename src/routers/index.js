import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ForgotPassword,
  GetStarted,
  SignIn,
  SignUp,
  Verification,
} from '../screens';

const Stack = createStackNavigator();

export default function Routers() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Verification" component={Verification} />
    </Stack.Navigator>
  );
}
