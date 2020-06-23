import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/Projects.module.css";
import { ROUTES } from "../../../consts";
import ProjectsHeader from "../ProjectComponents/Header/Header";

const MyProjects = (props) => {
  return (
    <section className={`${style.container} ${style.container__bg}`}>
      <ProjectsHeader
        image="verfborstel-white"
        color="#FFFFFF"
        link={ROUTES.France}
        icon={true}
        title="Mijn werkjes"
      />
      <div className={style.toggle}>
        <div className={style.toggle__wrapper}>
          <div
            className={`${style.toggle__background} ${style.toggle__background__active}`}
          ></div>
          <img
            src="../assets/icons/mijnwerkjes.svg"
            className={style.toggle__image}
            alt="icon"
          />
        </div>
        <Link to={ROUTES.FriendsProjects} className={style.toggle__wrapper}>
          <div className={`${style.toggle__background}`}></div>
          <img
            src="../assets/icons/vrienden.svg"
            className={`${style.toggle__image} ${style.toggle__image__special}`}
            alt="icon"
          />
        </Link>
      </div>
      <div className={style.wrapper}>
        <article className={style.piece}>
          <h2 className={`${style.piece__title} ${style.piece__title__white}`}>
            West-Europa 1/6
          </h2>
          <div className={style.piece__wrapper}>
            <Link
              to={`${ROUTES.MyProjectsOverview.to}France`}
              className={`${style.piece__box} ${style.piece__box__green}`}
            >
              <div className={`${style.layer} ${style.layer__green}`}>
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
                  src="../assets/illustraties/eifeltoren-mijnwerkjes.svg"
                  alt="eiffeltoren"
                />
              </div>
              <div className={style.piece__friends}>
                <img src="../assets/icons/friends-white.svg" alt="icon" />
              </div>
            </Link>
            <div
              className={`${style.piece__box} ${style.piece__box__slot} ${style.piece__box__slot__italie__white}`}
            >
              <img src="../assets/illustraties/slotje.svg" alt="icon" />
              <div className={style.piece__friends}>
                <img src="../assets/icons/friends-white.svg" alt="icon" />
              </div>
            </div>
            <div
              className={`${style.piece__box} ${style.piece__box__slot} ${style.piece__box__slot__spanje__white}`}
            >
              <img src="../assets/illustraties/slotje.svg" alt="icon" />
              <div className={style.piece__friends}>
                <img src="../assets/icons/friends-white.svg" alt="icon" />
              </div>
            </div>
          </div>
        </article>
        <article className={style.piece}>
          <h2 className={`${style.piece__title} ${style.piece__title__white}`}>
            Benelux 1/3
          </h2>
          <div className={style.piece__wrapper}>
            <div
              className={`${style.piece__box} ${style.piece__box__slot} ${style.piece__box__slot__spanje__white}`}
            >
              <img src="../assets/illustraties/slotje.svg" alt="icon" />
              <div className={style.piece__friends}>
                <img src="../assets/icons/friends-white.svg" alt="icon" />
              </div>
            </div>
            <div
              className={`${style.piece__box} ${style.piece__box__slot} ${style.piece__box__slot__italie__white}`}
            >
              <img src="../assets/illustraties/slotje.svg" alt="icon" />
              <div className={style.piece__friends}>
                <img src="../assets/icons/friends-white.svg" alt="icon" />
              </div>
            </div>
            <div
              className={`${style.piece__box} ${style.piece__box__slot} ${style.piece__box__slot__spanje__white}`}
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

export default MyProjects;
