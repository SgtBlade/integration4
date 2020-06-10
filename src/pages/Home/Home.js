import React  from "react";
import { useObserver } from "mobx-react-lite";
import style from './Home.module.css';
import { useStores } from "../../hooks/useStores";
import IconButton from '../globalComponents/IconButton.js'
import ConfirmationButton from '../globalComponents/ConfirmationButton.js'

const Home = () => { 
  
    const { uiStore } = useStores();

  return useObserver (() => (
    <>
    <section className={`${style.books__week} ${style[uiStore.themeClass]}`}>
        <ConfirmationButton text="ok"/>
        <IconButton icon="friends" type="png" text="start"/>
    </section>
    </>
  ));
};

export default Home;
