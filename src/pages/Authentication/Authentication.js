import React from "react";
import { useStores } from "../../hooks/useStores";
import { useObserver } from "mobx-react-lite";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { ROUTES } from "../../consts/index.js";

import Home from "../Home/Home.js";
import Map from "../Map/Map.js";
import LoginForm from "./LoginForm.js";
import style from "./Authentication.module.css";
import Tutorial from "../Tutorials/TutorialOne/Tutorial.js";
import Friends from "../Friends/Friends.js";
import FriendRequests from "../Friends/FriendRequests/FriendRequests.js";
import ScanFriend from "../Friends/ScanFriend/ScanFriend.js";
import Frankrijk from "../PlayAgain/Frankrijk";
import Postcards from "../Postcards/Postcards";
import FriendsProjects from "../Projects/FriendsProjects/FriendsProjects";
import FriendsProjectsOverview from "../Projects/FriendsProjects/FriendsProjectsOverview";
import MyProjects from "../Projects/MyProjects/MyProjects";
import MyProjectsOverview from "../Projects/MyProjects/MyProjectsOverview";

const Authentication = () => {
  const { uiStore } = useStores();

  const history = useHistory();
  if (window.location.href.indexOf("apiKey") > -1) {
    uiStore.verifyLogin();
    history.push("login");
  }

  return useObserver(() => (
    <>
      <Switch>
        <Route path={ROUTES.login}>
          {uiStore.currentUser && uiStore.currentUser.name !== null ? (
            <Redirect to={ROUTES.home} />
          ) : (
            <div className={style.wrapper}>
              <LoginForm />
            </div>
          )}
        </Route>

        <Route exact path={ROUTES.home}>
          {uiStore.currentUser && uiStore.currentUser.name !== null ? (
            <>
              <Home />
            </>
          ) : (
            <Redirect to={ROUTES.login} />
          )}
        </Route>

        <Route exact path={ROUTES.TaskFrance}>
          {uiStore.currentUser && uiStore.currentUser.name !== null ? (
            <>
              <Tutorial />
            </>
          ) : (
            <Redirect to={ROUTES.login} />
          )}
        </Route>
        <Route exact path={ROUTES.Friends}>
          {uiStore.currentUser && uiStore.currentUser.name !== null ? (
            <>
              <Friends />
            </>
          ) : (
            <Redirect to={ROUTES.login} />
          )}
        </Route>

        <Route exact path={ROUTES.FriendRequests}>
          {uiStore.currentUser && uiStore.currentUser.name !== null ? (
            <>
              <FriendRequests />
            </>
          ) : (
            <Redirect to={ROUTES.login} />
          )}
        </Route>

        <Route path={ROUTES.Postcards.path}>
          {uiStore.currentUser && uiStore.currentUser.name !== null ? (
            <>
              <Postcards />
            </>
          ) : (
            <Redirect to={ROUTES.login} />
          )}
        </Route>

        <Route exact path={ROUTES.FriendScan}>
          {uiStore.currentUser && uiStore.currentUser.name !== null ? (
            <>
              <ScanFriend />
            </>
          ) : (
            <Redirect to={ROUTES.login} />
          )}
        </Route>
        <Route exact path={ROUTES.map}>
          {uiStore.currentUser && uiStore.currentUser.name !== null ? (
            <>
              <Map />
            </>
          ) : (
            <Redirect to={ROUTES.login} />
          )}
        </Route>
        <Route exact path={ROUTES.FriendsProjectsOverview.path}>
          {uiStore.currentUser && uiStore.currentUser.name !== null ? (
            <>
              <FriendsProjectsOverview />
            </>
          ) : (
            <Redirect to={ROUTES.login} />
          )}
        </Route>
        <Route exact path={ROUTES.FriendsProjects}>
          {uiStore.currentUser && uiStore.currentUser.name !== null ? (
            <>
              <FriendsProjects />
            </>
          ) : (
            <Redirect to={ROUTES.login} />
          )}
        </Route>
        <Route exact path={ROUTES.MyProjectsOverview.path}>
          {uiStore.currentUser && uiStore.currentUser.name !== null ? (
            <>
              <MyProjectsOverview />
            </>
          ) : (
            <Redirect to={ROUTES.login} />
          )}
        </Route>
        <Route exact path={ROUTES.MyProjects}>
          {uiStore.currentUser && uiStore.currentUser.name !== null ? (
            <>
              <MyProjects />
            </>
          ) : (
            <Redirect to={ROUTES.login} />
          )}
        </Route>
        <Route exact path={ROUTES.TaskFrance}>
          {uiStore.currentUser && uiStore.currentUser.name !== null ? (
            <>
              <Tutorial />
            </>
          ) : (
            <Redirect to={ROUTES.login} />
          )}
        </Route>
        <Route exact path={ROUTES.Frankrijk}>
          {uiStore.currentUser && uiStore.currentUser.name !== null ? (
            <>
              <Frankrijk />
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
