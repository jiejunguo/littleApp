import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import bg from "../../assets/image/bg.jpeg";
const TicTacToeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bg}>
        <Text>TicTacToeScreen</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  bg: {
    width: "100%",
    height: "100%",
  },
  diceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 80,
  },
  button: {
    backgroundColor: "#eae2b7",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    margin: 25,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 30,
    color: "white",
  },
});

export default TicTacToeScreen;
