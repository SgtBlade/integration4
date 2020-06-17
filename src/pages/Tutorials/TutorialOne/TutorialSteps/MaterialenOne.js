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
    </section>
  );
};

export default MaterialenOne;
