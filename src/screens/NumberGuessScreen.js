import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";

const NumberGuessScreen = () => {
  const [guessNumber, setGuessNumber] = useState(50);
  const [change, setChange] = useState(50);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    setIsStart(false);
  }, []);

  const handleGreater = () => {
    const newChange = Math.ceil(change / 2);
    const newGuessNumber = guessNumber + Math.ceil(change / 2);
    setChange(newChange);
    setGuessNumber(newGuessNumber);
  };

  const handleSmaller = () => {
    const newChange = Math.ceil(change / 2);
    const newGuessNumber = guessNumber - Math.ceil(change / 2);
    setChange(newChange);
    setGuessNumber(newGuessNumber);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        {isStart ? (
          <Text>Your Number is {guessNumber}</Text>
        ) : (
          <Text style={styles.titleText}>
            Think of a number between 1 - 100, then press the "Start" button
          </Text>
        )}
      </View>
      <View>
        {isStart ? (
          <View style={styles.buttonRow}>
            <Button title="Greater" onPress={() => handleGreater()} />
            <Button title="Smaller" onPress={() => handleSmaller()} />
          </View>
        ) : (
          <Button title="Start" onPress={setIsStart(true)} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
  },
  title: {
    backgroundColor: "yellow",
    flex: 0.2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonRow: {
    flex: 0.5,
  },
});

export default NumberGuessScreen;
