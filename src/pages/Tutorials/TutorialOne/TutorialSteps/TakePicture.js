import React from "react";
import styleBg from "./styles/BackgroundProjectOne.module.css";
import style from "./styles/Tutorial.module.css";
import Header from "../../TutorialHeader/Header.js";
import SoundButton from "../../../globalComponents/SoundButton.js";
import COLORS from "../../../globalStyles/colors";
import GeneralButton from "../../../globalComponents/GeneralButton";

const TakePicture = (props) => {

  let  inputFileRef = null;

  const handleChangePhotoButton = e => {
    e.preventDefault();
    inputFileRef.click();
  };

  return (
    <section className={styleBg.container}>

      <Header
        Return={true}
        function={props.returnFunction}
        Title={`Fotoshoot !`}
        fontSize={"5rem"}
      />
      <div className={style.fotoNemen}>
        <img src="../assets/illustraties/camera.svg" alt="" />
      </div>
      <div
        className={`${style.stepTwelve__wrapper__uiltje} ${style.stepTwelve__wrapper__uiltje__left}`}
      >
        <img
          src="../assets/illustraties/uiltje-neemFoto.svg"
          alt="uiltje"
          className={style.uiltje__image}
        />
        <div
          className={`${style.uiltje__content} ${style.uiltje__content__neemFoto}`}
        >
          <div className={style.uiltje__wrapper}>
            <div className={style.uitlje__content__spraak}>
              <img
                src="../assets/illustraties/spraakbubbel-neemFoto.svg"
                alt=""
                className={style.uitlje__content__spraak__image}
              />
              <p
                className={`${style.uitlje__content__spraak__tekst} ${style.uitlje__content__spraak__tekst__neemFoto}`}
              >
                Trek in de volgende stap een foto van je werkje. Zo wordt ze
                opgeslaan en kunnen je vrienden het ook zien.
              </p>
            </div>
          </div>
          <div
            className={`${style.uitlje__content__button} ${style.uitlje__content__button__neemFoto}`}
          >
            <SoundButton
              play={"welcome"}
              size={"5.2rem"}
              reScale={0.8}
              fillColor={COLORS.blueDark}
              backgroundColor={COLORS.yellowDark}
            />
          </div>
        </div>
        <div className={style.neemFoto__button}>

            <input
              onChange={props.photoInput}
              ref={input => (inputFileRef = input)}
              style={{ display: "none" }}
              type="file"
            />

          <GeneralButton
            onClick={handleChangePhotoButton}
            text="Foto nemen"
            icon="camera"
            type="svg"
            buttonWidth="30rem"
          />
        </div>
      </div>
    </section>
  );
};

export default TakePicture;
