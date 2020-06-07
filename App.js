import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
const THEME_COLOR = 'red';
const THEME_TEXT = 'white';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <>
    <SafeAreaView style={styles.topSafeArea} />
    <StatusBar barStyle="light-content" />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  topSafeArea: {
      flex: 0, 
      backgroundColor: THEME_COLOR,
      color: THEME_TEXT
  }, 
  bottomSafeArea: {
      flex: 1, 
      backgroundColor: THEME_COLOR,
      color: THEME_TEXT
  },
});
