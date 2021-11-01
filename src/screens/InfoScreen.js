import React from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import AppButton from "../components/AppButton";
import Row from "../components/Row";
import { colors } from "../utils/colors";

function InfoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Little Info</Text>
        </View>
        <Row>
          <AppButton text="News" onPress={() => navigation.navigate("News")} />
          <AppButton
            text="Weather"
            onPress={() => navigation.navigate("Weather")}
          />
        </Row>
        <Row>
          <AppButton
            text="Currency Conversion"
            onPress={() => navigation.navigate("Currency")}
          />
        </Row>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#14213d",
  },
  headerContainer: {
    backgroundColor: "#14213d",
    flex: 1,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 30,
    alignSelf: "center",
    color: "#e5e5e5",
  },
  rowContainer: {
    flex: 5,
  },
});

export default InfoScreen;
