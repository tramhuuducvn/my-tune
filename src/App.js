import { StatusBar} from 'react-native';
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {COLOR} from './assets/theme';
import RootStack from './navigation/root';
import * as SecureStore from 'expo-secure-store';

const AuthContext = React.createContext();


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor= {COLOR.background}
      />
      <RootStack />
    </NavigationContainer>
  )
}