import React, { useState } from "react";
import style from "./LoginForm.module.css";
import { useStores } from "../../hooks/useStores";
import PermissionDetail from "./LoginSequence/PermissionDetail/PermissionDetail.js"
import Welcome from "./LoginSequence/Welcome/Welcome.js";
import Captcha from "./LoginSequence/Captcha/Captcha.js";
import Header from "../Authentication/LoginSequence/Header/Header.js";
import { useObserver } from "mobx-react-lite";
//import { ROUTES } from "../../consts";

const LoginForm = () => {


  const SCREEN = {
    WELCOME: "WELCOME",
    PERMISSIONDETAIL: "PERMISSIONDETAIL",
    CAPTCHA: "CAPTCHA",
    CAMERAREQUEST: "CAMERAREQUEST",
    CAMERAGRANTED: "CAMERAGRANTED",
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
        return <Welcome returnFunction={() => {setCurrentScreen(SCREEN.CAPTCHA)}}/>

      case SCREEN.PERMISSIONDETAIL:
        return <PermissionDetail Return={true} function={() => {setCurrentScreen(SCREEN.WELCOME)}}/>
        
      
      case SCREEN.CAPTCHA:
        return <Captcha returnFunction={() => {setCurrentScreen(SCREEN.PERMISSIONDETAIL)}}/>
        

      case SCREEN.CAMERAREQUEST:
        return <Header Title={"Return to CAPTCHA"} Return={true} function={() => {setCurrentScreen(SCREEN.CAPTCHA)}}/>
        

      case SCREEN.CAMERAGRANTED:
        return <Header Title={"Return to CAMERAREQUEST"} Return={true} function={() => {setCurrentScreen(SCREEN.CAMERAREQUEST)}}/>
        

      case SCREEN.EMAILSCREEN:
        return <Header Title={"Return to CAMERAGRANTED"} Return={true} function={() => {setCurrentScreen(SCREEN.CAMERAGRANTED)}}/>
        

      case SCREEN.MAILSENT:
        return <Header Title={"Return to MAILSENT"} Return={true} function={() => {setCurrentScreen(SCREEN.EMAILSCREEN)}}/>
        

      case SCREEN.FIRSTLOGIN:
        return <Header Title={"Return to EMAILSCREEN"} Return={true} function={() => {setCurrentScreen(SCREEN.MAILSENT)}}/>
        

      case SCREEN.NAMEREQUEST:
        return <Header Title={"Return to MAILSENT"} Return={true} function={() => {setCurrentScreen(SCREEN.FIRSTLOGIN)}}/>
        

      case SCREEN.CONFIRMCHARACTER:
        return <Header Title={"Return to FIRSTLOGIN"} Return={true} function={() => {setCurrentScreen(SCREEN.NAMEREQUEST)}}/>
        
      default:
        return <Welcome returnFunction={() => {setCurrentScreen(SCREEN.WELCOME)}}/>
    }
  }

  console.log(currentScreen);

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
