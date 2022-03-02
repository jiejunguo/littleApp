import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import { colors, colorsToEmoji } from "../utils/colors";
import Keyboard from "../features/Wordle/Keyboard";
import * as Clipboard from "expo-clipboard";
import { words } from "../utils/wordlist";

const NUMBER_OF_TRIES = 6;
const copyArray = (arr) => {
  return [...arr.map((rows) => [...rows])];
};

const getDayOfTheYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return day;
};

const dayOfTheYer = getDayOfTheYear();

const WordleScreen = () => {
  const word = words[dayOfTheYer];
  const letters = word.split(""); // ["h","e","l","l","o"]

  const [rows, setRows] = useState(
    new Array(NUMBER_OF_TRIES).fill(new Array(letters.length).fill(""))
  );
  const [curRow, setCurRow] = useState(0);
  const [curCol, setCurCol] = useState(0);
  const [gameState, setGameState] = useState("playing"); //won, lost, playing

  useEffect(() => {
    if (curRow > 0) {
      checkGameState();
    }
  }, [curRow]);

  const checkGameState = () => {
    if (checkIFWon() && gameState !== "won") {
      Alert.alert("Huraaay", "You won!", [
        { text: "Share", onPress: shareScore },
      ]);
      setGameState("won");
    } else if (checkIFLost() && gameState !== "lost") {
      Alert.alert("Meh", "Try again tomorrow!");
      setGameState("lost");
    }
  };

  const shareScore = () => {
    const textShare = rows
      .map((row, i) =>
        row.map((cell, j) => colorsToEmoji[getCellBGColor(i, j)]).join("")
      )
      .filter((row) => row)
      .join("\n");
    Clipboard.setString(textShare);
    Alert.alert("Copied Successfully", "Share your score on your social media");
  };

  const checkIFWon = () => {
    const row = rows[curRow - 1];

    return row.every((each, i) => each === letters[i]);
  };

  const checkIFLost = () => {
    return !checkIFWon() && curRow === rows.length;
  };

  const onKeyPressed = (key) => {
    if (gameState !== "playing") {
      return;
    }
    const updatedRows = copyArray(rows);

    if (key === "CLEAR") {
      const prevCol = curCol - 1;
      if (prevCol >= 0) {
        updatedRows[curRow][prevCol] = "";
        setRows(updatedRows);
        setCurCol(prevCol);
      }
      return;
    }

    if (key === "ENTER") {
      if (curCol === rows[0].length) {
        setCurRow(curRow + 1);
        setCurCol(0);
      }
      return;
    }

    if (curCol < rows[0].length) {
      updatedRows[curRow][curCol] = key;
      setRows(updatedRows);
      setCurCol(curCol + 1);
    }
  };

  const isCellActive = (row, col) => {
    return row === curRow && col === curCol;
  };

  const getCellBGColor = (row, col) => {
    const letter = rows[row][col];
    if (row >= curRow) {
      return colors.black;
    }
    if (letter === letters[col]) {
      return colors.primary;
    }
    if (letters.includes(letter)) {
      return colors.secondary;
    }
    return colors.darkgrey;
  };

  const getAllLettersWithColor = (color) => {
    return rows.flatMap((row, i) =>
      row.filter((cell, j) => getCellBGColor(i, j) === color)
    );
  };

  const greenCaps = getAllLettersWithColor(colors.primary);
  const yellowCaps = getAllLettersWithColor(colors.secondary);
  const greyCaps = getAllLettersWithColor(colors.darkgrey);

  console.log(greenCaps);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>WORDLE</Text>
      <ScrollView style={styles.map}>
        {rows.map((row, i) => (
          <View style={styles.row} key={`row-${i}`}>
            {row.map((letter, j) => (
              <View
                key={`cell-${i}-${j}`}
                style={[
                  styles.cell,
                  {
                    borderColor: isCellActive(i, j)
                      ? colors.lightgrey
                      : colors.darkgrey,
                    backgroundColor: getCellBGColor(i, j),
                  },
                ]}
              >
                <Text style={styles.cellText}>{letter.toUpperCase()}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
      <Keyboard
        onKeyPressed={onKeyPressed}
        greenCaps={greenCaps}
        yellowCaps={yellowCaps}
        greyCaps={greyCaps}
      />
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
  map: {
    marginVertical: 20,
    alignSelf: "stretch",
    height: 100,
  },
  row: {
    // alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
  },
  cell: {
    borderWidth: 2,
    borderColor: colors.darkgrey,
    flex: 1,
    aspectRatio: 1,
    margin: 3,
    maxWidth: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  cellText: {
    color: colors.lightgrey,
    fontWeight: "bold",
    fontSize: 28,
  },
});

export default WordleScreen;
