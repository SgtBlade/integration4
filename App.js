import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import COLORS from './colors.js';
import HomeScreen from "./screens/HomeScreen";
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { setCustomView, setCustomTextInput, setCustomText} from 'react-native-global-props';

export default function App() {
  const Stack = createStackNavigator();

  let [fontsLoaded] = useFonts({
    'Balsamiq': require('./assets/fonts/Balsamiq_Sans/BalsamiqSansRegular.ttf'),
    'BalsamiqBold': require('./assets/fonts/Balsamiq_Sans/BalsamiqSansBold.ttf'),
    'BalsamiqItalic': require('./assets/fonts/Balsamiq_Sans/BalsamiqSansItalic.ttf'),
    'BalsamiqBoldItalic': require('./assets/fonts/Balsamiq_Sans/BalsamiqSansBoldItalic.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    const customTextProps = { 
      style: { 
        fontFamily: 'Balsamiq',
      }
    };
    setCustomText(customTextProps);
    setCustomTextInput(customTextProps);
    setCustomView(customTextProps);

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
}

const styles = StyleSheet.create({
  topSafeArea: {
      flex: 0, 
      backgroundColor: COLORS.red,
      color: COLORS.mainText
  }, 
  bottomSafeArea: {
      flex: 1, 
      backgroundColor: COLORS.red,
      color: COLORS.mainText
  },
});
