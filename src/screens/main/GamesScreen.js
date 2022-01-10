import React from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import AppButton from "../../components/AppButton";
import Row from "../../components/Row";
import { colors } from "../../utils/colors";

function GamesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Little Games</Text>
        </View>
        <View style={styles.rowContainer}>
          <Row>
            <AppButton
              bgcolor="#48bfe3"
              iconName="dice-6"
              text="Roll Dice"
              onPress={() => navigation.navigate("RollDice")}
            />
          </Row>
          <Row position="flex-end">
            <AppButton
              bgcolor="#ff4d6d"
              iconName="cloud-question"
              text="Number Guess"
              onPress={() => navigation.navigate("NumberGuess")}
            />
          </Row>
          <Row>
            <AppButton
              bgcolor="#48bfe3"
              iconName="dice-6"
              text="Tic Tac Toe"
              onPress={() => navigation.navigate("TicTacToe")}
            />
          </Row>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefae0",
  },
  headerContainer: {
    padding: 30,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 30,
    alignSelf: "center",
    color: colors.inkgreeen,
  },
  rowContainer: {},
});

export default GamesScreen;
