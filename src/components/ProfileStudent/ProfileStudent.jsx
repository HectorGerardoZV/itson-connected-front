
//Icons
import ICON_USER from "/icons/icon-user.svg";

//Style
import style from "./ProfileStudent.module.css";
const ProfileStudent = () => {
    return (
        <div>
            <form className={style.profileForm}>
                <div className={style.profileImage}>
                    <img src={ICON_USER} />
                </div>

                <div className={style.profileDobleInput}>
                    <div className={style.profileInput}>
                        <label>Id</label>
                        <input name="idUniversity" placeholder="Your id..." />
                    </div>
                    <div className={style.profileInput}>
                        <label>Nombre completo</label>
                        <input name="name" placeholder="Nombre..." />
                    </div>
                </div>
                
                <div className={style.profileDobleInput}>
                    <div className={style.profileInput}>
                        <label>Id</label>
                        <input name="idUniversity" placeholder="Your id..." />
                    </div>
                    <div className={style.profileInput}>
                        <label>Nombre completo</label>
                        <input name="name" placeholder="Nombre..." />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProfileStudent