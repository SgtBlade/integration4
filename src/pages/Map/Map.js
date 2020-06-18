import React from "react";
import { useObserver } from "mobx-react-lite";
import style from "./Map.module.css";
import { useStores } from "../../hooks/useStores";
import COUNTRIES from "./countries.js"

const Map = () => {
  const { uiStore } = useStores();

  const test = Array.from(COUNTRIES);

  console.log(test)

  return useObserver(() => (
    <div className={style.content}>
      <div className={style.map}>
      <svg>
      {test.map(student => (<ul>your code here</ul>))}
      </svg>
      
      </div>
    </div>
  ));
};

export default Map;
