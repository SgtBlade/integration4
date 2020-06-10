import React, { useState } from "react";
import style from "./Authentication.module.css";
import { useStores } from "../../hooks/useStores";

const LoginForm = () => {
  const { userStore, uiStore } = useStores();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const user = new Object({
      name: "",
      store: userStore,
      email: email,
      password: password
    });
    const result = await uiStore.loginUser(user);
    console.log(result);
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
       
        <input type="submit" value="Login" className={style.button} />
      </form>
    </div>
  );
};

export default LoginForm;
