import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
//Icons
import ICON_BACK from "/icons/icon-back.svg";
//Style
import style from "./BackPage.module.css";
const BackPage = (props) => {
    const { backURL, title } = props;
    let navigate = useNavigate();
    const handleOnClick = () => {
        navigate(backURL);
    }
    return (
        <div className={style.backPage__section}>
            <div className={style.backPage}>
                <button onClick={handleOnClick}>
                    <img src={ICON_BACK} />
                    Back
                </button>
                <p className={style.title}>Información de la <span>{title}</span></p>
                <></>
            </div>
            <div className={style.backPage__border}></div>
        </div>
    )
}

BackPage.propTypes = {
    backURL: PropTypes.string,
    title: PropTypes.string
}


export default BackPage