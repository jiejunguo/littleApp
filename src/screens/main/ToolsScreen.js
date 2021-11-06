import React from "react";
import { Text, StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import AppButton from "../../components/AppButton";
import Row from "../../components/Row";
import { colors } from "../../utils/colors";

function ToolsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Little Tools</Text>
        </View>
        <ScrollView style={styles.rowContainer}>
          <Row position="flex-start">
            <AppButton
              bgcolor="#bc6c25"
              iconName="watch-vibrate"
              text="Stop Watch"
              onPress={() => navigation.navigate("StopWatch")}
            />
          </Row>
          <Row position="flex-end">
            <AppButton
              bgcolor="#3a86ff"
              iconName="calculator-variant"
              text="Calculator"
              onPress={() => navigation.navigate("Calculator")}
            />
          </Row>

          <Row position="flex-start">
            <AppButton
              bgcolor="#ff477e"
              iconName="plus-minus"
              text="Counter"
              onPress={() => navigation.navigate("CounterTwo")}
            />
          </Row>
          <Row position="flex-end">
            <AppButton
              bgcolor="#38b000"
              iconName="account-clock"
              text="Focus Time"
              onPress={() => navigation.navigate("FocusTime")}
            />
          </Row>
        </ScrollView>
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

export default ToolsScreen;
