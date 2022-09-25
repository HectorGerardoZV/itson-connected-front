import { useNavigate } from "react-router-dom";
import IMAGE_STUDENT from "/images/img-estudent-selection.svg";
import IMAGE_COMPANY from "/images/img-company-selection.svg";
import { useUserSelection } from "../../../hooks/Index";

import style from "./SelectionUser.module.css";
const SelectionUser = () => {
    const {handleUserTypeSelection} = useUserSelection();
    let navigate = useNavigate();
    const navigateToSignUp = (type) => {
        selectUserType(type);
        navigate("../signup");
    };
    const selectUserType = (type)=>{
        handleUserTypeSelection(type);
    }
    return (
        <div className={style.selectionUser}>
            <h2>
                <span className={style.importantText}>Registrarse</span> como
            </h2>
            <div className={style.selectionUser__options}>
                <div className={style.selectionUser__option}>
                    <img src={IMAGE_STUDENT} alt="student-selection" />
                    <button onClick={()=>navigateToSignUp("student")}>Estudiante</button>
                </div>
                <div className={style.selectionUser__option}>
                    <img src={IMAGE_COMPANY} alt="company-selection" />
                    <button onClick={()=>navigateToSignUp("company")}>Empresa</button>
                </div>
            </div>
        </div>
    );
};

export default SelectionUser;
