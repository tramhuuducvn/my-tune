import { SafeAreaView, View, Text, TextInput } from 'react-native'
import React, {useState} from 'react'
import styles from './styles';

export default function Header() {
    const [text, setText] = useState('');
    return (
        <SafeAreaView style = {styles.container}>
            <View></View>
            <TextInput 
                style = {[styles.searchInput]}
                placeholder = "Type here to translate!"
                onChangeText = {newText => setText(newText)}
                defaultValue = ''
            />
        </SafeAreaView>
    )
}