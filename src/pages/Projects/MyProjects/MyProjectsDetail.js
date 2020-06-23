import React from "react";
//import { useParams, Redirect } from "react-router-dom";
import style from "../styles/ProjectsDetail.module.css";
import { ROUTES } from "../../../consts";
import ProjectsHeader from "../ProjectComponents/Header/Header";
//import { useStores } from "../../../hooks/useStores";

const MyProjectsDetail = (props) => {
  //const { id } = useParams();
  //   const { friendStore } = useStores();
  //   let foundUsers = false;
  //src="../../../assets/postcards/France/country.svg"

  return (
    <section className={`${style.container} ${style.container__bg}`}>
      <div className={style.container__header}>
        <ProjectsHeader
          image="vrienden-blackSoft"
          link={ROUTES.MyProjectsOverview}
          title="Eiffeltoren"
          color="#FFFFFF"
        />
      </div>
      <div className={style.wrapper}>
        <div className={style.project}>
          <img
            src="../../../assets/illustraties/demo.svg"
            className={style.project__image}
            alt=""
          />
        </div>
        <div className={style.project__postkaartjes}>
          <div className={style.project__postkaartjes__wrapper}>
            <img
              src="../../../assets/postcards/France/country.svg"
              className={style.postkaartjes__image}
              alt=""
            />
            <img
              src="../../../assets/postcards/France/sticker1.svg"
              className={style.postkaartjes__sticker}
              alt=""
            />
          </div>
          <div className={style.project__postkaartjes__wrapper}>
            <img
              src="../../../assets/postcards/France/country.svg"
              className={style.postkaartjes__image}
              alt=""
            />
            <img
              src="../../../assets/postcards/France/sticker1.svg"
              className={style.postkaartjes__sticker}
              alt=""
            />
          </div>
          <div className={style.project__postkaartjes__wrapper}>
            <img
              src="../../../assets/postcards/France/country.svg"
              className={style.postkaartjes__image}
              alt=""
            />
            <img
              src="../../../assets/postcards/France/sticker1.svg"
              className={style.postkaartjes__sticker}
              alt=""
            />
          </div>
          <div className={style.project__postkaartjes__wrapper}>
            <img
              src="../../../assets/postcards/France/country.svg"
              className={style.postkaartjes__image}
              alt=""
            />
            <img
              src="../../../assets/postcards/France/sticker1.svg"
              className={style.postkaartjes__sticker}
              alt=""
            />
          </div>
          <div className={style.project__postkaartjes__wrapper}>
            <img
              src="../../../assets/postcards/France/country.svg"
              className={style.postkaartjes__image}
              alt=""
            />
            <img
              src="../../../assets/postcards/France/sticker1.svg"
              className={style.postkaartjes__sticker}
              alt=""
            />
          </div>
          <div className={style.project__postkaartjes__wrapper}>
            <img
              src="../../../assets/postcards/France/country.svg"
              className={style.postkaartjes__image}
              alt=""
            />
            <img
              src="../../../assets/postcards/France/sticker1.svg"
              className={style.postkaartjes__sticker}
              alt=""
            />
          </div>
          <div className={style.project__postkaartjes__wrapper}>
            <img
              src="../../../assets/postcards/France/country.svg"
              className={style.postkaartjes__image}
              alt=""
            />
            <img
              src="../../../assets/postcards/France/sticker1.svg"
              className={style.postkaartjes__sticker}
              alt=""
            />
          </div>
          <div className={style.project__postkaartjes__wrapper}>
            <img
              src="../../../assets/postcards/France/country.svg"
              className={style.postkaartjes__image}
              alt=""
            />
            <img
              src="../../../assets/postcards/France/sticker1.svg"
              className={style.postkaartjes__sticker}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    // ) : ( // <Redirect to={ROUTES.home} />
  );
};

export default MyProjectsDetail;
