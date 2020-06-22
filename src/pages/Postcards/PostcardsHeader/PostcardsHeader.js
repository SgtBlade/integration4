import React from "react";
import style from "./PostcardsHeader.module.css";
import COLORS from "../../globalStyles/colors";
import RoundArrowButton from "../../globalComponents/RoundArrowButton";
import RoundHomeButton from "../../globalComponents/RoundHomeButton";
import { Link } from "react-router-dom";

const PostcardsHeader = (props) => {
  
  return (
    <div className={style.container}>
      <div className={style.headerWrapper}>
        {typeof props.returnFunction !== "string" ?
        <RoundArrowButton onClick={props.returnFunction} fillColor={COLORS.redDark}/>
        :
        <Link to={props.returnFunction}><RoundArrowButton fillColor={COLORS.redDark} /></Link>
        }
         <p className={style.headerWrapper__text}>{props.title}</p>
        <RoundHomeButton fillColor={COLORS.redDark}/>
      </div>
    </div>
  );
};

export default PostcardsHeader;
