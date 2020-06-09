import React  from "react";
import { useObserver } from "mobx-react-lite";
import style from './styles/Home.module.css';
import { useStores } from "../hooks/useStores";
import IconButton from './components/IconButton.js'
import ConfirmationButton from './components/ConfirmationButton.js'

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
