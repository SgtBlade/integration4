import React from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import style from "../styles/ProjectsOverview.module.css";
import { ROUTES } from "../../../consts";
import ProjectsHeader from "../ProjectComponents/Header/Header";
import { useStores } from "../../../hooks/useStores";

const FriendsProjectsOverview = (props) => {


  const { id } = useParams();
  const {friendStore} = useStores();
  let foundUsers = false;

  return (
    id ? 
    <section className={style.container}>
      <ProjectsHeader
        image="vrienden-blackSoft"
        link={ROUTES.FriendsProjects}
      />
      <div className={style.wrapper}>
      {friendStore.friends.map((friend) => (
          friend[id] ? 
          friend[id].map((url, index) => (
            
            <div key={`${friend.id}${index}`} className={style.project}>
              {foundUsers = true}
              <div className={style.project__pictureBox}>
                  <img className={style.project__bar__buttonbox__image} width="240" height="240"  src={url} alt="project" />
              </div>
              <div className={style.project__bar}>
                <div className={style.project__bar__autor}>
                    <img
                      className={style.project__bar__image}
                      src="/assets/icons/vrienden-blackSoft.svg"
                      alt="icon"
                    />
                    <p className={style.project__bar__name}>{friend.name}</p>
                </div>
                  <div className={style.project__bar__buttonbox}>
                    {console.log(index)}
                    <Link to={`${ROUTES.Postcards.to}${index}/${friend.id}/${id}`}><img src="/assets/icons/postkaartjeToevoegen.svg" alt="Toevoegen knop"/></Link>
                  </div>
                </div>
            </div>
          ))
          :
          ''
        ))}
        
        {foundUsers ? 
        ''
        :
        <div className={style.NoneFound}>
          <p>Je vrienden hebben hiervan nog geen werkjes gemaakt</p>
        </div>
        }
      </div>
    </section>
    :
    <Redirect to={ROUTES.home}/>
  );
};

export default FriendsProjectsOverview;
