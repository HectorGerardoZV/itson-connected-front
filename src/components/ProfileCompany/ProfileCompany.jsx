
//Hooks
import { useProfiles } from "../../hooks";

//Icons
import ICON_USER from "/icons/icon-user.svg";
import ICON_UPLOAD from "/icons/icon-upload.svg";

//Style
import style from "./ProfileCompany.module.css";
const ProfileCompany = () => {
    const {
        handleOnChangeProfileCompany,
        companyProfile,
        flowAddCompanyProfile,
        profile
    } = useProfiles();
    const edit = profile !== null;
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        await flowAddCompanyProfile();
    }
    return (
        <div className={style.profileForm_area}>
            <form className={style.profileForm} onSubmit={handleOnSubmit}>
                <div className={style.profileImage}>
                    <img className={style.profileImageIcon} src={companyProfile.imagePreview ? companyProfile.imagePreview : ICON_USER} />
                    {
                        !edit ? (
                            <div className={style.profileImageInputSelect}>
                                <label htmlFor="image">
                                    <img src={ICON_UPLOAD} />
                                </label>
                                <input id="image" name="image" type={"file"} hidden={true}
                                    onChange={handleOnChangeProfileCompany}
                                    disabled={edit}
                                />
                            </div>
                        ) : null
                    }
                </div>

                <div className={style.profileDobleInput}>
                    <div className={style.profileInput}>
                        <label>Nombre</label>
                        <input name="name" placeholder="Nombre..."
                            defaultValue={companyProfile.name}
                            onChange={handleOnChangeProfileCompany}
                            disabled={edit}
                        />
                    </div>
                    <div className={style.profileInput}>
                        <label>Empleados</label>
                        <input name="employees" placeholder="Empleados..."
                            defaultValue={companyProfile.employees}
                            onChange={handleOnChangeProfileCompany}
                            disabled={edit}
                        />
                    </div>
                </div>

                <div className={style.profileInput}>
                    <label>localización</label>
                    <input name="location" placeholder="localización..."
                        defaultValue={companyProfile.location}
                        onChange={handleOnChangeProfileCompany}
                        disabled={edit}
                    />
                </div>

                <div className={style.profileInput}>
                    <label>Descripción</label>
                    <textarea name="description"
                        defaultValue={companyProfile.description}
                        onChange={handleOnChangeProfileCompany}
                        disabled={edit}>
                    </textarea>
                </div>

                {

                    !edit ? (
                        <div className={style.formActions}>
                            <button className={style.formActionAcept} >Guardar cambios</button>
                        </div>
                    ) : null
                }
            </form>
        </div>
    )
}

export default ProfileCompany