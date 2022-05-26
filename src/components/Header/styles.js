import {Dimensions, StyleSheet} from 'react-native'

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginHorizontal: 10,
        borderRadius: 15,
        height: 30,
        fontSize: 18,
        paddingHorizontal: 15
    }
})