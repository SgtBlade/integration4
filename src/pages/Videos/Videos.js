import React, {useState} from "react";
import Popover from '@material-ui/core/Popover';
import { useParams, Link } from "react-router-dom";
import style from "./Videos.module.css";
import { ROUTES } from "../../consts";
import ProjectsHeader from "../Projects/ProjectComponents/Header/Header";
import VIDEOS from "../A_userVariables/videos"
import { useStores } from "../../hooks/useStores";

const Videos = () => {
  const { id } = useParams();
  const {uiStore} = useStores();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const open = Boolean(anchorEl);

  return (
    <>
    <section className={`${style.container} ${style.container__bg}`}>
      <ProjectsHeader
        image="vrienden-blackSoft"
        link={ROUTES.MyProjects}
        title="id"
        color="#FFFFFF"
      />

      <div className={style.wrapper}>

                
      {VIDEOS.map((element, index) =>
    uiStore.currentUser.chapter >= index 
      ?
      element.map((video, index) => (
        <div onClick={handleClick} key={`${video.name}${index}`} className={style.project}>
        <div className={style.project__pictureBox}>
            <img
              className={style.project__bar__buttonbox__image}
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
        </div>
        ))
      : ""
  )}
      

      
      </div>
    </section>
    <Popover
    className={style.Popover}
    id={id}
    open={open}
    anchorEl={anchorEl}
    onClose={handleClose}
    anchorOrigin={{
      vertical: "center",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "center",
      horizontal: "center"
    }}
    
  >
    <div className={style.test}>
    <video  className={style.video} autoPlay>
        <source src={"/assets/videos/frankrijk.mp4"} type="video/mp4" />
        <p>Je internet browser ondersteund geen video</p>
    </video>
    </div>
  
  </Popover>
  </>
  )};

export default Videos;
