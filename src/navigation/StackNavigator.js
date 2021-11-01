import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StopWatchScreen from "../screens/StopWatchScreen";

import CalculatorScreen from "../screens/CalculatorScreen";
import WeatherScreen from "../screens/WeatherScreen";
import NewsScreen from "../screens/NewsScreen";
import CounterScreen from "../screens/CounterScreen";
import CounterTwoScreen from "../screens/CounterTwoScreen";
import RollDiceScreen from "../screens/RollDiceScreen";
import CurrencyScreen from "../screens/CurrencyScreen";
import FocusTimeScreen from "../screens/FocusTimeScreen";
import ToolsScreen from "../screens/ToolsScreen";
import InfoScreen from "../screens/InfoScreen";
import GamesScreen from "../screens/GamesScreen";
import NumberGuessScreen from "../screens/NumberGuessScreen";
import DiaryHomeScreen from "../screens/DiaryHomeScreen";

const Stack = createStackNavigator();

const DiaryNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="diary" component={DiaryHomeScreen} />
    </Stack.Navigator>
  );
};

const GamesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="game" component={GamesScreen} />
      <Stack.Screen name="RollDice" component={RollDiceScreen} />
      <Stack.Screen name="NumberGuess" component={NumberGuessScreen} />
    </Stack.Navigator>
  );
};

const InfoNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Info" component={InfoScreen} />
      <Stack.Screen name="Weather" component={WeatherScreen} />
      <Stack.Screen name="News" component={NewsScreen} />
      <Stack.Screen name="Currency" component={CurrencyScreen} />
    </Stack.Navigator>
  );
};

const ToolsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tool" component={ToolsScreen} />
      <Stack.Screen
        name="StopWatch"
        component={StopWatchScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen name="Calculator" component={CalculatorScreen} />
      <Stack.Screen name="Counter" component={CounterScreen} />
      <Stack.Screen name="CounterTwo" component={CounterTwoScreen} />
      <Stack.Screen name="FocusTime" component={FocusTimeScreen} />
    </Stack.Navigator>
  );
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="StopWatch" component={StopWatchScreen} />
      <Stack.Screen name="Calculator" component={CalculatorScreen} />
      <Stack.Screen name="Weather" component={WeatherScreen} />
      <Stack.Screen name="News" component={NewsScreen} />
      <Stack.Screen name="Counter" component={CounterScreen} />
      <Stack.Screen name="CounterTwo" component={CounterTwoScreen} />
      <Stack.Screen name="RollDice" component={RollDiceScreen} />
      <Stack.Screen name="Currency" component={CurrencyScreen} />
      <Stack.Screen name="FocusTime" component={FocusTimeScreen} />
    </Stack.Navigator>
  );
};

export {
  HomeStackNavigator,
  ToolsNavigator,
  InfoNavigator,
  GamesNavigator,
  DiaryNavigator,
};
