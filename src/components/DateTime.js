import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment-timezone";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const WeatherItem = ({ title, value, unit }) => {
  return (
    <View style={styles.weatherItem}>
      <Text style={styles.weatherItemTitle}>{title}</Text>
      <Text style={styles.weatherItemValue}>
        {value}
        {unit}
      </Text>
    </View>
  );
};

const DateTime = ({ current, lat, lon, timezone }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
      const minutes = time.getMinutes();
      const ampm = hour >= 12 ? "pm" : "am";

      setTime(
        (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) +
          ":" +
          (minutes < 10 ? "0" + minutes : minutes) +
          ampm
      );

      setDate(days[day] + ", " + date + " " + months[month]);
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.heading}>{time}</Text>
        </View>
        <View>
          <Text style={styles.subHeading}>{date}</Text>
        </View>
        <View style={styles.weatherItemContainer}>
          <WeatherItem title="Humidity" value={current.humidity} unit="%" />
          <WeatherItem title="Pressure" value={current.pressure} unit="hPA" />
          <WeatherItem
            title="Sunrise"
            value={moment.tz(current.sunrise * 1000, timezone).format("HH:mm")}
            unit="am"
          />
          <WeatherItem
            title="Sunset"
            value={moment.tz(current.sunset * 1000, timezone).format("HH:mm")}
            unit="pm"
          />
        </View>
      </View>
      <View style={styles.rightAlign}>
        <Text style={styles.timezone}>{timezone}</Text>
        <Text style={styles.latlong}>
          {lat}N {lon}E
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  heading: {
    fontSize: 45,
    color: "white",
    fontWeight: "100",
  },
  subHeading: {
    fontSize: 25,
    color: "#eee",
    fontWeight: "300",
  },
  rightAlign: {
    textAlign: "right",
    marginTop: 20,
  },
  timezone: {
    fontSize: 18,
    color: "white",
    fontWeight: "200",
  },
  latlong: {
    fontSize: 14,
    color: "white",
    fontWeight: "600",
  },
  weatherItemContainer: {
    backgroundColor: "#18181b99",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  weatherItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weatherItemTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "200",
  },
  weatherItemValue: {
    color: "white",
  },
});

export default DateTime;
