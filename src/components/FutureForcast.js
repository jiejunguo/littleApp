import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import moment from "moment-timezone";

const FutureForcast = ({ data }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {data.map((item, index) => {
        if (index !== 0)
          return <FutureForecastItem item={item} key={item.dt} />;
      })}
    </View>
  );
};

const FutureForecastItem = ({ item }) => {
  const img = {
    uri: "http://openweathermap.org/img/wn/" + item.weather[0].icon + "@2x.png",
  };
  return (
    <View style={styles.futureForecastItemContainer}>
      <Text style={styles.day}>{moment(item.dt * 1000).format("ddd")}</Text>
      <Image source={img} style={styles.image} />
      <Text style={styles.temp}>Night - {item.temp.night}&#176;C</Text>
      <Text style={styles.temp}>Day - {item.temp.day}&#176;C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
  futureForecastItemContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#00000033",
    borderRadius: 10,
    borderColor: "#eee",
    borderWidth: 1,
    padding: 20,
    marginLeft: 10,
  },
  day: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#3c3c44",
    padding: 10,
    textAlign: "center",
    borderRadius: 50,
    fontWeight: "200",
    marginBottom: 15,
  },
  temp: {
    fontSize: 14,
    color: "white",
    fontWeight: "100",
    textAlign: "center",
  },
});

export default FutureForcast;
