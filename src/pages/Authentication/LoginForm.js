import React, { useState } from "react";
import style from "./LoginForm.module.css";
import { useStores } from "../../hooks/useStores";
import Welcome from "./LoginSequence/Welcome/Welcome.js"
import Header from "../Authentication/LoginSequence/Header/Header.js";
import { useObserver } from "mobx-react-lite";
//import { ROUTES } from "../../consts";

const LoginForm = () => {


  const SCREEN = {
    WELCOME: "WELCOME",
    PERMISSIONDETAIL: "PERMISSIONDETAIL",
    CAPATCHA: "CAPATCHA",
    CAMERAREQUEST: "CAMERAREQUEST",
    CAMERAGRANTED: "CAMERAGRANTED",
    EMAILSCREEN: "EMAILSCREEN",
    MAILSENT: "MAILSENT",
    FIRSTLOGIN: "FIRSTLOGIN",
    NAMEREQUEST: "NAMEREQUEST",
    CONFIRMCHARACTER: "CONFIRMCHARACTER"
  }

  const [email, setEmail] = useState("");
  const [currentScreen, setCurrentScreen] = useState("");

  const { uiStore } = useStores();


  const returnScreen = () => {
    switch(currentScreen) {
      case SCREEN.WELCOME:
        return <Welcome returnFunction={setCurrentScreen(SCREEN.WELCOME)}/>
        
      
      case SCREEN.PERMISSIONDETAIL:
        return <Header Title={"Welkom bij de Reisuil"} Return={true} function={() => {setCurrentScreen(SCREEN.WELCOME)}}/>
        
      
      case SCREEN.CAPATCHA:
        return <Header Title={"Welkom bij de Reisuil"} Return={true} function={() => {setCurrentScreen(SCREEN.WELCOME)}}/>
        

      case SCREEN.CAMERAREQUEST:
        return <Header Title={"Welkom bij de Reisuil"} Return={true} function={() => {setCurrentScreen(SCREEN.WELCOME)}}/>
        

      case SCREEN.CAMERAGRANTED:
        return <Header Title={"Welkom bij de Reisuil"} Return={true} function={() => {setCurrentScreen(SCREEN.WELCOME)}}/>
        

      case SCREEN.EMAILSCREEN:
        return <Header Title={"Welkom bij de Reisuil"} Return={true} function={() => {setCurrentScreen(SCREEN.WELCOME)}}/>
        

      case SCREEN.MAILSENT:
        return <Header Title={"Welkom bij de Reisuil"} Return={true} function={() => {setCurrentScreen(SCREEN.WELCOME)}}/>
        

      case SCREEN.FIRSTLOGIN:
        return <Header Title={"Welkom bij de Reisuil"} Return={true} function={() => {setCurrentScreen(SCREEN.WELCOME)}}/>
        

      case SCREEN.NAMEREQUEST:
        return <Header Title={"Welkom bij de Reisuil"} Return={true} function={() => {setCurrentScreen(SCREEN.WELCOME)}}/>
        

      case SCREEN.CONFIRMCHARACTER:
        return <Header Title={"Welkom bij de Reisuil"} Return={true} function={() => {setCurrentScreen(SCREEN.WELCOME)}}/>
        
      default:
        return <Welcome returnFunction={() => {setCurrentScreen(SCREEN.PERMISSIONDETAIL)}}/>
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
