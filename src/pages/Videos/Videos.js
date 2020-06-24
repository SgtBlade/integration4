import React, {useState} from "react";
import style from "./Videos.module.css";
import { ROUTES } from "../../consts";
import ProjectsHeader from "../Projects/ProjectComponents/Header/Header";
import VIDEOS from "../A_userVariables/videos"
import { useStores } from "../../hooks/useStores";
import v4 from "uuid/v4"
import { useParams } from "react-router-dom";

const Videos = () => {
  const {uiStore} = useStores();
  const [state, setState] = useState([false])
  const {loc} = useParams()

  return (
    <>
    <section className={`${style.container} ${style.container__bg}`}>
      <ProjectsHeader
        image="vrienden-blackSoft"
        link={`${ROUTES[loc] ? ROUTES[loc] : ROUTES.map}`}
        title="Reisuil filmpjes"
        color="#FFFFFF"
      />

      <div className={style.wrapper}>                
      {VIDEOS.map((element, index) =>
    uiStore.currentUser.chapter >= index 
      ?
      <div key={v4()}>
      <p className={style.title}>{element[0].chapter ? element[0].chapter : ''}:</p>
      <div className={style.chapterVideos}>
      {element.map((video, index) => (
        <div onClick={() => {setState([true, video.name])}} key={`${video.name}${index}`} className={style.project}>
            <div className={style.project__pictureBox}>
                <img className={style.project__bar__buttonbox__image}
                width="240"
                height="240"
                src={`/assets/videos/${video.name}.png`}
                alt="project"
                />
            </div>
              <div className={style.project__bar}>
                <div className={style.project__bar__autor}>
                  <p className={style.project__bar__name}>{video.title}</p>
              </div>
            </div>
            <div className={style.playbutton}><img src={"/assets/icons/play.svg"} alt={"Play button"} height={"50"} width={"50"}/></div>
        </div>
        ))}
        </div>
        </div>
      : ""
  )}
      

      
      </div>
    </section>
    
    {state[0] ? 
    <div onClick={() => {setState(false)}} className={style.videoContainer}>

<div className={style.videoWarpper}>
  
        <video className={style.video} controls autoPlay>
            <source src={`/assets/videos/${state[1]}.mp4`} type="video/mp4" />
            <p>Je internet browser ondersteund geen video</p>
        </video>
        <div className={style.closeIcon}><img height={"50"} src={"/assets/icons/friendDelete.svg"} alt={"sluit icoontje"}/></div>

</div>  

    </div>
    :
    ''}
  
  </>
  )};

export default Videos;
