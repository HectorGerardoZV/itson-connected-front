import { Link } from "react-router-dom";

//Images
import LogoPNG from "/logo-main.png";
import IconUser from "/icons/icon-user.svg";
import IconConnected from "/icons/icon-connected.svg";

//Style
import style from "./HeaderApp.module.css";
const HeaderApp = () => {
    return (
        <header className={style.header}>
            <div className={style.header__logo}>
                <img src={LogoPNG} alt="logo-app" />
            </div>

            <div className={style.header__navegation}>
                <Link to={"/student"}>Inicio</Link>
                <Link to={"/student/vacancies"}>Vacantes</Link>
                <Link to={"/student/companies"}>Empresas</Link>
            </div>

            <div className={style.header__userArea}>
                <div className={style.header__userIcon}>
                    <img className={style.userIcon} src={IconUser} alt="icon-user" />
                    <img className={style.userIcon__connected} src={IconConnected} alt="icon-user" />
                </div>
            </div>
        </header>
    )
}

export default HeaderApp