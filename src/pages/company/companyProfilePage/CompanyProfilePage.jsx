
import {ProfileCompany} from "../../../components";
//Style
import style from "./CompanyProfilePage.module.css";
const CompanyProfilePage = () => {
    return (
        <div className={style.formProfile}>
            <h1><span>Mi</span> perfil</h1>
            <ProfileCompany/>
        </div>
    )
}

export default CompanyProfilePage