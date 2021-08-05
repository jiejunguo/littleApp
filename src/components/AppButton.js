import React from "react";
import { Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const ButtonWidth = screen.width / 4;

export default ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fca311",
    flex: 1,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderColor: "#e5e5e5",
    borderWidth: 1,
  },
  text: {
    color: "#e5e5e5",
    fontSize: 25,
  },
});
