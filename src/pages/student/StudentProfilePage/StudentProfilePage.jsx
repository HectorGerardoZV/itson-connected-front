//Components
import { ProfileStudent } from "../../../components";
//Style
import style from "./StudentProfilePage.module.css";
const StudentProfilePage = () => {
    return (
        <div className={style.formProfile}>
            <h1><span>Mi</span> perfil</h1>
            <ProfileStudent />
        </div>
    )
}

export default StudentProfilePage