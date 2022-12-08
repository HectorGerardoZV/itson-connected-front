import { useState } from "react";
import { Link } from "react-router-dom";

//Images
import LogoPNG from "/logo-main.png";
import IconUser from "/icons/icon-user.svg";
import IconConnected from "/icons/icon-connected.svg";

//Style
import style from "./HeaderApp.module.css";
const HeaderApp = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleOnOpenModal = (state) => {
        setIsMenuOpen(state);
    }

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
                <div className={style.header__userIcon}
                    onClick={() => handleOnOpenModal(!isMenuOpen)}
                >
                    <img className={style.userIcon} src={IconUser} alt="icon-user" />
                    <img className={style.userIcon__connected} src={IconConnected} alt="icon-user" />
                </div>
                {
                    isMenuOpen ? (
                        <div className={style.header__userMenu}>
                            <Link to={"/student/myProfile"}>Mi perfil</Link>
                            <Link to={"/student/MyVacancies"}>Mis vacantes</Link>
                            <Link to={"/"}>Salir</Link>
                        </div>
                    ) : null
                }

            </div>
        </header>
    )
}

export default HeaderApp