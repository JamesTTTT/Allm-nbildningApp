import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Profile } from "../../src/views/index";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const HomeTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='user-circle-o' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;

const styles = StyleSheet.create({});
