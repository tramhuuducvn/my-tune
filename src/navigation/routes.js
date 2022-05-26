import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AppRoute from './AppRoute'

import Home from '../screens/Home'
import Karaoke from '../screens/Karaoke'
import Personal from '../screens/Personal'
import Radio from '../screens/Radio'
import ShortCover from '../screens/ShortCover'

const Stack = createNativeStackNavigator();

export default function routes() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={AppRoute.HOME_SCREEN} component={Home}/>
            <Stack.Screen name={AppRoute.KARAOKE_SCREEN} component={Karaoke}/>
            <Stack.Screen name={AppRoute.PERSONAL_SCREEN} component={Personal}/>
            <Stack.Screen name={AppRoute.RADIO_SCREEN} component={Radio}/>
            <Stack.Screen name={AppRoute.SHORT_COVER_SCREEN} component={ShortCover}/>
        </Stack.Navigator>
    </NavigationContainer>    
  )
}