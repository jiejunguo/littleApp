import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";
import { colors } from "../utils/colors";
import Game from "../features/Wordle/Game";

const WordleScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>WORDLE</Text>
      <Game />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
  },
  title: {
    color: colors.lightgrey,
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 5,
  },
});

export default WordleScreen;
