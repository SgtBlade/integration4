import React from "react";
import style from './styles/GeneralButton.module.css';
import COLORS from '../globalStyles/colors.js';

const GeneralButton = (props) => {

  if(!props.icon) throw new Error("An icon is required");
  if(!props.type) throw new Error("A filetype is required");

  return (
    <div onClick={props.onClick} className={`${style.buttonYellow}`}>
        <div>
            <img className={`${style.buttonYellowIcon}`} src={`./assets/icons/${props.icon}.${props.type}`}  alt="icon" />
        </div>
      {
        props.text ? 
            <p className={`${style.buttonYellowTekst}`}> {props.text} </p>
      :
     ''
      }
    </div>
  );
};

export default GeneralButton;
