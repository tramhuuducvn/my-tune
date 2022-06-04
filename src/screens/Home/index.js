import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import styles from './styles'

export default function Home() {
  return (
    <SafeAreaView style = {[styles.root]}>
      <Text> Home </Text>
    </SafeAreaView>
  )
}