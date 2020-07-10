import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';


const screen= Dimensions.get("window");
const ButtonWidth = screen.width/4;

export default ({onPress, text}) => {
    return(
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
    )
}
    const styles = StyleSheet.create({
        button:{
            backgroundColor:"#73d7f0",
            flex:1,
            height:ButtonWidth+20,
            alignItems:"center",
            justifyContent:"center",
            borderRadius:5,
            borderColor:"#fff",
            borderWidth:1
        },
        text:{
            color:"#fff",
            fontSize:25
        }
      })