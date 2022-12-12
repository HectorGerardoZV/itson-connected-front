
import {useModal, useVacancies} from "../../hooks";
import style from "./ProfileStundetCard.module.css"
const ProfileStundetCard = (props) => {
    const {handleSelectUserProfile} = useVacancies();
    const {handleOnChangeModalProfile} = useModal();
    const { profile } = props;
    const { image, idUniversity, name } = profile;
    const handleOnClick = () => {
        handleSelectUserProfile(profile);
        handleOnChangeModalProfile(true);
    }

    return (
        <div className={style.studentCard}>
            <div className={style.studetCard__img}>
                <img src={image} />
            </div>
            <div className={style.studentCard__content}>
                <h3>ID: <span>{idUniversity}</span></h3>
                <p>Nombre: <span>{name}</span></p>
            </div>
            <div className={style.studentCard__actions}>
                <button onClick={handleOnClick}>Ver perfil</button>
            </div>
        </div>
    )
}

export default ProfileStundetCard