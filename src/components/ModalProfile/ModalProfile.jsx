
import { useModal, useVacancies } from "../../hooks";
import style from "./ModalProfile.module.css";
const ModalProfile = () => {
    const { handleOnChangeModalProfile } = useModal();
    const { userProfileSelected } = useVacancies();
    return (
        <div className={style.modal}>
            <div className={style.modalSection}>
                <div className={style.profileImage}>
                    <img src={userProfileSelected.image} />
                </div>

                <div className={style.profileInfoSections}>
                    <div className={style.profileInfo}>
                        <div className={style.profileData}>
                            <p>ID</p>
                            <p>{userProfileSelected.id}</p>
                        </div>
                        <div className={style.profileData}>
                            <p>nombre</p>
                            <p>{userProfileSelected.name}</p>
                        </div>
                        <div className={style.profileData}>
                            <p>Semestre</p>
                            <p>{userProfileSelected.semester}</p>
                        </div>
                    </div>
                    <div className={style.profileData}>
                        <p>Descripcion</p>
                        <textarea disabled={true} value={userProfileSelected.description}></textarea>
                    </div>
                </div>
                <div className={style.modalActions}>
                    <button onClick={() => handleOnChangeModalProfile(false)}>Cerrar</button>
                </div>
            </div>
        </div>
    )
}

export default ModalProfile