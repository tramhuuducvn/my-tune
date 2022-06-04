import {Dimensions, StyleSheet} from 'react-native'
import {COLOR} from '../assets/theme'
const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
    bottomMenu: {
        backgroundColor: COLOR.background,
        elevation: 0,
        height: '100%'
    }
})