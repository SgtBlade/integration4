import React from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import style from "../styles/ProjectsOverview.module.css";
import { ROUTES } from "../../../consts";
import ProjectsHeader from "../ProjectComponents/Header/Header";
import { useStores } from "../../../hooks/useStores";

const MyProjectsOverview = (props) => {
  const { id } = useParams();
  const { friendStore } = useStores();
  let foundUsers = false;

  return id ? (
    <section className={`${style.container} ${style.container__bg}`}>
      <ProjectsHeader
        image="vrienden-blackSoft"
        link={ROUTES.MyProjects}
        title="Eiffeltoren"
        color="#FFFFFF"
      />
      <div className={style.wrapper}>
        {friendStore.friends.map((friend) =>
          friend[id]
            ? friend[id].map((url, index) => (
                <div key={`${friend.id}${index}`} className={style.project}>
                  {(foundUsers = true)}
                  <div className={style.project__pictureBox}>
                    <img
                      className={style.project__bar__buttonbox__image}
                      width="240"
                      height="240"
                      src={url}
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
                      {console.log(index)}
                      <Link to={`${ROUTES.MyProjectsDetail}`}>
                        <img
                          src="/assets/icons/postkaartjeTwo.svg"
                          alt="Toevoegen knop"
                        />
                        <p className={style.buttonbox__aantal}>3</p>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            : ""
        )}

        {foundUsers ? (
          ""
        ) : (
          <div className={`${style.NoneFound} ${style.NoneFound__green}`}>
            <p>Je hebt nog geen werkjes gemaakt</p>
          </div>
        )}
        <Link to={ROUTES.MyProjectsDetail} className={style.addProject}>
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
