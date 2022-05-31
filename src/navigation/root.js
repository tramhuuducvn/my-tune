import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthenticationStack from './AuthenticationStack'
import BottomMenu from './BottomMenu'
import { RootStackName } from './StackName'

const StackName = {...RootStackName}
const RootStack = createNativeStackNavigator();

const isLogin = false;

export default function root() {
  return (
    <RootStack.Navigator
        // initialRouteName={StackName.UNAUTHORIZED}
        screenOptions={{
            headerShown: false
        }}
    >
        {/* {!isLogin?
           (<RootStack.Screen 
                name={StackName.UNAUTHORIZED}
                component={AuthenticationStack}
            />) : (
            <RootStack.Screen
                name={StackName.AUTHORIZED}
                component={BottomMenu}
            />)
        } */}

        <RootStack.Screen 
            name={StackName.UNAUTHORIZED}
            component={AuthenticationStack}
        />
        <RootStack.Screen
            name={StackName.AUTHORIZED}
            component={BottomMenu}
        />
    </RootStack.Navigator>
  )
}