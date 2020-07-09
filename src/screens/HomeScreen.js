import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import AppButton from "../components/AppButton"
import Row from "../components/CalculatorRow"



function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Little Apps</Text>
      </View>
      <View style= {styles.rowContainer}>
      <Row>
        <AppButton text="Stop Watch"  onPress={()=>navigation.navigate('StopWatch')}/>
        <AppButton text="Calculator"  onPress={()=>navigation.navigate('Calculator')}/>
      </Row>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#f7faa0"
  },
  headerContainer:{
    backgroundColor:"#62d1cc",
    flex: 2,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    alignSelf:"center",
    color:"#fff"
  },
  rowContainer:{
    flex:5
  },
  button:{
    backgroundColor: "#214B71",
    flex: 1,
    borderWidth:1,
    borderRadius: 10,
    borderColor:"#CFAA69",
  },
  buttonText:{
    textAlign: "center",
    textAlignVertical: 'center',
    fontSize: 30,
    alignSelf:"center",
    color:"#CFAA69"
  }
});

export default HomeScreen;