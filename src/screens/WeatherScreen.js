import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import * as Location from "expo-location";
import DateTime from "../components/DateTime";
import WeatherScroll from "../components/WeatherScroll";

const WeatherScreen = () => {
  const API_KEY = "d7dc9ece1b32cfe63cb78e07c84348a1";
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        fetchDataFromApi("40.7128", "-74.0060");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      fetchDataFromApi(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  const fetchDataFromApi = (latitude, longitude) => {
    if (latitude && longitude) {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }
  };

  const SplashScreen = () => {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../../assets/image/NewsBackground.jpg")}
        >
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Weather</Text>
            <Text style={styles.logoDescription}>
              Get your weather forecase!
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

  const HomeScreen = () => {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../../assets/image/weatherBackground.jpeg")}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <DateTime
              current={data.current}
              lat={data.lat}
              lon={data.lon}
              timezone={data.timezone}
            />
            <WeatherScroll weatherData={data.daily} />
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  };

  return loading ? <SplashScreen /> : <HomeScreen weather={weather} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flex: 1,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  logoDescription: {
    fontSize: 15,
    fontWeight: "600",
    color: "white",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  articleContainer: {
    borderWidth: 0,
    width: "100%",
    padding: 5,
  },
});

export default WeatherScreen;
