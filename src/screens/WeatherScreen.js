import React, {useState} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';



function WeatherScreen() {
  const [weather,setWeather] = useState([])
  const APIKEY = 'd7dc9ece1b32cfe63cb78e07c84348a1'

  async function fetchData() {
    let response = await fetch(`api.openweathermap.org/data/2.5/weather?q={London}&appid={d7dc9ece1b32cfe63cb78e07c84348a1}`);
    let data = await response.json()
    console.log(data)
      setWeather({
        data
      }
      )
    return data
  }

  return (
    <View>
      <Text>WEATHER APP</Text>
      {console.log(fetchData)}
    </View>
  );
}

export default WeatherScreen;
