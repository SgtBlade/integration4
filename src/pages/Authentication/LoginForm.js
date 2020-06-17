import React, { useState } from "react";
import style from "./LoginForm.module.css";
import PermissionDetail from "./LoginSequence/PermissionDetail/PermissionDetail.js"
import Welcome from "./LoginSequence/Welcome/Welcome.js";
import Captcha from "./LoginSequence/Captcha/Captcha.js";
import Header from "../Authentication/LoginSequence/Header/Header.js";
import EmailForm from "../Authentication/LoginSequence/EmailForm/EmailForm.js";
import MailSent from "../Authentication/LoginSequence/MailSent/MailSent.js";
import CameraRequest from "./LoginSequence/CameraRequest/CameraRequest.js"
import { useObserver } from "mobx-react-lite";
import { useStores } from "../../hooks/useStores";
//import { ROUTES } from "../../consts";

const LoginForm = () => {
  const { uiStore } = useStores();

  const SCREEN = {
    WELCOME: "WELCOME",
    PERMISSIONDETAIL: "PERMISSIONDETAIL",
    CAPTCHA: "CAPTCHA",
    CAMERAREQUEST: "CAMERAREQUEST",
    EMAILSCREEN: "EMAILSCREEN",
    MAILSENT: "MAILSENT",
    FIRSTLOGIN: "FIRSTLOGIN",
    NAMEREQUEST: "NAMEREQUEST",
    CONFIRMCHARACTER: "CONFIRMCHARACTER"
  }
  const [currentScreen, setCurrentScreen] = useState("");

  const returnScreen = () => {
    switch(currentScreen) {
      case SCREEN.WELCOME:
        return <Welcome nextFunction={() => {setCurrentScreen(SCREEN.PERMISSIONDETAIL)}}/>

      case SCREEN.PERMISSIONDETAIL:
        if(uiStore.parentalConfirmation) return <PermissionDetail nextFunction={() => {setCurrentScreen(SCREEN.CAMERAREQUEST)}} returnFunction={() => {setCurrentScreen(SCREEN.WELCOME)}}/>
        else return <PermissionDetail nextFunction={() => {setCurrentScreen(SCREEN.CAPTCHA)}} returnFunction={() => {setCurrentScreen(SCREEN.WELCOME)}}/>
        
      
      case SCREEN.CAPTCHA:
         if(!uiStore.parentalConfirmation) return <Captcha nextFunction={() => {setCurrentScreen(SCREEN.CAMERAREQUEST)}} returnFunction={() => {setCurrentScreen(SCREEN.PERMISSIONDETAIL)}}/>
        else return <CameraRequest nextFunction={() => {setCurrentScreen(SCREEN.CAMERAGRANTED)}} returnFunction={() => {setCurrentScreen(SCREEN.PERMISSIONDETAIL)}}/>

      case SCREEN.CAMERAREQUEST:
        return <CameraRequest nextFunction={() => {setCurrentScreen(SCREEN.EMAILSCREEN)}} returnFunction={() => {setCurrentScreen(SCREEN.PERMISSIONDETAIL)}}/>

      case SCREEN.EMAILSCREEN:
        return <EmailForm nextFunction={() => {setCurrentScreen(SCREEN.MAILSENT)}}/>
        

      case SCREEN.MAILSENT:
        return <MailSent returnFunction={() => {setCurrentScreen(SCREEN.EMAILSCREEN)}} nextFunction={() => {setCurrentScreen(SCREEN.FIRSTLOGIN)}}/>
        

      case SCREEN.FIRSTLOGIN:
        return <Header Title={"Return to EMAILSCREEN"} Return={true} function={() => {setCurrentScreen(SCREEN.MAILSENT)}}/>
        

      case SCREEN.NAMEREQUEST:
        return <Header Title={"Return to MAILSENT"} Return={true} function={() => {setCurrentScreen(SCREEN.FIRSTLOGIN)}}/>
        

      case SCREEN.CONFIRMCHARACTER:
        return <Header Title={"Return to FIRSTLOGIN"} Return={true} function={() => {setCurrentScreen(SCREEN.NAMEREQUEST)}}/>
        
      default:
        return  <MailSent returnFunction={() => {setCurrentScreen(SCREEN.EMAILSCREEN)}} nextFunction={() => {setCurrentScreen(SCREEN.FIRSTLOGIN)}}/>//<Welcome nextFunction={() => {setCurrentScreen(SCREEN.PERMISSIONDETAIL)}}/>
    }
  }

  return useObserver (() => (
    <div className={style.container}>
      {returnScreen()}
    </div>
  ));
};

export default LoginForm;

/*
BACKUP OF OLD PAGE

const LoginForm = () => {
  const [email, setEmail] = useState("");

  const { uiStore } = useStores();

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await uiStore.loginWithEmail(email);
    console.log(result);
  };

  if (window.location.href.indexOf("apiKey") > -1) {
    localStorage.setItem("emailForSignIn", email)
    uiStore.verifyLogin();
  }

  const logOut = () => {
    const fb = uiStore.firebase;
    fb.auth().signOut().then(function() {
      console.log('Logged out')
      localStorage.clear()
    }).catch(function(error) {
      console.log("error occured: ".error.code)
    });
  }
  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor={"email"} className="visually-hidden ">
        E-mail
      </label>
      <input
        className={style.input}
        type={email}
        name={"email"}
        placeholder={"Fill in your email."}
        value={email}
        onChange={e => setEmail(e.currentTarget.value)}
        required="required"
        autoComplete="off"
      />
        <input type="submit" value="Register" className={style.button} />
      </form>

      <button onClick={e => logOut()} value="" className={style.button}> Sign Out</button>
    </div>
  );
};

*/
