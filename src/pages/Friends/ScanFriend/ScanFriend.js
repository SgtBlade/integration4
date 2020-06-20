import React, { useState } from "react";
import { useObserver } from "mobx-react-lite";
import { Link, useHistory } from "react-router-dom";
import style from "./ScanFriend.module.css";
import { useStores } from "../../../hooks/useStores";
import QrReader from "react-qr-reader";


const ScanFriend = () => {
  
    const {uiStore, friendStore} = useStores();
    const handleError = res => console.log(res)
    const handleScan = res => console.log(res)

    return useObserver(() => (
        <div className={style.container}>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        <p>{this.state.result}</p>
        </div>
    ));
    };

export default ScanFriend;
