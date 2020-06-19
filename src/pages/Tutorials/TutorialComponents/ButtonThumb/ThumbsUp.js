import React from "react";
import style from "./ThumbsUp.module.css";

const ThumbsUp = (props) => {
    return (
        <div className={style.thumbsupp} onClick={props.onClick}>
            <svg className={style.thumbsupp__image}>
                <path
                d="M0 22.996H4.54545V9.79603H0V22.996ZM25 10.896C24.9982 10.3131 24.7582 9.75452 24.3323 9.34232C23.9065 8.93011 23.3295 8.69777 22.7273 8.69603H15.5568L16.6364 3.66903L16.6705 3.31703C16.6694 2.87969 16.4897 2.46051 16.1705 2.15103L14.9659 0.996033L7.48864 8.24503C7.275 8.44671 7.10553 8.688 6.99033 8.95447C6.87514 9.22095 6.81659 9.50716 6.81818 9.79603V20.796C6.81998 21.379 7.06 21.9375 7.48583 22.3497C7.91166 22.7619 8.4887 22.9943 9.09091 22.996H19.3182C19.7647 22.9975 20.2017 22.8709 20.5739 22.632C20.9461 22.3931 21.2367 22.0528 21.4091 21.654L24.8409 13.899C24.9459 13.6435 24.9999 13.371 25 13.096V10.995L24.9886 10.984L25 10.896Z"
                fill="white"
                />
            </svg>
        </div>
    );

}

export default ThumbsUp;