import { useState } from "react";
import { Link } from "react-router-dom";

//Hooks
import { useProfiles } from "../../hooks";

//Images
import LogoPNG from "/logo-main.png";
import IconUser from "/icons/icon-user.svg";
import IconConnected from "/icons/icon-connected.svg";

//Style
import style from "./HeaderApp.module.css";
const HeaderApp = () => {
    const { profile } = useProfiles();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleOnOpenModal = (state) => {
        setIsMenuOpen(state);
    }

    return (
        <header className={style.header}>
            <div className={style.header__logo}>
                <Link to={"/student"}>
                    <img src={LogoPNG} alt="logo-app" />
                </Link>
            </div>

            <div className={style.header__navegation}>
                <Link to={"/student"}>Inicio</Link>
                <Link to={"/student/vacancies"}>Vacantes</Link>
                <Link to={"/student/vacancies"}>Empresas</Link>
            </div>

            <div className={style.header__userArea}>
                <div className={style.header__userIcon}
                    onClick={() => handleOnOpenModal(!isMenuOpen)}
                >
                    <img className={style.userIcon} src={profile !== null ? profile.image : IconUser} alt="icon-user" />
                    <img className={style.userIcon__connected} src={IconConnected} alt="icon-user" />
                </div>
                {
                    isMenuOpen ? (
                        <div className={style.header__userMenu}>
                            <Link to={"/student/myProfile"}>Mi perfil</Link>
                            <Link to={"/"}>Salir</Link>
                        </div>
                    ) : null
                }

            </div>
        </header>
    )
}

export default HeaderApp