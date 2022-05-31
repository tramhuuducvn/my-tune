import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Header() {
    const [text, setText] = useState('');
    return (
        <SafeAreaView style={[styles.root]}>
            <SafeAreaView style = {styles.container}>
                <TouchableOpacity style = {[styles.logoContainer]}>
                    <Icon name = 'image' style={[styles.logo]}/>
                </TouchableOpacity>

                <View style = {styles.searchContainer}>
                    <TextInput 
                        style = {[styles.searchInput]}
                        placeholder = 'Tìm kiếm bài hát...'
                        onChangeText = {newText => setText(newText)}
                        defaultValue = ''
                    />
                    <TouchableOpacity style = {[styles.logoContainer, styles.micButton]}>
                        <Icon name = 'microphone' style={[styles.logo, styles.micIcon]} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style = {[styles.logoContainer]}>
                    <Icon name = 'bell' style={[styles.logo]}/>
                    <View style={[styles.notice]}></View>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
    )
}