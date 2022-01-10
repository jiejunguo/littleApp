import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DiaryHomeScreen from "../screens/main/DiaryHomeScreen";
import InfoScreen from "../screens/main/InfoScreen";
import ToolsScreen from "../screens/main/ToolsScreen";
import GamesScreen from "../screens/main/GamesScreen";

import CalculatorScreen from "../screens/CalculatorScreen";
import StopWatchScreen from "../screens/StopWatchScreen";
import WeatherScreen from "../screens/WeatherScreen";
import NewsScreen from "../screens/NewsScreen";
import CounterTwoScreen from "../screens/CounterTwoScreen";
import RollDiceScreen from "../screens/RollDiceScreen";
import CurrencyScreen from "../screens/CurrencyScreen";
import FocusTimeScreen from "../screens/FocusTimeScreen";
import TicTacToeScreen from "../screens/TicTacToeScreen";

import NumberGuessScreen from "../screens/NumberGuessScreen";

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
      <Stack.Screen name="TicTacToe" component={TicTacToeScreen} />
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
