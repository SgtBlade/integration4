import React, { useState } from "react";
import { View, Text, StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { white } from "ansi-colors";

const HomeScreen = (props) => {

  const titleText = ("Testing the title");
  const paragraph = ("Nulla varius porttitor sem, in lacinia dui malesuada ut. Aenean imperdiet ante turpis, sed suscipit massa fringilla pellentesque. Duis bibendum nibh et porttitor elementum. Donec semper mauris vel massa aliquet, et pretium ex luctus. Donec mauris ligula, hendrerit at dolor sed, interdum ultrices diam. Etiam dictum ante vel ipsum eleifend dictum. Phasellus metus mauris, condimentum nec ex sed, commodo viverra magna. Suspendisse viverra tellus id molestie vehicula.");
  
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          {titleText}
          {"\n"}
          {Platform.OS === 'ios' ? <Text>Hi Apple!</Text> : <Text>Hi Android!</Text>}
          {"\n"}
          {paragraph}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "yellow",
  },
  container: {
    alignItems: "center",
    backgroundColor: "blue",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    width: 1024,
    height: 768,
    padding: 50,
  },
  titleText: {
    color: '#FFFFFF'
  }
});

export default HomeScreen;
