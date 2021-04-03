import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './src/routers';

export default function App() {
  return (
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
  );
}
