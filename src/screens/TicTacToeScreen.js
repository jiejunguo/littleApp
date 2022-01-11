import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import bg from "../../assets/image/bg.jpeg";
const TicTacToeScreen = () => {
  const [map, setMap] = useState([
    ["", "", ""], //1st row
    ["", "", ""], //2nd row
    ["", "", ""], //3rd row
  ]);
  const [currentTurn, setCurrentTurn] = useState("x");

  const onPress = (rowIndex, columnIndex) => {
    if (map[rowIndex][columnIndex] !== "") {
      Alert.alert("Position already occupied");
      return;
    }
    setMap((existingMap) => {
      const updateMap = [...existingMap];
      updateMap[rowIndex][columnIndex] = currentTurn;
      return updateMap;
    });
    setCurrentTurn(currentTurn === "x" ? "o" : "x");
  };
  return (
    <View style={styles.container}>
      {/* https://mehrankhandev.medium.com/understanding-resizemode-in-react-native-dd0e455ce63 */}
      <ImageBackground source={bg} style={styles.bg}>
        <View style={styles.map}>
          {map.map((row, rowIndex) => (
            <View style={styles.row}>
              {row.map((cell, columnIndex) => (
                <TouchableOpacity
                  onPress={() => onPress(rowIndex, columnIndex)}
                  style={styles.cell}
                >
                  {cell === "o" && <View style={styles.circle} />}
                  {cell === "x" && (
                    <View style={styles.cross}>
                      <View style={styles.crossLine} />
                      <View
                        style={[styles.crossLine, styles.crossLineReversed]}
                      />
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          ))}
          {/* <View style={styles.circle} />
          <View style={styles.cross}>
            <View style={styles.crossLine} />
            <View style={[styles.crossLine, styles.crossLineReversed]} />
          </View> */}
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
    backgroundColor: "#303A3E",
  },
  bg: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 22,
  },
  map: {
    width: "88%",
    aspectRatio: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
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

export default TicTacToeScreen;
