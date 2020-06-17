import React, {useState} from "react";
import style from "./CameraRequest.module.css";
import Header from "../Header/Header.js";
import GeneralButton from "../../../globalComponents/GeneralButton"
import ErrorMessage from "../../../globalComponents/ErrorMessage.js";
import { useObserver } from "mobx-react-lite";
import COLORS from "../../../globalStyles/colors";

const CameraRequest = (props) => {


  const [error, setError] = useState(false);

    const cameraTest = () => {
        navigator.getUserMedia (
            // constraints
            {
               video: true,
               audio: true
            },
            function(localMediaStream) {
               let video = document.querySelector('video');
               video.src = window.URL.createObjectURL(localMediaStream);
               video.onloadedmetadata = function(e) {
               };
            },
            function(err) {
             if(err.name.toString() === "NotAllowedError"){console.log('perm denied'); setError(true)}
             
            }
         );
    }


  return useObserver( () => (
    <div className={style.container}>
        <Header Return={true} function={props.returnFunction}/>
        <div className={style.mainContent}>

        <img className={style.owlImage} alt={"Uiltje met camera"} src={"./assets/illustraties/uiltje- cam.svg"} />

            <div className={style.content}>
                <h1 className={style.title}>Deze app toestemming geven om de camera te gebruiken</h1>

                <div className={style.contentText}>
                    <p>De camera wordt gebruikt om voltooide werkjes van uw kind op te slaan</p>
                    <p>Deze foto's zijn alleen zichtbaar voor de beperkte vriendengroepen van uw kind</p>
                </div>
                <GeneralButton textColor={COLORS.greyDark} boxShadow={COLORS.green} iconBackgroundColor={COLORS.green} backgroundColor={COLORS.greenLight} buttonWidth={"33rem"} fontSize={"2.4rem"} onClick={()=> {cameraTest()}} icon="thumbsUp" type="svg" text="Toestemming geven"/>
                <p onClick={() => {setError(true)}} className={style.detail}>Toestemming weigeren</p>
            </div>
        </div>      
        {error ? 
        <ErrorMessage closeFunction={() => {setError(false)}} text={"U heeft de toegang geweigerd"}/>
        :
        ''
        }
    </div>
  ));
};

export default CameraRequest;
