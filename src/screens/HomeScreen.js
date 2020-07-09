import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Little Apps</Text>
      </View>
      <View style={styles.optionContainer}>
      <View style= {styles.rowContainer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('StopWatch')}><Text style={styles.buttonText}>1 Stop Watch</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Calculator')}><Text style={styles.buttonText}>2 Calculator</Text></TouchableOpacity>
      </View>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
  },
  headerContainer:{
    backgroundColor:"#214B71",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 30,
    alignSelf:"center",
    color:"#CFAA69"
  },
  optionContainer:{
    flex: 1,
    flexDirection:"column",
  },
  rowContainer:{
    flex:1,
    flexDirection:"row",
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