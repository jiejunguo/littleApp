import React from 'react';
import{View, StyleSheet, TextInput} from 'react-native'
import { FontAwesome, FontAwesome5} from '@expo/vector-icons';


const SearchBar = ()=>{
    return(
        <View style={styles.container}>
           <View style={styles.background}>
           <FontAwesome5 name="city" style={styles.iconStyle} />
            <TextInput style={styles.inputStyle} placeholder="City"/>
            </View>
            <FontAwesome name="search" style={styles.iconStyle} />
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row"
    },
    background:{
        backgroundColor:"#bcc2cc",
        height:50,
        borderRadius:5,
        marginHorizontal:10,
        flex:4,
        alignItems:"center",
        marginTop:10,
        flexDirection:"row"
    },
    inputStyle:{
    fontSize:25,
    flex:2
    },
    iconStyle:{
        fontSize:30,
        alignSelf:'center',
        flex:1,
        paddingLeft:5
    }

})

export default SearchBar