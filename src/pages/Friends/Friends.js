import React, { useState } from "react";
import { useObserver } from "mobx-react-lite";
import { Link } from "react-router-dom";
import style from "./Friends.module.css";
import { useStores } from "../../hooks/useStores";
import QRCode from "react-qr-code";

import RoundArrowButton from "../globalComponents/RoundArrowButton.js"
import GeneralButton from "../globalComponents/GeneralButton";
import COLORS from "../globalStyles/colors";
import { ROUTES } from "../../consts";

const Friends = () => {
  
    const {uiStore, friendStore} = useStores();

    const [largeQR, setLargeQR] = useState(false);
    const [warning, setWarning] = useState([false, null]);
    const toggleQR = () => largeQR ? setLargeQR(false) : setLargeQR(true);
    const toggleWarning = (data) => { warning[0] ? setWarning([false]) : setWarning([true, data]);}

    console.log(uiStore.currentUser)

    return useObserver(() => (
        <div onClick={largeQR ? toggleQR : null} className={style.container}>

            <div className={style.NavigatorButtons}>
                
                {largeQR ?
                <>
                    <RoundArrowButton onClick={toggleQR}/>
                    <Link to={ROUTES.Friends} className={style.button_requests}><GeneralButton
                    onClick={() =>{}}
                    icon="share"
                    buttonWidth={"27rem"}
                    backgroundColor="white"
                    iconBackgroundColor={COLORS.grey}
                    boxShadow={`0rem .5rem ${COLORS.greyLight}`}
                    type="svg"
                    text="Deel via mail"
                    />
                    </Link>
                </>
                :
                <>
                    <Link to={ROUTES.home}><RoundArrowButton/></Link>
                    <Link className={style.button_requests} to={ROUTES.FriendRequests}><GeneralButton
                    onClick={() =>{}}
                    icon="mailOpen"
                    buttonWidth={"27rem"}
                    backgroundColor="white"
                    iconBackgroundColor={COLORS.grey}
                    boxShadow={`0rem .5rem ${COLORS.greyLight}`}
                    type="svg"
                    text="Verzoeken"
                    />
                    
                    {friendStore.requests.length > 0 ?
                    <p className={style.button__requestsCount}>{friendStore.requests.length}</p>
                    :
                    ''
                    }
                    
                    </Link>
                </>
                }
                
            </div>
            <div className={style.addFriendButtons}>
                
                <div className={style.addFriendButtons__buttonWrap}>
                    <span onClick={toggleQR} className={style.addFriendButtons__buttonFrame}><QRCode size={120} value={`${uiStore.currentUser.id}`}/></span>
                    <p className={style.addFriendButtons__label}>Jouw vriendecode</p>
                </div>

                <div className={style.addFriendButtons__buttonWrap}>
                    <Link to={ROUTES.FriendScan}><span className={`${style.addFriendButtons__buttonFrame} ${style.addFriendButtons__addIcon}`}><img src={"./assets/icons/addFriend.svg"} alt={"Vriend toevoegen icoon"}/></span></Link>
                    <p className={style.addFriendButtons__label}>Vrienden toevoegen</p>
                </div>
                
            </div>
            <div className={style.friendList__ScrollbarFixer}>
                
                                <ul className={`${style.friendList} ${friendStore.friends.length <= 0 ? style.EmptyFriendList : ''}`}>
                                    

                                    {friendStore.friends.length <= 0 ? 
                                    <li className={style.EmptyfriendList__item}>Je hebt nog geen vriendjes toegevoegd</li>
                                    :
                                    friendStore.friends.map((key, index) => {
                                        return (
                                            <li key={index} className={style.friendList__item}>
                                            <div  style={{backgroundColor: key.color}} className={style.friendList__item__Image}>
                                                <img src={`./assets/illustraties/characters/${key.avatar}.svg`} height={"67"} alt={`${key.avatar} avatar`}/>
                                            </div>
                                            <p className={style.friendList__item__Name}>{key.name}</p>
                                            <span onClick={() => {toggleWarning(key)}} className={style.friendList__item__closeIcon}><img alt={'delete icon'} src={"./assets/icons/friendDelete.svg"}/></span>
                                            </li>
                                        )
                                    })
                                    }
                                </ul>

                                
            </div>

        {largeQR ?
         (<div className={style.largeQRWrap}>
             <p className={style.largeQRInfo}>Laat je vrienden dit scannen</p>
            <span className={style.largeQR}><QRCode size={440} value={`${uiStore.currentUser.id}`}/></span>
          </div>)
        :
        ''
        }  
        {console.log(warning)}
        {warning[0] ?
         (<div className={style.warningMessage__wrap}>
            <div className={style.warningMessage}>
    
                <p className={style.warningMessage__Dialogue}>Ben je zeker dat je <mark className={style.warningMessage__Mark}>{warning[1].name}</mark> wil verwijderen</p>
    
                <img onClick={()=>{friendStore.deleteFriend(warning[1].id); setWarning([false])}} src={"./assets/icons/accept.svg"} alt={"Accept knop"} />
                <img onClick={() => setWarning([false])}src={"./assets/icons/delete.svg"} alt={"Accept knop"} />
                </div>
             </div>)
        :
        ''
        }         

           
        </div>
    ));
    };

export default Friends;
