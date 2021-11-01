import React from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import AppButton from "../components/AppButton";
import Row from "../components/Row";
import { colors } from "../utils/colors";

function ToolsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Little Tools</Text>
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
              text="Counter"
              onPress={() => navigation.navigate("Counter")}
            />
            <AppButton
              text="Counter2"
              onPress={() => navigation.navigate("CounterTwo")}
            />
          </Row>
          <Row>
            <AppButton
              text="Focus Time"
              onPress={() => navigation.navigate("FocusTime")}
            />
          </Row>
          <Row></Row>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgreen,
    alignItems: "center",
  },
  headerContainer: {
    flex: 1,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 30,
    alignSelf: "center",
    color: colors.inkgreeen,
  },
  rowContainer: {
    flex: 5,
    width: "90%",
  },
});

export default ToolsScreen;
