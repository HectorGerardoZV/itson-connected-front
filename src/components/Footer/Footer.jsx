import { Link } from "react-router-dom";
import ICON_ITSON from "/icons/logo.svg";
import ICON_FACEBOOK from "/icons/icon-facebook.svg";
import ICON_INSTA from "/icons/icon-instagram.svg";
import ICON_TWITTER from "/icons/icon-twitter.svg";

import style from "./Footer.module.css";
const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footer__logo}>
                <img src={ICON_ITSON} alt="icon-itson" />
            </div>
            <div className={style.footer__social}>
                <a href="https://www.facebook.com/itson.mx" target={"_blank"}>
                <img src={ICON_FACEBOOK} alt="icon-facebook" />
                </a>
                <a href="https://www.instagram.com/itsonoficial/" target={"_blank"}>
                    <img src={ICON_INSTA} alt="icon-instagram" />
                </a>
                <a href="https://twitter.com/itson" target={"_blank"}>
                    <img src={ICON_TWITTER} alt="icon-twitter" />
                </a>
            </div>
        </div>
    );
};

export default Footer;
