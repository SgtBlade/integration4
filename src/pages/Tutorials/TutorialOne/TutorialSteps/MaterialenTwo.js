import React from "react";
import styleBg from "./styles/BackgroundProjectOne.module.css";
import style from "./styles/MaterialenOne.module.css";
// import RoundArrowButton from "../../../globalComponents/RoundArrowButton.js";
//import { ROUTES } from "../../consts";
import Header from "../../TutorialHeader/Header.js";

const MaterialenOne = (props) => {
  return (
    <section className={styleBg.container}>
      <Header
        Return={true}
        function={props.returnFunction}
        Title={`Materialen`}
        fontSize={"5rem"}
      />
      <div className={style.boekje}>
        <div className={style.boekje__content}>
            <div className={style.boekje__content__wrapper}>
               
            </div>
            <div className={style.boekje__content__wrapper}>
               
            </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialenOne;
