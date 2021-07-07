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

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StopWatch" component={StopWatchScreen} />
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="CounterTwo" component={CounterTwoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
