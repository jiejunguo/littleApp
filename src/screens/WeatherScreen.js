import React, {useState} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import SearchBar from "../components/SearchBar"

const WeatherScreen =()=>{
    return(

        <View>
            <SearchBar/>
            <Text>Weather</Text></View>
    )
}

export default WeatherScreen