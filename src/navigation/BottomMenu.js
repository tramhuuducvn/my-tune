import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native-paper'

//Screen tabs
import Home from '../screens/Home'
import Karaoke from '../screens/Karaoke'
import Personal from '../screens/Personal'
import Radio from '../screens/Radio'
import ShortCover from '../screens/ShortCover'

// icon && styles
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons';

const Menu = {
  HOME_SCREEN: 'HOME_SCREEN',
  KARAOKE_SCREEN: 'KARAOKE_SCREEN',
  PERSONAL_SCREEN: 'PERSONAL_SCREEN',
  RADIO_SCREEN: 'RADIO_SCREEN',
  SHORT_COVER_SCREEN: 'SHORT_COVER_SCREEN'
}

const Tab = createBottomTabNavigator();



export default BottomMenu = () => {
  return (
    <Tab.Navigator
      initialRouteName={Menu.HOME_SCREEN}
      screenOptions = {
        {
          headerShown: false,
          tabBarActiveTintColor: '#ee2b75',
          tabBarBackground: ()=>{return <Text style={styles.bottomMenu}></Text>}
        }
      }    
    > 
        <Tab.Screen 
          name={Menu.PERSONAL_SCREEN} component={Personal}
          options={{
            title: 'Personal',
            tabBarIcon: ({size, color})=>{return <Icon name="person" size={size} color={color}/>}
          }}
        />
        <Tab.Screen 
          name={Menu.KARAOKE_SCREEN} component={Karaoke}
          options={{
            title: 'Karaoke',
            tabBarIcon: ({size, color})=>{return <Icon name="mic" size={size} color={color} />}
          }}
        />
        <Tab.Screen 
          name={Menu.HOME_SCREEN} component={Home}
          options = {{
              title: 'Home',  
              tabBarIcon: ({size, color})=>{return <Icon name="home" size={size} color={color} />}
          }}
        />
        <Tab.Screen 
          name={Menu.RADIO_SCREEN} component={Radio}
          options={{
            title: 'Radio',
            tabBarIcon: ({size, color})=>{return <Icon name="radio" size={size} color={color} />}
          }}
        />
        <Tab.Screen
          name={Menu.SHORT_COVER_SCREEN} component={ShortCover}
          options={{
            title: 'Short Cover',
            tabBarIcon: ({size, color})=>{return <Icon name="star" size={size} color={color} />}
          }}
        />
    </Tab.Navigator>
  )
}