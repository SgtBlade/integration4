import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/Projects.module.css";
import { ROUTES } from "../../../consts";
import ProjectsHeader from "../ProjectComponents/Header/Header";

const FriendsProjects = (props) => {




  return (
    <section className={style.container}>
      <ProjectsHeader image="verfborstel-blackSoft" link={ROUTES.France} />
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
      <div className={style.wrapper}>
        <article className={style.piece}>
          <h2 className={style.piece__title}>West-Europa 1/6</h2>
          <div className={style.piece__wrapper}>
            <Link
              to={`${ROUTES.FriendsProjectsOverview.to}France`}
              className={style.piece__box}
            >
              <div className={style.layer}>
                <img src="../assets/illustraties/slotje.svg" alt="icon" />
                <div className={style.piece__friends}>
                  <img src="../assets/icons/friends-white.svg" alt="icon" />
                </div>
              </div>
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
            </Link>
            <div
              className={`${style.piece__box} ${style.piece__box__slot} ${style.piece__box__slot__italie}`}
            >
              <img src="../assets/illustraties/slotje.svg" alt="icon" />
              <div className={style.piece__friends}>
                <img src="../assets/icons/friends-white.svg" alt="icon" />
              </div>
            </div>
            <div
              className={`${style.piece__box} ${style.piece__box__slot} ${style.piece__box__slot__spanje}`}
            >
              <img src="../assets/illustraties/slotje.svg" alt="icon" />
              <div className={style.piece__friends}>
                <img src="../assets/icons/friends-white.svg" alt="icon" />
              </div>
            </div>
          </div>
        </article>
        <article className={style.piece}>
          <h2 className={style.piece__title}>Benelux 1/3</h2>
          <div className={style.piece__wrapper}>
            <div
              className={`${style.piece__box} ${style.piece__box__slot} ${style.piece__box__slot__spanje}`}
            >
              <img src="../assets/illustraties/slotje.svg" alt="icon" />
              <div className={style.piece__friends}>
                <img src="../assets/icons/friends-white.svg" alt="icon" />
              </div>
            </div>
            <div
              className={`${style.piece__box} ${style.piece__box__slot} ${style.piece__box__slot__italie}`}
            >
              <img src="../assets/illustraties/slotje.svg" alt="icon" />
              <div className={style.piece__friends}>
                <img src="../assets/icons/friends-white.svg" alt="icon" />
              </div>
            </div>
            <div
              className={`${style.piece__box} ${style.piece__box__slot} ${style.piece__box__slot__spanje}`}
            >
              <img src="../assets/illustraties/slotje.svg" alt="icon" />
              <div className={style.piece__friends}>
                <img src="../assets/icons/friends-white.svg" alt="icon" />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FriendsProjects;
