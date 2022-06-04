import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login';
import Register from '../screens/Register';
import {UnauthorizeStackName} from './StackName'

const StackName = {...UnauthorizeStackName}
const Stack = createNativeStackNavigator();

export default function AuthenticationStack() {
  return (
    <Stack.Navigator 
        initialRouteName={StackName.LOGIN_SCREEN}
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen 
            name={StackName.LOGIN_SCREEN}
            component={Login}
        /> 

        <Stack.Screen 
            name={StackName.REGISTER_SCREEN}
            component={Register}
        />
    </Stack.Navigator>
  )
}