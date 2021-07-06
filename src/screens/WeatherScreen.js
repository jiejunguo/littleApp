import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import SearchBar from "../components/SearchBar";

const WeatherScreen = () => {
  const API_KEY = "d7dc9ece1b32cfe63cb78e07c84348a1";
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [temp_min, setTemp_min] = useState("");
  const [temp_max, setTemp_max] = useState("");
  const [temp, setTemp] = useState("");

  return (
    <View>
      <SearchBar
        city={city}
        onTermChange={setCity}
        onTermSubmit={() => console.log("submitted")}
      />
      <Text>{city}</Text>
    </View>
  );

  //   useEffect(() => {
  //     fetch(URL)
  //       .then((response) => response.json())
  //       .then((responseJson) => {
  //         return responseJson;
  //       })
  //       .then((weather) => {
  //         setWeather(weather);
  //         setLoading(false);
  //         console.log(weather);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }, []);

  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);

  //   if (loading) {
  //     return <SplashScreen />;
  //   } else {
  //     return <HomeScreen weather={weather} />;
  //   }
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
          <Text style={styles.logoDescription}>Get your weather forecase!</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const HomeScreen = ({ weather }) => {
  return (
    <View>
      <Text>{weather.name}</Text>
      <Text>{weather.sys.country}</Text>
      <Text>{weather.main.temp}</Text>
      <Text>{weather.main.temp_max}</Text>
      <Text>{weather.main.temp_min}</Text>
      <Text>{weather.weather[0].description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
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
  },
  articleContainer: {
    borderWidth: 0,
    width: "100%",
    padding: 5,
  },
});

export default WeatherScreen;
