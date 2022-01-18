import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Cross from "./Corss";

const Cell = (props) => {
  const { cell, onPress } = props;
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.cell}>
      {cell === "o" && <View style={styles.circle} />}
      {cell === "x" && <Cross />}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  cell: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 3,
  },
  circle: {
    width: "80%",
    height: "80%",
    borderRadius: 50,
    margin: 10,
    borderWidth: 12,
    borderColor: "white",
  },
});
export default Cell;
