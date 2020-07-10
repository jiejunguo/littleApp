import React from "react";
import { Text, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import Row from "../components/Row";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Little Apps</Text>
      </View>
      <View style={styles.rowContainer}>
        <Row>
          <AppButton
            text="Stop Watch"
            onPress={() => navigation.navigate("StopWatch")}
          />
          <AppButton
            text="Calculator"
            onPress={() => navigation.navigate("Calculator")}
          />
        </Row>
        <Row>
          <AppButton
            text="Weather"
            onPress={() => navigation.navigate("Weather")}
          />
        </Row>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7faa0",
  },
  headerContainer: {
    backgroundColor: "#62d1cc",
    flex: 2,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 30,
    alignSelf: "center",
    color: "#fff",
  },
  rowContainer: {
    flex: 5,
  },
});

export default HomeScreen;
