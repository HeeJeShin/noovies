import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screen/Movies";
import Tv from "../screen/Tv";
import Search from "../screen/Search";
import { View, Text } from "react-native";
import { WHITE_COLOR, DARK_COLOR, BORA_COLOR, LIGHT_BORA } from "../color";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? DARK_COLOR : "white",
        },
        tabBarActiveTintColor: isDark ? LIGHT_BORA : BORA_COLOR,
        tabBarInactiveTintColor: isDark ? WHITE_COLOR : "#808e9b",

        headerStyle: {
          backgroundColor: isDark ? DARK_COLOR : "white",
        },
        headerTitleStyle: {
          color: isDark ? LIGHT_BORA : BORA_COLOR,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="film-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Tv"
        component={Tv}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="tv-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "search" : "search-outline"}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
