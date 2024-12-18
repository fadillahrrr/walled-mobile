import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  SafeAreaView,
  Switch,
} from "react-native";
import React, { useState } from "react";
import LoginPage from "./Screen/Login";
import HomePage from "./Screen/Home";
import RegisterPage from "./Screen/Register";
import TopupPage from "./Screen/Topup";
import TransferPage from "./Screen/Transfer";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AuthProvider, useAuth } from "./Context/AuthContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  // const { user } = useAuth();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Topup") {
            iconName = focused ? "wallet" : "wallet-outline";
          } else if (route.name === "Transfer") {
            iconName = focused ? "send" : "send-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Topup" component={TopupPage} />
      <Tab.Screen name="Transfer" component={TransferPage} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            // headerShown: false // menghilangkan header,
            title: "Login",
            headerStyle: {
              backgroundColor: "teal",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => {
              // <Button
              //   title='Menu'
              //   onPress={() => alert('Menu shown')}
              //   color='white'
              // />
            },
          }}
        />
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "teal",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={{
            headerShown: false, //menghilangkan header
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
