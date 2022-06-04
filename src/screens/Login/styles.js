import {Dimensions, StyleSheet} from 'react-native'

const {width} = Dimensions.get('window')

export default StyleSheet.create({
    root: {
        margin: 10
    },
    container: {
        // justifyContent: 'center',
        // flex: 1
    },
    headerStyle: {
        flexDirection: 'row'
    },
    circleTopLeft:{
        width: width*1.5,
        height: width*1.5,
        borderRadius: width*0.75,
        backgroundColor: '#fc6c00',
        marginTop: -width*0.75,
        marginLeft: -width*0.75
    },
    rectangleTopRight:{
        width: width,
        height: width*0.5,
        backgroundColor: '#fc6c00',
        marginLeft: -width*0.5
    },
    circleBottomRight: {
        width: width*0.5,
        height: width*0.5,
        backgroundColor: '#f2f2f2',
        marginLeft: -width*0.7,
        marginTop: width*0.3,
        borderRadius: width*0.25,
        justifyContent: 'center',
        alignContent: 'center'
    },
    logo_vng: {
        width: 100,
        height: 40,
        alignSelf: 'center',
        resizeMode: 'contain',

    },
    bottomStyle:{
        flexDirection: 'row'
    },
    squareLeftBottom:{
        width: width*0.5,
        height: width*0.5,
        marginLeft: -width*0.1,
        backgroundColor: '#fc6c00',
        transform: [{rotate: '45deg'}],
    },
    squareMidBottom:{
        width: width*0.5,
        height: width*0.5,
        marginLeft: -width*0.1,
        marginTop: width*0.15,
        backgroundColor: '#fc6c00',
        transform: [{rotate: '45deg'}],
    },
    squareRightBottom:{
        width: width*0.5,
        height: width*0.5,
        marginLeft: -width*0.1,
        marginTop: width*0.3,
        backgroundColor: '#fc6c00',
        transform: [{rotate: '45deg'}],
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title:{
        fontSize: 30,
        color: '#fc6c00',
    },
    textField:{
        marginTop: 15,
        marginBottom: 2,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fc6c00',
    },
    input: {
        borderRadius: 10,
        borderWidth: 1,
        height: 40,
        padding: 5,
        borderColor: '#fc6c00',
        fontSize: 20
    },
    button: {
        padding: 10,
        marginTop: 10,
        borderRadius: 16,
        justifyContent: 'center',
    },
    butonTxt: {
        textAlign: 'center',
        fontSize: 16
    },
    loginButton: {
        marginTop: 30,
        backgroundColor: '#fc6c00',
        padding: 10,
        borderRadius: 15,
        width: '50%',
        alignSelf: 'flex-end',
    },
    textForgetPassword:{
        fontWeight: 'normal',
    },
    logoContainer:{
        flexDirection: 'row',
        marginTop: 20,
    },
    logo:{
        width: 15,
        height: 15,
        padding: 15,
        margin: 10,
        resizeMode: 'contain',
    },
    registerButton:{
        marginLeft: -width*0.5,
    },
    registerTxt:{
        color: '#fc6c00',
        textDecorationLine: 'underline'
    }
})
