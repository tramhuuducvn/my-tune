import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import BottomMenu from './navigation/BottomMenu';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <BottomMenu  style={{backgroundColor: "#171717"}}/>
    </NavigationContainer>
  )
}