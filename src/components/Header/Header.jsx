import { useState } from "react";
import { Link } from "react-router-dom";
//Images
import Logo from "/icons/logo-main.svg";
import LogoPNG from "/logo-main.png";

//Style
import style from "./Header.module.css";
const Header = () => {
    const [linkSelected, setLinkSelected] = useState(false);

    const select = () => {
        setLinkSelected(true);
    };
    const leave = () => {
        setLinkSelected(false);
    };
    return (
        <header className={style.header}>
            <Link to={"/"}>
                <img src={LogoPNG} alt="itson-connected-logo" className={style.header__image} />
            </Link>
            <nav className={style.header__nav}>
                <Link
                    to={"/auth"}
                    className={style.nav__link}
                    onMouseOver={select}
                    onMouseLeave={leave}
                >
                    Iniciar sesión
                </Link>
                <div
                    className={`${style.nav__line} ${linkSelected? style.nav__quitLine : ""}`}
                ></div>
                <Link
                    to={"/auth/selection"}
                    className={style.nav__link}
                    onMouseOver={select}
                    onMouseLeave={leave}
                >
                    Crear cuenta
                </Link>
            </nav>
        </header>
    );
};

export default Header;
