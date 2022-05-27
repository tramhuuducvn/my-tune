import {Dimensions, StyleSheet} from 'react-native'
const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
    root:{
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#fff'
    },
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'center',
        shadowColor: '#ccc',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
        marginBottom: 4
    },
    searchContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer:{
        backgroundColor: '#333333',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 1000,
        borderWidth: 2,
        borderColor: '#333333'
    },
    logo: {
        fontSize: 18,
        color: '#3cb252'
    },
    micButton: {
        position: 'absolute',
        right: 10,
    },
    micIcon: {
        fontSize: 11,
        paddingHorizontal: 1,
    },  
    searchInput: {
        borderColor: '#ccc',
        marginHorizontal: 5,
        paddingHorizontal: 15,
        borderRadius: 15,
        borderWidth: 2,
        height: 32,
        fontSize: 18,
        width: width*0.75,
    },
})