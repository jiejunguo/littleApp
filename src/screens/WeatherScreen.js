import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import SearchBar from "../components/SearchBar";
import DateTime from "../components/DateTime";

const WeatherScreen = () => {
  const API_KEY = "d7dc9ece1b32cfe63cb78e07c84348a1";
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=Bellevue&appid=d7dc9ece1b32cfe63cb78e07c84348a1`;
  // const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .then((weather) => {
        setWeather(weather);
        setLoading(false);
        console.log(weather, loading);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // setTimeout(() => {
  //   setLoading(false);
  // }, 5000);

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

  const HomeScreen = ({ weather }) => {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../../assets/image/weatherBackground.jpeg")}
        >
          <DateTime />
        </ImageBackground>

        <Text>{weather.name}</Text>
        <Text>{weather.sys.country}</Text>
        <Text>{weather.main.temp}</Text>
        <Text>{weather.main.temp_max}</Text>
        <Text>{weather.main.temp_min}</Text>
        <Text>{weather.weather[0].description}</Text>
      </View>
    );
  };

  return loading ? <SplashScreen /> : <HomeScreen weather={weather} />;
};

// return (
//   <View>
//     <SearchBar
//       city={city}
//       onTermChange={setCity}
//       onTermSubmit={() => console.log("submitted")}
//     />
//     <Text>{city}</Text>
//   </View>
// );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
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
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
    resizeMode: "cover",
  },
  articleContainer: {
    borderWidth: 0,
    width: "100%",
    padding: 5,
  },
});

export default WeatherScreen;
