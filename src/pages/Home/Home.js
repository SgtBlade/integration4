import React from "react";
import { useObserver } from "mobx-react-lite";
import { Link } from "react-router-dom";
import style from "./Home.module.css";
import { useStores } from "../../hooks/useStores";
import GeneralButton from "../globalComponents/GeneralButton";
import COLORS from "../globalStyles/colors";
import { ROUTES } from "../../consts";

const Home = () => {
  const { uiStore, friendStore } = useStores();

  const logOut = () => {
    const fb = uiStore.firebase;
    fb.auth()
      .signOut()
      .then(function () {
        console.log("Logged out");
        localStorage.clear();
      })
      .catch(function (error) {
        console.log("error occured: ".error.code);
      });
  };

  const logUser = () => {
    console.log(uiStore.currentUser);
  };

  return useObserver(() => (
    <>
      <div className={`${style.home__bg}`}
      style={{
        background: `url(/assets/illustraties/home/${uiStore.currentUser.avatar}.svg) 0% 120% no-repeat, url(/assets/blobs/blob1-startscherm.svg) left bottom no-repeat, url(/assets/blobs/blob2-startscherm.svg) right top no-repeat, ${COLORS.blue}`
      }}
      >
        <div className={`${style.home__buttons}`}>
          <div className={`${style.home__buttons__friends}`}>
            <Link to={ROUTES.Friends}>
              <GeneralButton
                icon="friends"
                backgroundColor="white"
                iconBackgroundColor={COLORS.grey}
                boxShadow={`0rem .5rem ${COLORS.greyLight}`}
                type="svg"
                text="Mijn vrienden"
              />
            </Link>
            {friendStore.requests.length > 0 ? (
              <p className={`${style.home__buttons__friends__total}`}>
                +{friendStore.requests.length}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className={`${style.home__buttons__settings}`}>
            <GeneralButton
              onClick={logOut}
              icon="settings"
              backgroundColor="white"
              iconBackgroundColor={COLORS.grey}
              boxShadow={`0rem .5rem ${COLORS.greyLight}`}
              type="svg"
              text="Ouders & instellingen"
            />
          </div>
        </div>
        <section className={`${style.home__wrapper}`}>
          
       <div className={style.contentWrapper}>
              <div className={`${style.home__head}`}>
                    <p className={style.home__introduction}>Welkom</p>
                    <h1 className={`${style.home__titel}`}>{uiStore.currentUser.name ? uiStore.currentUser.name : 'Reisuil'}</h1>
                </div>
                
                <div className={`${style.home__start}`}>
              
                  <img
                    alt={"Strokes boven"}
                    className={`${style.home__start__stripestop}`}
                    src={`./assets/illustraties/strokes-boven.svg`}
                  />
                  <Link to={`${uiStore.currentUser.chapter === 0 ? ROUTES.Intro : ROUTES.map}`}>
                    <GeneralButton icon="play" type="svg" text="Start verhaaltje" />
                  </Link>
                  <img
                    alt={"Strokes onder"}
                    className={`${style.home__start__stripesbottom}`}
                    src={`./assets/illustraties/strokes-beneden.svg`}
                  />
                </div>

       </div>  

        </section>
      </div>
    </>
  ));
};

export default Home;
