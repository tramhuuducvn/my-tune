import {Dimensions, StyleSheet} from 'react-native'

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
    bottomMenu: {
        width: width,
        height: width/5,
        backgroundColor: '#231a2e'
    }
})