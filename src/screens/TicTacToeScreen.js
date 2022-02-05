import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, Alert } from "react-native";
import bg from "../../assets/image/bg.jpeg";
import Cell from "../features/TicTacToe/Cell";

const emptyMap = [
  ["", "", ""], //1st row
  ["", "", ""], //2nd row
  ["", "", ""], //3rd row
];

const copyArray = (original) => {
  const copy = original.map((arr) => {
    return arr.slice();
  });
  return copy;
};

const TicTacToeScreen = () => {
  const [map, setMap] = useState(emptyMap);
  const [currentTurn, setCurrentTurn] = useState("x");
  const [gameMode, setGameMode] = useState("BOT_MEDIUM"); // LOCAL, BOT_EASY, BOT_MEDIUM

  useEffect(() => {
    if (currentTurn === "o" && gameMode !== "LOCAL") {
      botTurn();
    }
  }, [currentTurn, gameMode]);

  useEffect(() => {
    const winner = getWinner(map);
    if (winner) {
      gameWon(winner);
    } else {
      //   checkTieState();
    }
  }, [map]);

  const onPress = (rowIndex, columnIndex) => {
    if (map[rowIndex][columnIndex] !== "") {
      Alert.alert("Position already occupied");
      return;
    }
    setMap((existingMap) => {
      const updatedMap = [...existingMap];
      existingMap[rowIndex][columnIndex] = currentTurn;
      return updatedMap;
    });
    setCurrentTurn(currentTurn === "x" ? "o" : "x");
  };

  const getWinner = (winnerMap) => {
    //check rows
    for (let i = 0; i < 3; i++) {
      const isRowXWinning = winnerMap[i].every((cell) => cell === "x");
      const isRowOWinning = winnerMap[i].every((cell) => cell === "o");
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
        if (winnerMap[row][col] !== "x") {
          isColXWinning = false;
        }
        if (winnerMap[row][col] !== "o") {
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
      if (winnerMap[i][i] !== "o") {
        isDiagonal1OWinning = false;
      }
      if (winnerMap[i][i] !== "x") {
        isDiagonal1XWinning = false;
      }
      if (winnerMap[i][2 - i] !== "o") {
        isDiagonal2OWinning = false;
      }
      if (winnerMap[i][2 - i] !== "x") {
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

  const botTurn = () => {
    //collet all possible options
    let possiblePositions = [];
    map.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        if (cell === "") {
          possiblePositions.push({ row: rowIndex, col: columnIndex });
        }
      });
    });

    // Attack
    let chosenOption;

    if (gameMode === "BOT_MEDIUM") {
      possiblePositions.forEach((possiblePosition) => {
        const mapCopy = copyArray(map);
        mapCopy[possiblePosition.row][possiblePosition.col] = "o";

        const winner = getWinner(mapCopy);
        if (winner === "o") {
          //Defend that position
          chosenOption = possiblePosition;
        }
      });
      //Defend
      //Check if the opponent WINS if it takes one of the possible Positions

      possiblePositions.forEach((possiblePosition) => {
        const mapCopy = copyArray(map);
        mapCopy[possiblePosition.row][possiblePosition.col] = "x";

        const winner = getWinner(mapCopy);
        if (winner === "x") {
          //Defend that position
          chosenOption = possiblePosition;
        }
      });
    }
    //choose random
    if (!chosenOption) {
      chosenOption =
        possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
    }
    if (chosenOption) {
      onPress(chosenOption.row, chosenOption.col);
    }
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
        <View style={styles.buttons}>
          <Text
            onPress={() => setGameMode("LOCAL")}
            style={[
              styles.button,
              { backgroundColor: gameMode === "LOCAL" ? "#4F5686" : "#191F24" },
            ]}
          >
            Local
          </Text>
          <Text
            onPress={() => setGameMode("BOT_EASY")}
            style={[
              styles.button,
              {
                backgroundColor:
                  gameMode === "BOT_EASY" ? "#4F5686" : "#191F24",
              },
            ]}
          >
            Easy Bot
          </Text>
          <Text
            onPress={() => setGameMode("BOT_Medium")}
            style={[
              styles.button,
              {
                backgroundColor:
                  gameMode === "BOT_Medium" ? "#4F5686" : "#191F24",
              },
            ]}
          >
            Medium Bot
          </Text>
        </View>
      </ImageBackground>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  buttons: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
  },
  button: {
    color: "white",
    margin: 10,
    fontSize: 20,
    backgroundColor: "black",
    padding: 10,
    paddingHorizontal: 15,
  },
});

export default TicTacToeScreen;
