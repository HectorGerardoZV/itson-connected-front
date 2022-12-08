import PropTypes from "prop-types";

//Style
import style from "./InfoCard.module.css";
const InfoCard = ({ children }) => {
    return (
        <div className={style.infoCard}>
            <div className={style.infoCard__header}>
                <p>{title}</p>
            </div>
            <div className={style.infoCard__body}>
                {children}
            </div>
        </div>
    )
}



export default InfoCard