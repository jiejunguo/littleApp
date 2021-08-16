import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StopWatchScreen from "./src/screens/StopWatchScreen";
import HomeScreen from "./src/screens/HomeScreen";
import CalculatorScreen from "./src/screens/CalculatorScreen";
import WeatherScreen from "./src/screens/WeatherScreen";
import NewsScreen from "./src/screens/NewsScreen";
import CounterScreen from "./src/screens/CounterScreen"
import CounterTwoScreen from "./src/screens/CounterTwoScreen"
import RollDiceScreen from "./src/screens/RollDiceScreen"
import CurrencyScreen from "./src/screens/CurrencyScreen"
import FocusTimeScreen from "./src/screens/FocusTimeScreen"
import { BottomTabNavigator } from "./src/navigation/BottomTabNavigator"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default App;
