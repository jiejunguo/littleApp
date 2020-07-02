import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer'
import { TouchableOpacity } from 'react-native-gesture-handler';

const StopWatchScreen = () => {

  return (
    <View>
      <Text style={styles.textStyle}>Stop Watch</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {

    fontSize: 45
  },

});

export default StopWatchScreen;