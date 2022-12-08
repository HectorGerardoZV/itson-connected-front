import IMG_STEP_1 from "/images/img-login.svg";
import IMG_STEP_21 from "/images/img-step-student.svg";
import IMG_STEP_22 from "/images/img-step-company.svg";
import IMG_STEP_3 from "/images/img-users-wait.svg";

import style from "./Step.module.css";
const Step = ({ step }) => {
    let stepItem;
    const values = {
        step1: {
            step: 1,
            img: IMG_STEP_1,
            description:
                "Créate o inicia sesión, ya sea como estudiante o como empresa.",
        },
        step21: {
            step: 2,
            img: IMG_STEP_21,
            description:
                "Como estudiante, busca vacantes de empleo relacionadas con tu carrera universitaria.",
        },
        step22: {
            step: 2,
            img: IMG_STEP_22,
            description:
                "Como empresa, crea vacantes de trabajo en cuestión de segundos.",
        },
        step3: {
            step: 3,
            img: IMG_STEP_3,
            description:
                "Empresas, esperen a sus postulantes y estudiantes, esperen a ser contactados.",
        },
    };

    if (step === "1") stepItem = values.step1;
    else if (step === "21") stepItem = values.step21;
    else if (step === "22") stepItem = values.step22;
    else if (step === "3") stepItem = values.step3;

    return (
        <div className={style.step}>
            <h3>{stepItem.step}</h3>
            <div className={style.step__img}>
                <img src={stepItem.img} alt="img-step" />
            </div>
            <div className={style.circle}></div>
            <p>{stepItem.description}</p>
        </div>
    );
};

export default Step;
