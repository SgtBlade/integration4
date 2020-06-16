import React  from "react";
import { useObserver } from "mobx-react-lite";
import style from './DeviceFormatError.module.css';
import { useStores } from "../../hooks/useStores";

const DeviceFormatError = (props) => { 
  
    const { uiStore } = useStores();

  return useObserver (() => (
    <>
    <section className={`${style.section} ${style[uiStore.themeClass]}`}>
        {props.textOne ? <p>{props.textOne}</p> : ''}
        {props.textTwo ? <p>{props.textTwo}</p> : ''}
        {props.textThree ? <p>{props.textThree}</p> : ''}
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
