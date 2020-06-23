import React from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import style from "../styles/ProjectsOverview.module.css";
import { ROUTES } from "../../../consts";
import ProjectsHeader from "../ProjectComponents/Header/Header";
import { useStores } from "../../../hooks/useStores";

const MyProjectsOverview = (props) => {
  const { id } = useParams();
  const { uiStore } = useStores();
  return id ? (
    <section className={`${style.container} ${style.container__bg}`}>
      <ProjectsHeader
        image="vrienden-blackSoft"
        link={ROUTES.MyProjects}
        title="Eiffeltoren"
        color="#FFFFFF"
      />
      <div className={style.wrapper}>

        {uiStore.currentUser[id] ? 
          uiStore.currentUser[id].map((item, index) => (
           
                <div key={`${uiStore.currentUser.id}${index}`} className={style.project}>
                  <div className={style.project__pictureBox}>
                    <img
                      className={style.project__bar__buttonbox__image}
                      width="240"
                      height="240"
                      src={item.link}
                      alt="project"
                    />
                  </div>
                  <div className={style.project__bar}>
                    <div className={style.project__bar__autor}>
                      <img
                        className={style.project__bar__image}
                        src="/assets/icons/vergrootglas.svg"
                        alt="icon"
                      />
                      <p className={style.project__bar__name}>Bekijken</p>
                    </div>
                    <div className={style.project__bar__buttonbox}>
                      <Link
                      to={`${ROUTES.MyProjectsDetail.to}${index}/${id}`}
                      >
                        <img
                          src="/assets/icons/postkaartjeTwo.svg"
                          alt="Toevoegen knop"
                        />
                        <p className={style.buttonbox__aantal}>{(uiStore.getPostcardsPerImage(id, item.name).length)}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            : ""
      
        }
        
        <Link to={ROUTES.TaskFrance} className={style.addProject}>
          <img
            src="../../../assets/icons/addProject.svg"
            alt="voeg project toe"
          />
        </Link>
      </div>
    </section>
  ) : (
    <Redirect to={ROUTES.home} />
  );
};

export default MyProjectsOverview;
