import IMAGE_STUDENT from "/images/img-estudent-selection.svg";
import IMAGE_COMPANY from "/images/img-company-selection.svg";

import style from "./SelectionUser.module.css"
const SelectionUser = () => {
    return (
        <div className={style.selectionUser}>
            <h2><span className={style.importantText}>Registrarse</span> como</h2>
            <div className={style.selectionUser__options}>
                <div className={style.selectionUser__option}>
                    <img src={IMAGE_STUDENT} alt="student-selection" />
                    <button>Estudiante</button>
                </div>
                <div className={style.selectionUser__option}>
                    <img src={IMAGE_COMPANY} alt="company-selection" />
                    <button>Empresa</button>
                </div>
            </div>
        </div>
    );
};

export default SelectionUser;
