import React  from "react";
import { useObserver } from "mobx-react-lite";
import style from './DeviceFormatError.module.css';
import { useStores } from "../../hooks/useStores";

const DeviceFormatError = (props) => { 
  
    const { uiStore } = useStores();

    console.log(window.screen)
    console.log('window orientation   ' . window.ScreenOrientation)
    console.log('window outerwidth   ' . window.outerWidth)
    console.log('window outer height   ' . window.outerHeight)

  return useObserver (() => (
    <>
    <section className={`${style.section} ${style[uiStore.themeClass]}`}>
        {props.textOne ? <p>{props.textOne}</p> : ''}
        {props.textTwo ? <p>{props.textTwo}</p> : ''}
        {props.textThree ? <p>{props.textThree}</p> : ''}
        {props.textFour ? <p>{props.textFour}</p> : ''}
        {props.href ?
        <a href={props.href} rel="noopener noreferrer" target={"_blank"}><img className={`${style.icon}`} src={`./assets/icons/${props.iconName}`} alt={props.alt} width={`${props.width}`} height={`${props.height}`}/></a>
        :
        <img className={`${style.icon}`} src={`./assets/icons/${props.iconName}`} alt={props.alt} width={`${props.width}`} height={`${props.height}`}/>
        }
        </section>
    </>
  ));
};

export default DeviceFormatError;
