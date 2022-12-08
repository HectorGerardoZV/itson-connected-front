import IMG_MAP from "/images/img-map.svg";
import IMG_FRIEND from "/images/img-friend.svg";
import IMG_WAIT from "/images/img-wait.svg";

import style from "./Propose.module.css";
const Propose = ({ option }) => {
    const values = {
        option1: {
            img: IMG_MAP,
            title: "Calidad",
            description: (
                <p>
                    La prioridad de{" "}
                    <span className={style.importantText}>ITSON-CONNECTED</span>{" "}
                    es proveer de profesionales de{" "}
                    <span className={style.importantText}>calidad</span>, de
                    esta manera logrando poner el nombre de ITSON en mercados{" "}
                    <span className={style.importantText}>internacionales</span>
                    .
                </p>
            ),
        },
        option2: {
            img: IMG_FRIEND,
            title: "Oportunidad",
            description: (
                <p>
                    <span className={style.importantText}>ITSON-CONNECTED</span>{" "}
                    busca darles oportunidades a los{" "}
                    <span className={style.importantText}>estudiantes </span>
                    mediante la aplicación,{" "}
                    <span className={style.importantText}>
                        dando confianza y fidelidad
                    </span>{" "}
                    en su proceso laboral.
                </p>
            ),
        },
        option3: {
            img: IMG_WAIT,
            title: "Amistad",
            description: (
                <p>
                    <span className={style.importantText}>ITSON-CONNECTED</span>{" "}
                    busca crear una amistad fuerte entre la
                    <span className={style.importantText}> universidad y la empresa</span>
                    , sabemos que en medio de la relación se encuentran los
                    valiosos alumnos y eso queremos preservar.
                </p>
            ),
        },
    };

    return (
        <div className={style.propose}>
            <div className={style.propose__img}>
                <img src={values[option].img} alt="img-propose" />
            </div>
            <div className={style.circle}></div>
            <h3>{values[option].title}</h3>
            {values[option].description}
        </div>
    );
};

export default Propose;
