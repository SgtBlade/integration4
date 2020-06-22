import React from "react";
import { Link } from "react-router-dom";
import style from "./Frankrijk.module.css";
import { ROUTES } from "../../consts/index";
import FrankrijkHeader from "./FrankrijkHeader.js";
import GeneralButton from "../globalComponents/GeneralButton";
import COLORS from "../globalStyles/colors.js";
import { useObserver } from "mobx-react-lite";

const Frankrijk = (props) => {
  return useObserver( () => (
    <section className={style.container}>
      <FrankrijkHeader />
      <div className={style.wrapper}>
        <div className={style.partOne__container}>
          <article className={style.partOne__titleBox}>
            <h2 className={style.titleBox__title}>
              Frankrijk
              <span className={style.titleBox__title__part}>Eiffeltoren</span>
            </h2>
          </article>
          <div className={style.partOne__afbeeldingBox}>
            <img
              src="./assets/illustraties/again-frankrijk.png"
              alt="Frankrijk"
            />
          </div>
          <div className={style.partOne__buttons}>
            <Link className={style.buttons__button} to={ROUTES.TaskFrankrijk}>
              <GeneralButton
                text="Opnieuw spelen"
                icon="again__blackSoft"
                type="svg"
                iconBackgroundColor={COLORS.green}
                backgroundColor="#FFFFFF"
                boxShadow={`0rem .5rem ${COLORS.greenShadowTwo}`}
                fontSize="2rem"
                textColor={COLORS.blackSoft}
                buttonWidth="26rem"
                iconWidth="6rem"
                iconHeight="6rem"
                padding="1.5rem"
              />
            </Link>
            <Link className={style.buttons__button} to={ROUTES.map}>
              <GeneralButton
                text="Volgend land"
                icon="play"
                type="svg"
                fontSize="2rem"
                buttonWidth="26rem"
                iconWidth="6rem"
                iconHeight="6rem"
                padding="1.5rem"
              />
            </Link>
          </div>
        </div>
        <div className={style.partTwo__container}>
          <div className={style.partTwo__textBalloons}>
            <div
              className={`${style.partTwo__textBalloon} ${style.partTwo__textBalloon__one}`}
            >
              <img
                className={style.textBalloon__image}
                src="../assets/illustraties/spraakbubbel-media.svg"
                alt=""
              />
              <Link
                className={`${style.textBalloon__button} ${style.textBalloon__button__one}`}
              >
                <GeneralButton
                  text="Filmpjes"
                  icon="media"
                  type="svg"
                  fontSize="2rem"
                  buttonWidth="22.2rem"
                  iconWidth="6rem"
                  iconHeight="6rem"
                  padding="1.5rem"
                  iconBackgroundColor={COLORS.grey}
                  backgroundColor="#FFFFFF"
                  boxShadow={`0rem .5rem ${COLORS.greyShadow}`}
                />
              </Link>
            </div>
            <div
              className={`${style.partTwo__textBalloon} ${style.partTwo__textBalloon__two}`}
            >
              <img
                className={style.textBalloon__image}
                src="../assets/illustraties/spraakbubbel-werkjesvrienden.svg"
                alt=""
              />
              <Link
                className={`${style.textBalloon__button} ${style.textBalloon__button__two}`}
                to={ROUTES.FriendsProjects}
              >
                <GeneralButton
                  text="Werkjes vrienden"
                  icon="vrienden"
                  type="svg"
                  fontSize="2rem"
                  buttonWidth="22.2rem"
                  iconWidth="6rem"
                  iconHeight="6rem"
                  padding="1.5rem"
                  iconBackgroundColor={COLORS.grey}
                  backgroundColor="#FFFFFF"
                  boxShadow={`0rem .5rem ${COLORS.greyShadow}`}
                />
              </Link>
            </div>
            <div
              className={`${style.partTwo__textBalloon} ${style.partTwo__textBalloon__three}`}
            >
              <img
                className={style.textBalloon__image}
                src="../assets/illustraties/spraakbubbel-mijnwerkjes.svg"
                alt=""
              />
              <Link
                className={`${style.textBalloon__button} ${style.textBalloon__button__three}`}
                to={`${ROUTES.Postcards.to}Frankrijk`}
              >
                <GeneralButton
                  text="Mijn werkjes"
                  icon="verfborstel"
                  type="svg"
                  fontSize="2rem"
                  buttonWidth="22.2rem"
                  iconWidth="6rem"
                  iconHeight="6rem"
                  padding="1.5rem"
                  iconBackgroundColor={COLORS.grey}
                  backgroundColor="#FFFFFF"
                  boxShadow={`0rem .5rem ${COLORS.greyShadow}`}
                />
              </Link>
            </div>
          </div>
          <img src="../assets/illustraties/uiltje-again.svg" alt="uiltje" />
        </div>
      </div>
    </section>
  ));
};

export default Frankrijk;
