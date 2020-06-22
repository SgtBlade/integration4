import React from "react";
//import { Link } from "react-router-dom";
import style from "../Projects.module.css";
//import RoundArrowButton from "../../globalComponents/RoundArrowButton.js";
//import RoundHomeButton from "../../globalComponents/RoundHomeButton.js";
//import { ROUTES } from "../../../consts";
import ProjectsHeader from "../ProjectComponents/Header/Header";

const FrankrijkHeader = (props) => {
  return (
    <section className={style.container}>
      <ProjectsHeader />
      <div className={style.toggle}>
        <div className={style.toggle__wrapper}>
          <div className={`${style.toggle__background}`}></div>
          <img
            src="../assets/icons/mijnwerkjes.svg"
            className={style.toggle__image}
            alt="icon"
          />
        </div>
        <div className={style.toggle__wrapper}>
          <div
            className={`${style.toggle__background} ${style.toggle__background__active}`}
          ></div>
          <img
            src="../assets/icons/vrienden.svg"
            className={`${style.toggle__image} ${style.toggle__image__special}`}
            alt="icon"
          />
        </div>
      </div>

      <article className={style.piece}>
        <h2 className={style.piece__title}>West-Europa 1/6</h2>
        <div className={style.piece__wrapper}>
          <div className={style.piece__box}>
            <section className={style.piece__titleBox}>
              <h3 className={style.piece__titleBox__title}>
                iffeltoren
                <span className={style.piece__titleBox__title__part}>
                  Frankrijk
                </span>
              </h3>
            </section>
            <div className={style.piece__content}>
              <img
                className={style.piece__content__image}
                src="../assets/illustraties/eiffeltoren.svg"
                alt="eiffeltoren"
              />
            </div>
            <div className={style.piece__friends}>
              <img src="../assets/icons/friends-white.svg" alt="icon" />
            </div>
          </div>
          <div className={style.piece__box}>
            <section className={style.piece__titleBox}>
              <h3 className={style.piece__titleBox__title}>
                iffeltoren
                <span className={style.piece__titleBox__title__part}>
                  Frankrijk
                </span>
              </h3>
            </section>
            <div className={style.piece__content}>
              <img
                className={style.piece__content__image}
                src="../assets/illustraties/eiffeltoren.svg"
                alt="eiffeltoren"
              />
            </div>
            <div className={style.piece__friends}>
              <img src="../assets/icons/friends-white.svg" alt="icon" />
            </div>
          </div>
          <div className={style.piece__box}>
            <section className={style.piece__titleBox}>
              <h3 className={style.piece__titleBox__title}>
                iffeltoren
                <span className={style.piece__titleBox__title__part}>
                  Frankrijk
                </span>
              </h3>
            </section>
            <div className={style.piece__content}>
              <img
                className={style.piece__content__image}
                src="../assets/illustraties/eiffeltoren.svg"
                alt="eiffeltoren"
              />
            </div>
            <div className={style.piece__friends}>
              <img src="../assets/icons/friends-white.svg" alt="icon" />
            </div>
          </div>
          <div className={style.piece__box}>
            <section className={style.piece__titleBox}>
              <h3 className={style.piece__titleBox__title}>
                iffeltoren
                <span className={style.piece__titleBox__title__part}>
                  Frankrijk
                </span>
              </h3>
            </section>
            <div className={style.piece__content}>
              <img
                className={style.piece__content__image}
                src="../assets/illustraties/eiffeltoren.svg"
                alt="eiffeltoren"
              />
            </div>
            <div className={style.piece__friends}>
              <img src="../assets/icons/friends-white.svg" alt="icon" />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default FrankrijkHeader;
