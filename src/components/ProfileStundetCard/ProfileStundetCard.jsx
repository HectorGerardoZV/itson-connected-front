

import style from "./ProfileStundetCard.module.css"
const ProfileStundetCard = (props) => {
    const { profile } = props;
    const { image, idUniversity, name } = profile;
    const handleOnClick = () => {

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