import React from "react";
import Home from "../Home/Home.js";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import { ROUTES } from "../../consts/index.js";
import LoginForm from "./LoginForm.js";
import UnsupportedDevice from "../UnsupportedDevice/UnsupportedDevice.js";
import style from "./Authentication.module.css";
import { useStores } from "../../hooks/useStores";
import { useObserver } from "mobx-react-lite";

const Authentication = () => {
  const { uiStore } = useStores();
  

  return useObserver(() => (
    <>
      <Switch>
        <Route path={ROUTES.login}>
            {uiStore.currentUser ? (
              <Redirect to={ROUTES.home} />
            ) : (
              <div className={style.wrapper}>
                <LoginForm />
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
