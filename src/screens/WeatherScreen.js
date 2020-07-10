import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import SearchBar from "../components/SearchBar";

const WeatherScreen = () => {
  const [term, setTerm] = useState("");
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log("term was submitted")}
      />
      <Text>{term}</Text>
    </View>
  );
};

export default WeatherScreen;
