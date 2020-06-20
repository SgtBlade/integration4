import React from "react";
import { useObserver } from "mobx-react-lite";
import { Link } from "react-router-dom";
import style from "./FriendRequests.module.css";
import { useStores } from "../../../hooks/useStores";

import RoundArrowButton from "../../globalComponents/RoundArrowButton.js"
import RoundHomeButton from "../../globalComponents/RoundHomeButton.js"
import { ROUTES } from "../../../consts";

const FriendRequests = () => {
  
    const {uiStore, friendStore} = useStores();

    return useObserver(() => (
        <div className={style.container}>

            <div className={style.NavigatorButtons}>
                <Link to={ROUTES.Friends}><RoundArrowButton/></Link>
                <RoundHomeButton />
            </div>
            
            <div className={style.requestList__ScrollbarFixer}>
              <span className={style.requestList__Title}><img src={"/assets/icons/addFriendblue.svg"}/><p>Mijn verzoekjes</p></span>
              <ul className={`${style.requestList} ${friendStore.requests.length <= 0 ? style.EmptyrequestList : ''}`}>      
                  {friendStore.requests.length <= 0 ? 
                  <li className={style.EmptyrequestList__item}>Je hebt nog geen vriendschaps verzoekjes gekregen</li>
                  :
                  friendStore.requests.map((key, index) => {
                      return (
                          <li key={index} className={style.requestList__item}>
                          <div  style={{backgroundColor: key.color}} className={style.requestList__item__Image}>
                              <img src={`/assets/illustraties/characters/${key.avatar}.svg`} height={"67"} alt={`${key.avatar} avatar`}/>
                          </div>
                          <p className={style.requestList__item__Name}>{key.name}</p>

                            <div className={style.request__buttonsWrapper}>
                              <img onClick={() => {friendStore.acceptFriendRequest(key.email)}} src={"/assets/icons/accept.svg"} alt={"Accept knop"} />
                              <img onClick={() => {friendStore.denyFriendRequest(key.id)}}src={"/assets/icons/delete.svg"} alt={"Accept knop"} />
                            </div>
                          </li>
                      )
                  })
                  }
              </ul>                
            </div>
           
        </div>
    ));
    };

export default FriendRequests;


/*
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "100%" }}
          />


          const friendStore.requests = [
          {
            avatar: "dad",
            color: "#36EA93",
            name: "testUser12",
            userID: "4123123"
          },
          {
            avatar: "mom",
            color: "#32EA93",
            name: "LALALAND",
          },
          {
            avatar: "pirate",
            color: "#32EA93",
            name: "LALALAND",
          },
          {
            avatar: "regular",
            color: "#32EA93",
            name: "LALALAND",
          },
          {
            avatar: "giggle",
            color: "#32EA93",
            name: "LALALAND",
          }
        ]

*/