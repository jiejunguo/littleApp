import React, {useState} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer'
import { TouchableOpacity } from 'react-native-gesture-handler';
import StopWatchContainer from "../components/stopWatch/stopwatchContainer"

const StopWatchScreen = () => {

  return (
    <View style={styles.container} >
      <StopWatchContainer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#214B71"
  }

});

export default StopWatchScreen;