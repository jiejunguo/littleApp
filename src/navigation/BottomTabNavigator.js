import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ToolsNavigator,
  InfoNavigator,
  GamesNavigator,
  DiaryNavigator,
} from "./StackNavigator";
import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Diary") {
            return (
              <MaterialCommunityIcons name="notebook" size={28} color={color} />
            );
          } else if (route.name === "Tools") {
            return <FontAwesome name="calculator" size={24} color={color} />;
          } else if (route.name === "Infos") {
            return <FontAwesome name="newspaper-o" size={24} color={color} />;
          } else if (route.name === "Games") {
            return (
              <MaterialIcons name="videogame-asset" size={30} color={color} />
            );
          }
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Diary" component={DiaryNavigator} />
      <Tab.Screen name="Tools" component={ToolsNavigator} />
      <Tab.Screen name="Infos" component={InfoNavigator} />
      <Tab.Screen name="Games" component={GamesNavigator} />
    </Tab.Navigator>
  );
};
