import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MainButton from '../components/MainButton.js'
import IconButton from '../components/IconButton.js'
import IconButtonTwo from '../components/IconButtonTwo.js'
import SettingsButton from '../components/SettingsButton.js'
import COLOR from "../colors.js";

const HomeScreen = () => {

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <MainButton/>
        <IconButton icon="friends" type="png" text="start"/>
        <IconButtonTwo icon="IconButtonTwo" type="png"/>
        <SettingsButton icon="IconButtonTwo" type="png"/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "yellow",
  },
  container: {
    width: 1024,
    height: 768,
    alignItems: "center",
    backgroundColor: COLOR.red,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },
  titleText: {
    color: '#FFFFFF'
  }
});

export default HomeScreen;
