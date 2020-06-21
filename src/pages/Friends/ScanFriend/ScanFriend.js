import React, { useState } from "react";
import { useObserver } from "mobx-react-lite";
import { Link } from "react-router-dom";
import style from "./ScanFriend.module.css";
import { useStores } from "../../../hooks/useStores";
import QrReader from "react-qr-reader";
import COLORS from "../../globalStyles/colors";
import { ROUTES } from "../../../consts";
import RoundArrowButton from "../../globalComponents/RoundArrowButton";
import RoundHomeButton from "../../globalComponents/RoundHomeButton";
import ErrorMessage from "../../globalComponents/ErrorMessage";


const ScanFriend = () => {
  
    const {friendStore} = useStores();
    const [scanData, setScanData] = useState(false)
    const [foundUser, setFoundUser] = useState(false);
    const [error, setError] = useState(false);
    const toggleFound = () => {}


      const handleScan = async data => {
        if (data && data !== scanData) {
          const result = await friendStore.findFriend(data)
          setScanData(data);
          if(Array.isArray(result)){setError(result); setFoundUser(false)}
          else setFoundUser(result)
        }
      }
      const handleError = err => {
        console.error(err)
      }
      const addUser = async () => {
        const reply = await friendStore.sendFriendRequest(foundUser);
        setError(reply); 
        setScanData(false)
    }

    return useObserver(() => (
          <div onClick={toggleFound} className={style.container}>

                <div className={style.NavigatorButtons}>
                  <Link to={ROUTES.Friends}><RoundArrowButton/></Link>
                  <RoundHomeButton></RoundHomeButton>
                </div>



            <div className={style.QRReader}>
            <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '600px' }} />
          </div>



        <div className={`${style.friendWindow} ${foundUser && scanData ? style.friendWindow__UP : ''}`}>
            <div className={style.friendIcon} style={{backgroundColor: foundUser ? foundUser.color : COLORS.blue}}><img width={"69"} height={"151"} src={`/assets/illustraties/characters/${foundUser ? foundUser.avatar : 'regular'}.svg`} alt={"gebruikers avatar"}/></div>
            <p className={style.friendDialogue}>Voeg <mark className={style.friendDialogue__name}>{foundUser ? foundUser.name : 'secret'}</mark> toe aan je vrienden?</p>
        <div className={style.friendWindow__buttonWrapper}>
           <div className={style.friendWindow__button}>
             <img onClick={() => {addUser()}} src={'/assets/icons/accept.svg'} width={"152"} height={"152"} alt={"accept knop"}/>
             <p className={style.friendWindow__button__text}>ja</p>
           </div>
           <div className={style.friendWindow__button}>
             <img onClick={() => {setScanData(false)}} src={'/assets/icons/delete.svg'} width={"152"} height={"152"} alt={"accept knop"}/>
             <p className={style.friendWindow__button__text}>nee</p>
           </div>
        </div>
        </div>

        {error ? 
          <ErrorMessage positive={error[0]} closeFunction={() => {setError(false)}} text={`${error[1]}`}/>
          :
          ''
        }

        </div>
    ));
    };

export default ScanFriend;
