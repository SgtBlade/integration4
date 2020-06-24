import React from "react";
import { useParams, useHistory } from "react-router-dom";
import style from "../styles/ProjectsDetail.module.css";
import { ROUTES } from "../../../consts";
import ProjectsHeader from "../ProjectComponents/Header/Header";
import { useStores } from "../../../hooks/useStores";
import { useState } from "react";

const MyProjectsDetail = () => {
  const { id, loc } = useParams();
  const { uiStore } = useStores();

  const history = useHistory()
  const [image, setImage] = useState(false)
  const [postcards, setPostcards] = useState([])

  const getImage =  async () => {
    let newImage = false;
    if(uiStore.currentUser[loc]){
      newImage = uiStore.currentUser[loc][id]
      if(!newImage) history.push(`${ROUTES.MyProjectsOverview.to}${loc}`);
      else {
        const tempPostcards = await uiStore.getPostcardsPerImage(loc, newImage.name)
        setPostcards(tempPostcards);
        setImage(newImage);
      }

    }else history.push(`${ROUTES.MyProjects}`);
  }
  if(!image)getImage();
  return (
    
    <section className={`${style.container} ${style.container__bg}`}>
      <div className={style.container__header}>
        <ProjectsHeader
          image="vrienden-blackSoft"
          link={`${ROUTES.MyProjectsOverview.to}${loc}`}
          title="Eiffeltoren"
          color="#FFFFFF"
        />
      </div>
      <div className={style.wrapper}>
        <div className={style.project}>
          <img
            src={image.link}
            className={style.project__image}
            alt="Mijn werkje"
            width={"440"}
            height={"440"}
            style={{objectFit: "cover"}}
          />
        </div>
        <div className={style.project__postkaartjes}>

        {postcards.map((item, index) => {
            return(
              <div key={index} className={style.project__postkaartjes__wrapper}>
              <img
                src={`/assets/postcards/${loc}/${item.background  }.svg`}
                className={style.postkaartjes__image}
                alt=""
              />
              <img
                src={`/assets/postcards/${loc}/${item.sticker}.svg`}
                className={style.postkaartjes__sticker}
                alt=""
              />
          </div>
            )
        })}
          

        </div>
      </div>
    </section>
  );
};

export default MyProjectsDetail;
