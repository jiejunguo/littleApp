import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackNavigator, ToolsNavigator, InfoNavigator, GamesNavigator } from "./StackNavigator"

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="Explore" component={HomeStackNavigator} options={{ tabBarIcon: () => (<AntDesign name="home" size={24} color="black" />) }} />
            <Tab.Screen name="Tools" component={ToolsNavigator} options={{ tabBarIcon: () => (<FontAwesome name="calculator" size={24} color="black" />) }} />
            <Tab.Screen name="Infos" component={InfoNavigator} options={{ tabBarIcon: () => (<FontAwesome name="newspaper-o" size={24} color="black" />) }} />
            <Tab.Screen name="Games" component={GamesNavigator} options={{ tabBarIcon: () => (<MaterialIcons name="videogame-asset" size={24} color="black" />) }} />
        </Tab.Navigator>
    );
}

