import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import SearchBar from "../components/SearchBar";
import axios from "axios";

const WeatherScreen = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);

  //   const searchApi = async () => {
  //     const response = await axios(
  //       `api.openweathermap.org/data/2.5/weather?q=London&appid=4820f42c19ababfc0315b084bbe5ac4b`
  //     );
  //     console.log(response);
  //     setResult(response.data);
  //   };

  const searchApi = async () => {
    axios
      .get(
        "api.openweathermap.org/data/2.5/weather?q=London&appid=4820f42c19ababfc0315b084bbe5ac4b"
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    searchApi();
  }, []);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log("term was submitted")}
      />
      <Text>{result.length}</Text>
    </View>
  );
};

export default WeatherScreen;
