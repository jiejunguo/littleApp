import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import moment from "moment-timezone";
import FutureForcast from "./FutureForcast";

const WeatherScroll = ({ weatherData }) => {
  return (
    <ScrollView horizontal={true} style={styles.scrollViewContainer}>
      <CurrentTemp data={weatherData[0]} />
      <FutureForcast data={weatherData} />
    </ScrollView>
  );
};

const CurrentTemp = ({ data }) => {
  const img = {
    uri: "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@4x.png",
  };
  return (
    <View style={styles.currentTempContainer}>
      <Image source={img} style={styles.img} />
      <View>
        <View style={styles.dayContainer}>
          <Text style={styles.day}>
            {moment(data.dt * 1000).format("dddd")}
          </Text>
        </View>
        <Text style={styles.temp}>Night - {data.temp.night}&#176;C</Text>
        <Text style={styles.temp}>Day - {data.temp.day}&#176;C</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: "#4d4d4e66",
    padding: 30,
    flex: 0.4,
  },
  img: {
    width: 150,
    height: 150,
  },
  currentTempContainer: {
    flexDirection: "row",
    backgroundColor: "#00000033",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#eee",
    borderWidth: 1,
    padding: 15,
  },
  dayContainer: {
    backgroundColor: "#3c3c44cc",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
  },
  day: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "200",
  },
  temp: {
    fontSize: 16,
    color: "white",
    fontWeight: "100",
    textAlign: "center",
  },
  otherContainer: {
    paddingRight: 40,
  },
});

export default WeatherScroll;
