import { KeyboardAvoidingView , SafeAreaView,TouchableWithoutFeedback, Keyboard,View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useState} from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { UnauthorizeStackName } from '../../navigation/StackName';
import { RootStackName } from '../../navigation/StackName';

export default function Login() {
    const [email, onEmailChange] = useState("")
    const [password, onPasswordChange] = useState("")
    const navigation = useNavigation()
    let user = {email: 'abc@gmail.com', password: '123456'}
    
    const login = ()=>{
      navigation.navigate(RootStackName.AUTHORIZED);
    }

    const register = ()=>{
      navigation.navigate(UnauthorizeStackName.REGISTER_SCREEN)
    }

    return (        
      <KeyboardAvoidingView 
        // behavior="padding"
      >
            <View style={styles.headerStyle}>
                <View style={styles.circleTopLeft}></View>
                <View style={styles.rectangleTopRight}></View>
                <View style={styles.circleBottomRight}>
                    <Image
                        style={styles.logo_vng}
                        source={{
                        uri: 'https://images.careerbuilder.vn/employer_folders/lot1/90041/102851logovng.png'
                        }} 
                    />
                </View>
            </View>            
            
            <View  style = {[styles.root, styles.container]}>
                <Text style={styles.title}>Login</Text>
                
                <Text style={styles.textField}> Email: </Text>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <TextInput
                        style = {styles.input}
                        onChangeText = {onEmailChange}
                        autoCapitalize = 'none'
                        value = {email}
                    />
                </TouchableWithoutFeedback>  

                <Text style={styles.textField}> Password: </Text>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <TextInput
                        style = {styles.input}
                        onChangeText = {onPasswordChange}
                        autoCapitalize = 'none'
                        value = {password}
                        secureTextEntry={true}
                    />
                </TouchableWithoutFeedback>
                

                <View style={styles.rowContainer}>
                    <View style={styles.logoContainer}>
                        <TouchableOpacity>
                            <Image
                                style={styles.logo}
                                source={require('../../assets/img/apple_logo.png')} 
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={styles.logo}
                                source={require('../../assets/img/google_logo.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={styles.logo}
                                source={require('../../assets/img/facebook_logo.png')} 
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text style={[styles.textField, styles.textForgetPassword]}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>            
                <TouchableOpacity onPress={login} style={[styles.buton, styles.loginButton]}>
                    <Text style={styles.butonTxt}>Login</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.bottomStyle}>
                <View style={styles.squareLeftBottom}></View>
                <View style={styles.squareMidBottom}></View>
                <View style={styles.squareRightBottom}></View>
                <TouchableOpacity onPress={register} style={styles.registerButton}>
                    <Text style={[styles.butonTxt, styles.registerTxt]}>Register Now!</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>       
    )
}