import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Alert } from "react-native";
import bg from "../../assets/image/bg.jpeg";
import Cell from "../features/TicTacToe/Cell";

const emptyMap = [
  ["", "", ""], //1st row
  ["", "", ""], //2nd row
  ["", "", ""], //3rd row
];

const TicTacToeScreen = () => {
  const [map, setMap] = useState(emptyMap);
  const [currentTurn, setCurrentTurn] = useState("x");

  const onPress = (rowIndex, columnIndex) => {
    if (map[rowIndex][columnIndex] !== "") {
      Alert.alert("Position already occupied");
      return;
    }
    setMap((existingMap) => {
      existingMap[rowIndex][columnIndex] = currentTurn;
      return existingMap;
    });
    map[rowIndex][columnIndex] = currentTurn;

    const winner = getWinner();
    console.log(winner);
    if (winner) {
      gameWon(winner);
    } else {
      checkTieState();
    }

    setCurrentTurn(currentTurn === "x" ? "o" : "x");
  };

  const getWinner = () => {
    //check rows
    for (let i = 0; i < 3; i++) {
      const isRowXWinning = map[i].every((cell) => cell === "x");
      const isRowOWinning = map[i].every((cell) => cell === "o");
      if (isRowXWinning) {
        return "X";
      }
      if (isRowOWinning) {
        return "O";
      }
    }
    //check columns
    //if o in last col, the app crash
    for (let col = 0; col < 3; col++) {
      let isColXWinning = true;
      let isColOWinning = true;

      for (let row = 0; row < 3; row++) {
        if (map[row][col] !== "x") {
          isColXWinning = false;
        }
        if (map[row][col] !== "o") {
          isColOWinning = false;
        }
      }
      if (isColXWinning) {
        return "X";
      }
      if (isColOWinning) {
        return "O";
      }
    }
    //check diagonals
    let isDiagonal1OWinning = true;
    let isDiagonal1XWinning = true;
    let isDiagonal2OWinning = true;
    let isDiagonal2XWinning = true;
    for (let i = 0; i < 3; i++) {
      if (map[i][i] !== "o") {
        isDiagonal1OWinning = false;
      }
      if (map[i][i] !== "x") {
        isDiagonal1XWinning = false;
      }
      if (map[i][2 - i] !== "o") {
        isDiagonal2OWinning = false;
      }
      if (map[i][2 - i] !== "x") {
        isDiagonal2XWinning = false;
      }
    }
    if (isDiagonal1OWinning || isDiagonal2OWinning) {
      return "O";
    }
    if (isDiagonal1XWinning || isDiagonal2XWinning) {
      return "X";
    }
  };

  const checkTieState = () => {
    console.log(map);
    if (!map.some((row) => row.some((cell) => cell !== ""))) {
      Alert.alert(`It's a tie`, `tie`, [
        { text: "Restart", onPress: resetGame },
      ]);
    }
  };

  const gameWon = (player) => {
    Alert.alert(`Huraay`, `Player ${player} won`, [
      { text: "Restart", onPress: resetGame },
    ]);
  };

  const resetGame = () => {
    setMap([
      ["", "", ""], //1st row
      ["", "", ""], //2nd row
      ["", "", ""], //3rd row
    ]);
    setCurrentTurn("x");
  };

  return (
    <View style={styles.container}>
      {/* https://mehrankhandev.medium.com/understanding-resizemode-in-react-native-dd0e455ce63 */}
      <ImageBackground source={bg} style={styles.bg}>
        <Text
          style={{
            fontSize: 24,
            color: "white",
            top: 100,
            position: "absolute",
          }}
        >
          Current Turn:{currentTurn.toUpperCase()}
        </Text>

        <View style={styles.map}>
          {map.map((row, rowIndex) => (
            <View key={`row-${rowIndex}`} style={styles.row}>
              {row.map((cell, columnIndex) => (
                <Cell
                  key={`row-${rowIndex}-col-${columnIndex}`}
                  cell={cell}
                  onPress={() => onPress(rowIndex, columnIndex)}
                />
              ))}
            </View>
          ))}
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
    backgroundColor: "#242D33",
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
});

export default TicTacToeScreen;
