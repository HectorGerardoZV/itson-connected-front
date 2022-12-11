import { Link } from "react-router-dom";
import LogoPNG from "/logo-main.png";

import style from "./HeaderAppAdmin.module.css";
const HeaderAppAdmin = () => {
    return (
        <header className={style.header}>
            <div className={style.header__logo}>
                <img src={LogoPNG} alt="logo-app" />
            </div>
            <div className={style.header__navegation}>
                <Link to={"/company/myVacancies"}>Mis vacantes</Link>
                <Link to={"/company/myProfile"}>Mi cuenta</Link>
                <Link to={"/"}>Cerrar sesion</Link>
            </div>
            <div className={style.header__userArea}></div>
        </header>
    )
}

export default HeaderAppAdmin;