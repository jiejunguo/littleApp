import React from "react";
import { Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const ButtonWidth = screen.width / 4;

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size == "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme == "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme == "accent") {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#14213d",
    flex: 1,
    height: ButtonWidth - 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: ButtonWidth,
    margin: 5,
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  text: {
    color: "#fff",
    fontSize: 30,
  },
  textSecondary: {
    color: "#060606",
  },
  buttonSecondary: {
    backgroundColor: "#fca311",
  },
  buttonAccent: {
    backgroundColor: "#a8dadc",
  },
});
