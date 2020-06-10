import React from "react";
import Home from "../Home/Home.js";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import { ROUTES } from "../../consts/index.js";
import LoginForm from "./LoginForm.js";
import RegisterForm from "./RegisterForm.js";
import style from "./Authentication.module.css";
import { useStores } from "../../hooks/useStores";
import { useObserver } from "mobx-react-lite";

const Authentication = () => {
  const { uiStore } = useStores();
  return useObserver(() => (
    <>
      <Switch>
        <Route exact path={ROUTES.login}>
          {uiStore.currentUser ? (
            <Redirect to={ROUTES.home} />
          ) : (
            <div className={style.wrapper}>
              <LoginForm />
              <NavLink to={ROUTES.register} className={style.textlink}>
                <span>Do you want to register?</span>
              </NavLink>
            </div>
          )}
        </Route>
        <Route exact path={ROUTES.register}>
          {uiStore.currentUser ? (
            <Redirect to={ROUTES.home} />
          ) : (
            <div className={style.wrapper}>
              <RegisterForm />
            </div>
          )}
        </Route>
        <Route path={ROUTES.home}>
          {uiStore.currentUser ? (
            <>
                <Home/>
            </>
          ) : (
            <Redirect to={ROUTES.login} />
          )}
        </Route>
      </Switch>
    </>
  ));
};

export default Authentication;
