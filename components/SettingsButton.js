import React from "react";
import SvgUri from 'react-native-svg-uri';
import { View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import COLOR from '../colors.js';
import icons from "../assets/icons/icons.js"

let PROPS = {};

const SettingsButton = (props) => {

  PROPS = props;
  return (
    <View>
    <TouchableOpacity style={styles.buttonWrap}>
      <View style={styles.imageContainer}>
      <Image source={icons.png.settings} />
      </View>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: PROPS.backgroundColor ? PROPS.backgroundColor : COLOR.yellow,
    width: PROPS.width ? PROPS.width : 116.39,
    height: PROPS.height ? PROPS.height : 106.37,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
    borderBottomLeftRadius: PROPS.borderBottomLeftRadius ? PROPS.borderBottomLeftRadius : 50,
    shadowColor: PROPS.shadowColor ? PROPS.shadowColor : COLOR.black,
    shadowOffset: {
        width: PROPS.shadowWidth ? PROPS.shadowWidth : 0,
        height: PROPS.shadowHeight ? PROPS.shadowHeight :  4,
    },
    shadowOpacity: PROPS.shadowOpacity ? PROPS.shadowOpacity : 0.25,
    shadowRadius: PROPS.shadowRadius ? PROPS.shadowRadius : 2,
    elevation: 5,
  },
  buttonWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
  },
  text: {
    fontSize: PROPS.fontSize ? PROPS.fontSize : 18,
    color: PROPS.color ? PROPS.color : COLOR.white,
    fontFamily: 'BalsamiqBold',
    marginLeft: 30,
  },
  textContainer: {
    backgroundColor: PROPS.backgroundColor ? PROPS.backgroundColor : COLOR.blue,
    height: 44.83,
    width: 172,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginLeft: -37.7,
    zIndex: -1,
    
  }
});

export default SettingsButton;
