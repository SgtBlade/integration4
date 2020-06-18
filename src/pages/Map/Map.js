import React from "react";
import { useObserver } from "mobx-react-lite";
import style from "./Map.module.css";
import { useStores } from "../../hooks/useStores";

const Home = () => {
  const { uiStore } = useStores();

  return useObserver(() => (
    <>
      
    </>
  ));
};

export default Home;
