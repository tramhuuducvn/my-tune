import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native-paper'
import { DefaultTheme } from '@react-navigation/native'
import {Dimensions, StyleSheet} from 'react-native'
//Screen tabs
import Home from '../screens/Home'
import Karaoke from '../screens/Karaoke'
import Personal from '../screens/Personal'
import Radio from '../screens/Radio'
import ShortCover from '../screens/ShortCover'

// icon && styles
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/Header'
import {BottomMenuStackName} from './StackName'

const StackName = {...BottomMenuStackName}
const Stack = createBottomTabNavigator();

export default BottomMenu = () => {
  return (
    <Stack.Navigator
      initialRouteName={StackName.HOME_SCREEN}
      screenOptions = {
        {
          header: () => <Header />,
          tabBarActiveTintColor: '#3cb252',
          tabBarInactiveTintColor: '#ccc',
          tabBarBackground: ()=> (<Text style={styles.bottomMenu}></Text>),
        }
      }
    > 
        <Stack.Screen
          name={StackName.PERSONAL_SCREEN} component={Personal}
          options={{
            title: 'Personal',
            tabBarIcon: ({size, color})=>{return <Icon name="music" size={size} color={color}/>}
          }}
        />
        <Stack.Screen 
          name={StackName.KARAOKE_SCREEN} component={Karaoke}
          options={{
            title: 'Karaoke',
            tabBarIcon: ({size, color})=>{return <Icon name="microphone-alt" size={size} color={color} />}
          }}
        />
        <Stack.Screen 
          name={StackName.HOME_SCREEN} component={Home}
          options = {{
              title: 'Home',  
              tabBarIcon: ({size, color})=>{return <Icon name="home" size={size} color={color} />}
          }}
        />
        <Stack.Screen
          name={StackName.RADIO_SCREEN} 
          component={Radio}
          options={{
            title: 'Radio',
            tabBarIcon: ({size, color})=>{return <Icon name="headphones" size={size} color={color} />},
            headerShown: false
          }}
        />
        <Stack.Screen
          name={StackName.SHORT_COVER_SCREEN} component={ShortCover}
          options={{
            title: 'Short Cover',
            tabBarIcon: ({size, color})=>{return <Icon name="star" size={size} color={color} />}
          }}
        />
    </Stack.Navigator>
  )
}