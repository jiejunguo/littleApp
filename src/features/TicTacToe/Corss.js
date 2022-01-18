import React from "react";
import { View, StyleSheet } from "react-native";

const Corss = () => {
  return (
    <View style={styles.cross}>
      <View style={styles.crossLine} />
      <View style={[styles.crossLine, styles.crossLineReversed]} />
    </View>
  );
};
const styles = StyleSheet.create({
  cross: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  crossLine: {
    position: "absolute",
    width: 13,
    height: "100%",
    backgroundColor: "white",
    borderRadius: 5,
    // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function
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

export default Corss;
