import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import BottomMenu from './src/navigation/BottomMenu';

import { NavigationContainer } from '@react-navigation/native';

import MyTune from './src/App'

export default function App() {
  return (
    <MyTune />
  )
}