import React, { useState } from "react";
import { View, Button, TouchableOpacity, Text, StyleSheet} from "react-native";
import COLOR from '../colors.js';

let PROPS = {};

const MainButton = (props) => {

    PROPS = props;

  return (
    <TouchableOpacity style={styles.buttonWrap}>
        <Text style={styles.button}>{PROPS.text ? PROPS.text : 'OK'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrap: {
    backgroundColor: PROPS.backgroundColor ? PROPS.backgroundColor : COLOR.green,
    width: PROPS.width ? PROPS.width : 313.3,
    height: PROPS.height ? PROPS.height : 75.34,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: PROPS.borderRadius ? PROPS.borderRadius : 15,
    shadowColor: PROPS.shadowColor ? PROPS.shadowColor : COLOR.black,
    shadowOffset: {
        width: PROPS.shadowWidth ? PROPS.shadowWidth : 0,
        height: PROPS.shadowHeight ? PROPS.shadowHeight :  9,
    },
    shadowOpacity: PROPS.shadowOpacity ? PROPS.shadowOpacity : 0.25,
    shadowRadius: PROPS.shadowRadius ? PROPS.shadowRadius : 2,

elevation: 5,
  },
  button: {
      color: PROPS.color ? PROPS.color : COLOR.white,
      fontSize: PROPS.fontSize ? PROPS.fontSize : 36,
      fontFamily: PROPS.font ? PROPS.font : 'BalsamiqBold',
      borderRadius:10,
  }
});

export default MainButton;
