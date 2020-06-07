import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
