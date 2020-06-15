import React from "react";
import style from './styles/IconButton.module.css';
import COLORS from '../globalStyles/colors.js';

const IconButton = (props) => {

  if(!props.icon) throw new Error("An icon is required");
  if(!props.type) throw new Error("A filetype is required");

  return (
    <div onClick={props.onClick} className={`${style.buttonWrap}`}>
      <div className={`${style.imageContainer}`} style={{
        backgroundColor: props.backgroundColor ? props.backgroundColor : COLORS.blue,
        width: props.width ? `${props.width}rem` : "7.1rem",
        height: props.height ? `${props.height}rem` : "7.1rem",
        borderRadius: props.borderRadius ? `${props.borderRadius}rem` : "5rem",
        shadowColor: props.shadowColor ? props.shadowColor : COLORS.black,
        shadowOffset: {
            width: props.shadowWidth ? `${props.shadowWidth}rem` : 0,
            height: props.shadowHeight ? `${props.shadowHeight}rem` :  "0.4rem",
        },
        shadowOpacity: props.shadowOpacity ? props.shadowOpacity : "0.25",
        shadowRadius: props.shadowRadius ? props.shadowRadius : ".2rem",
        elevation: 5}}>
    <img src={`./assets/icons/${props.icon}.${props.type}`}  alt="icon" width="36" height="25" />

      </div>
      {
        props.text ? 
          <div className={`${style.textContainer}`} style={{backgroundColor: props.backgroundColor ? props.backgroundColor : "blue"}}>
            <p className={`${style.text}`} style={{ fontSize: props.fontSize ? `${props.fontSize}rem` : "1.8rem", color: props.color ? props.color : COLORS.white}}> {props.text} </p>
          </div>
      :
     ''
      }
    </div>
  );
};

export default IconButton;
