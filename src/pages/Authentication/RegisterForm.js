import React, { useState } from "react";
import style from "./Authentication.module.css";
import { useStores } from "../../hooks/useStores";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../consts";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassWord] = useState("");
  const [passwordAgain, setPassWordAgain] = useState("");

  const { uiStore, userStore } = useStores();
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    if (password === passwordAgain) {
      const user = new Object({
        name: name,
        email: email,
        store: userStore,
        password: password
      });
      const result = await uiStore.registerUser(user);
      if (result.uid) {
        console.log(result);
        //gebruiker is correct geregistreerd
        history.push(ROUTES.home);
      } else {
        //registratie mislukt
        console.log(result);
      }
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
       
        <input type="submit" value="Register" className={style.button} />
      </form>
    </div>
  );
};

export default RegisterForm;
