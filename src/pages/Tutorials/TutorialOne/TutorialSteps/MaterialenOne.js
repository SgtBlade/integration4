import React from "react";
import styleBg from "./styles/BackgroundProjectOne.module.css";
import style from "./styles/Tutorial.module.css";
import Header from "../../TutorialHeader/Header.js";
import ThumbsUp from "../../TutorialComponents/ButtonThumb/ThumbsUp.js";

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
            <div className={style.boekje__content__wrapper__verzamel}>
              <p className={style.boekje__verzamel}>
                <span className={style.boekje__verzamel__icon}>
                  <img src="../assets/icons/moersleutel.svg" alt="" />
                </span>
                Verzamel deze spullen
              </p>
              <hr className={style.boekje__verzamel__line} />
            </div>
            <div className={style.boekje__content__object}>
              <div className={style.object__content}>
                <p className={style.boekje__tekst}>
                  <span className={style.boekje__tekstBig}>30</span>x
                </p>
                <p className={style.boekje__tekstMed}>Houten stokjes</p>
              </div>
              <img
                className={style.boekje__afbeelding}
                src="../assets/illustraties/houten-stokje.svg"
                alt=""
              />
            </div>
          </div>
          <div
            className={`${style.boekje__content__wrapper} ${style.boekje__content__wrapper__second}`}
          >
            <div className={style.second__bevestig}>
              <img
                className={style.second__bevestig__image}
                src="../assets/illustraties/tekstbubbel-materialen.svg"
                alt=""
              />
              <div className={style.second__bevestig__wrapper}>
                <p className={style.second__bevestig__tekst}>
                  Heb je
                  <span className={style.second__bevestig__tekst__orange}>
                     30 houten stokjes
                  </span>
                  ?
                </p>
                <div className={style.second__bevestig__wrapper__buttons}>
                  <ThumbsUp onClick={props.nextFunction}/>
                  <div className={style.thumbsdown} onClick={props.notAvailableFunction}>
                    <svg className={style.thumbsdown__image}>
                      <path
                        d="M0 22.996H4.54545V9.79603H0V22.996ZM25 10.896C24.9982 10.3131 24.7582 9.75452 24.3323 9.34232C23.9065 8.93011 23.3295 8.69777 22.7273 8.69603H15.5568L16.6364 3.66903L16.6705 3.31703C16.6694 2.87969 16.4897 2.46051 16.1705 2.15103L14.9659 0.996033L7.48864 8.24503C7.275 8.44671 7.10553 8.688 6.99033 8.95447C6.87514 9.22095 6.81659 9.50716 6.81818 9.79603V20.796C6.81998 21.379 7.06 21.9375 7.48583 22.3497C7.91166 22.7619 8.4887 22.9943 9.09091 22.996H19.3182C19.7647 22.9975 20.2017 22.8709 20.5739 22.632C20.9461 22.3931 21.2367 22.0528 21.4091 21.654L24.8409 13.899C24.9459 13.6435 24.9999 13.371 25 13.096V10.995L24.9886 10.984L25 10.896Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialenOne;
