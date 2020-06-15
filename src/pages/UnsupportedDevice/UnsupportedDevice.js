import React  from "react";
import { useObserver } from "mobx-react-lite";
import style from './UnsupportedDevice.module.css';
import { useStores } from "../../hooks/useStores";

const UnsupportedDevice = () => { 
  
    const { uiStore } = useStores();

  return useObserver (() => (
    <>
    <section className={`${style.books__week} ${style[uiStore.themeClass]}`}>
        <p>Deze game is enkel beschikbaar op iPad Mini.</p>
        <p>Volg ons op facebook voor updates!</p>
    </section>
    </>
  ));
};

export default UnsupportedDevice;
