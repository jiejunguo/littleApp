import React from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import AppButton from "../../components/AppButton";
import Row from "../../components/Row";
import { colors } from "../../utils/colors";

function InfoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Little Infos</Text>
        </View>
        <View style={styles.rowContainer}>
          <Row position="flex-start">
            <AppButton
              iconName="newspaper"
              bgcolor="#2a9d8f"
              text="News"
              onPress={() => navigation.navigate("News")}
            />
          </Row>
          <Row position="flex-end">
            <AppButton
              iconName="weather-partly-cloudy"
              bgcolor="#e76f51"
              text="Weather"
              onPress={() => navigation.navigate("Weather")}
            />
          </Row>
          <Row position="flex-start">
            <AppButton
              iconName="currency-eur"
              bgcolor="#fca311"
              text="Currency Conversion"
              onPress={() => navigation.navigate("Currency")}
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

export default InfoScreen;
