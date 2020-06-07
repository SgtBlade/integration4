import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import FilesystemService from "../services/FilesystemService";
import * as Location from "expo-location";
import Constants from "expo-constants";

const HomeScreen = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [userLocation, setUserLocation] = useState();
  const service = new FilesystemService();

  const apiKey = Constants.manifest.extra.MAPS_apiKey;

  const openPhotoLibrary = async () => {
    console.log('test');
    const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission is needed to use your cameraroll");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    setSelectedImage(pickerResult.uri);
  };
  const takePicture = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission is needed to use your cameraroll");
      return;
    }
    let pickerResult = await ImagePicker.launchCameraAsync();
    setSelectedImage(pickerResult.uri);
  };
  const savePicture = async () => {
    //console.log(FileSystem.documentDirectory);
    try {
      const result = await service.moveToDocsDir(selectedImage);
    } catch (error) {
      console.log(error);
    }
  };
  const showDocsDir = async () => {
    const files = await service.readDocsDir();
    console.log(files);
  };
  const downloadTodos = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos/3";

    try {
      await service.download(url, "todos.json");
    } catch (error) {
      console.log(error);
    }
  };
  const loadTodosLocal = async () => {
    try {
      const text = await service.loadContent("todos.json");
      const json = JSON.parse(text);
      console.log(json.title);
    } catch (error) {
      console.log(error);
    }
  };
  const getLocation = async () => {
    const permission = await Location.requestPermissionsAsync();
    if (permission.granted === false) {
      alert("Please let me track you!");
      return;
    }
    let location = await Location.getCurrentPositionAsync();
    setUserLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
    //mapquest
    const imagePath = `https://www.mapquestapi.com/staticmap/v5/map?key=${apiKey}&center=${location.coords.latitude},${location.coords.longitude}&size=@2x`;
    setSelectedImage(imagePath);
    //
    const postalData = await Location.reverseGeocodeAsync(userLocation);
    alert(
      `Found You: You are in ${postalData[0].city}, in ${postalData[0].name}`
    );
  };
  const showLocationOnMap = () => {
    if (!userLocation) {
      alert("First get your location");
      return;
    }
    props.navigation.navigate("map", { userLocation: userLocation });
  };

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "red",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 30,
    backgroundColor: "blue",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "blue",
  },
});

export default HomeScreen;
