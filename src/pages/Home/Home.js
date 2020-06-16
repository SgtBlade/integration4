import React  from "react";
import { useObserver } from "mobx-react-lite";
import style from './Home.module.css';
import { useStores } from "../../hooks/useStores";
import IconButton from '../globalComponents/IconButton.js'
import ConfirmationButton from '../globalComponents/ConfirmationButton.js'
import GeneralButton from "../globalComponents/GeneralButton";

const Home = () => { 
  
    const { uiStore } = useStores();

    const logOut = () => {
      const fb = uiStore.firebase;
      fb.auth().signOut().then(function() {
        console.log('Logged out')
        localStorage.clear();
      }).catch(function(error) {
        console.log("error occured: ".error.code)
      });
    }

    const logUser = () => {
      console.log(uiStore.currentUser);
    }

  return useObserver (() => (
    <>
    <div className={`${style.home__bg}`}>
      <div className={`${style.home__buttons}`}>
        <div className={`${style.home__buttons__friends}`}>
          <GeneralButton onClick={logUser} icon="friends" type="svg" text="Mijn vrienden"/>
          <p className={`${style.home__buttons__friends__total}`}>+5</p>
        </div>
        <div className={`${style.home__buttons__settings}`}>
          <GeneralButton onClick={logUser} icon="settings" type="svg" text="Ouders & instellingen"/>
        </div>
      </div>
      <section className={`${style.home__wrapper} ${style[uiStore.themeClass]}`}>
        <div className={`${style.home__head}`}>
          <h1 className={`${style.home__titel}`}>Reisuil</h1>
        </div>
        <div className={`${style.home__start}`}>
          <GeneralButton   onClick={logUser} icon="arrowRight" type="svg" text="Start verhaaltje"/>
        </div>
      </section>
    </div>
    </>
  ));
};

export default Home;
