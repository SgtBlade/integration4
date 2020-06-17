import React from "react";
import { Link } from "react-router-dom";
import style from "./TutorialStart.module.css";
import Header from "../TutorialHeader/Header.js";
import { ROUTES } from "../../../consts/index.js";
import RoundArrowButton from "../../globalComponents/RoundArrowButton.js";


const TutorialStart = (props) => {

    return (
        
        <section className={style.wrapper}>
            <Link to={ROUTES.home} className={style.buttonWrap}>
                <RoundArrowButton onClick={props.function}/>
            </Link>
            <Header Title={`Eiffeltoren`}/>
            <div className={style.wrapperContent}>
                
            </div>
        </section>
    );
};

export default TutorialStart;
