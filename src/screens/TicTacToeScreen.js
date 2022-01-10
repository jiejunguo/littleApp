import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import bg from "../../assets/image/bg.jpeg";
const TicTacToeScreen = () => {
  return (
    <View style={styles.container}>
      {/* https://mehrankhandev.medium.com/understanding-resizemode-in-react-native-dd0e455ce63 */}
      <ImageBackground source={bg} style={styles.bg}>
        <View style={styles.circle} />
        <View>
          <View style={styles.crossLine} />
          <View style={[styles.crossLine, styles.crossLineReversed]} />
        </View>
      </ImageBackground>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#242034",
  },
  bg: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 22,
  },
  circle: {
    width: 85,
    height: 85,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderWidth: 10,
    borderColor: "white",
  },

  crossLine: {
    position: "absolute",
    width: 15,
    height: 95,
    backgroundColor: "white",
    borderRadius: 5,
    transform: [
      {
        rotate: "45deg",
      },
    ],
  },
  crossLineReversed: {
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
});

export default TicTacToeScreen;
