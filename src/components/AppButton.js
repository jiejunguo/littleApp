import React from "react";
import { Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const screen = Dimensions.get("window");
const ButtonWidth = screen.width * 0.45;

export default ({ onPress, text, bgcolor, iconName }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: bgcolor }}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
      <MaterialCommunityIcons name={iconName} size={36} color="#e5e5e5" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderColor: "#e5e5e5",
    borderWidth: 1,
  },
  text: {
    color: "#e5e5e5",
    fontSize: 25,
    marginBottom: 20,
  },
});
