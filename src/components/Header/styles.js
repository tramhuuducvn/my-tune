import {Dimensions, StyleSheet} from 'react-native'
const {width, height} = Dimensions.get('window')

import {COLOR} from '../../assets/theme';


export default StyleSheet.create({
    root:{
        borderBottomWidth: 2,
        // borderBottomColor: '#ccc',
        // backgroundColor: '#f00',
    },
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingVertical: 5,
        backgroundColor: COLOR.background,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer:{
        backgroundColor: COLOR.secondPrimary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 10000,
        borderColor: COLOR.secondPrimary,
        width: 39,
        height: 39,
    },
    logo: {
        fontSize: 18,
        color: COLOR.primary
    },
    micButton: {
        position: 'absolute',
        right: 7,
        width: 36,
        height: 36,
        backgroundColor: COLOR.background,
    },
    micIcon: {
        fontSize: 12,
    },  
    searchInput: {
        borderColor: COLOR.secondPrimary,
        backgroundColor: COLOR.secondPrimary,
        color: COLOR.textColor,
        marginHorizontal: 5,
        paddingHorizontal: 15,
        borderRadius: 20,
        borderWidth: 2,
        height: 40,
        fontSize: 18,
        width: width*0.7,
        textAlign: 'left',
        textAlignVertical: 'center'
    },
    notice: {
        backgroundColor: '#f00',
        position: 'absolute',
        top: 0,
        right: 0,
        width: 10,
        height: 10,
        borderRadius: 50
    }
})