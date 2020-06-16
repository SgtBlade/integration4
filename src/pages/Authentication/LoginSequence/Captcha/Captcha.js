import React from "react";
import style from "./Captcha.module.css";
import Header from "../Header/Header.js";
import { useObserver } from "mobx-react-lite";
//import { ROUTES } from "../../consts";

const Captcha = (props) => {

  return useObserver( () => (
    <div className={style.container}>
      <Header Title={"Return to PERMISSIONDETAIL"} Return={true} function={props.returnFunction}/>
    </div>
  ));
};

export default Captcha;
