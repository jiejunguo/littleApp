import React, {useState} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Row from "../components/CalculatorRow";
import Button from "../components/CalculatorButton"



const CalculatorScreen = () => {
  
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Calculator</Text>
      </View>
      <View style={styles.buttonContainer}>
      <Row>
        <Button text="C" theme="secondary" onPress={()=>alert('TBD')}/>
        <Button text="+/-" theme="secondary" onPress={()=>alert('TBD')}/>
        <Button text="%" theme="secondary" onPress={()=>alert('TBD')}/>
        <Button text="/" theme="accent" onPress={()=>alert('TBD')}/>
      </Row>
      <Row>
        <Button text="7" onPress={()=>alert('TBD')}/>
        <Button text="8" onPress={()=>alert('TBD')}/>
        <Button text="9" onPress={()=>alert('TBD')}/>
        <Button text="X" theme="accent" onPress={()=>alert('TBD')}/>
      </Row>
      <Row>
        <Button text="4" onPress={()=>alert('TBD')}/>
        <Button text="5" onPress={()=>alert('TBD')}/>
        <Button text="6" onPress={()=>alert('TBD')}/>
        <Button text="-" theme="accent" onPress={()=>alert('TBD')}/>
      </Row>
      <Row>
        <Button text="1" onPress={()=>alert('TBD')}/>
        <Button text="2" onPress={()=>alert('TBD')}/>
        <Button text="3" onPress={()=>alert('TBD')}/>
        <Button text="+" theme="accent" onPress={()=>alert('TBD')}/>
      </Row>
      <Row>
        <Button text="0" size ="double" onPress={()=>alert('TBD')}/>
        <Button text="." onPress={()=>alert('TBD')}/>
        <Button text="=" theme="accent" onPress={()=>alert('TBD')}/>
      </Row>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#202020",
  },
  textContainer:{
    flex:2,
    justifyContent:"flex-end"
  },
 text:{
   color:"#fff",
   textAlign:"right",
   fontSize:40,
   marginRight:20
 },
 buttonContainer:{
   flex:5
 }
})

export default CalculatorScreen;
