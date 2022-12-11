//Hooks
import { useProfiles, useMajors } from "../../hooks";

//Icons
import ICON_USER from "/icons/icon-user.svg";
import ICON_UPLOAD from "/icons/icon-upload.svg";

//Style
import style from "./ProfileStudent.module.css";
const ProfileStudent = () => {
    const {
        handleOnChangeProfileStudent,
        studentProfile,
        flowAddStudentProfile,
        profile
    } = useProfiles();
    const { majors } = useMajors();
    const edit = profile !== null;
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        await flowAddStudentProfile();
    }

    return (
        <div className={style.profileForm_area}>
            <form className={style.profileForm} onSubmit={handleOnSubmit}>
                <div className={style.profileImage}>
                    <img className={style.profileImageIcon} src={studentProfile.imagePreview ? studentProfile.imagePreview : ICON_USER} />
                    {
                        !edit ? (
                            <div className={style.profileImageInputSelect}>
                                <label htmlFor="image">
                                    <img src={ICON_UPLOAD} />
                                </label>
                                <input id="image" name="image" type={"file"} hidden={true}
                                    onChange={handleOnChangeProfileStudent}
                                    disabled={edit}
                                />
                            </div>
                        ) : null
                    }
                </div>

                <div className={style.profileDobleInput}>
                    <div className={style.profileInput}>
                        <label>Id</label>
                        <input name="idUniversity" placeholder="Your id..."
                            defaultValue={studentProfile.idUniversity}
                            onChange={handleOnChangeProfileStudent}
                            disabled={edit}
                        />
                    </div>
                    <div className={style.profileInput}>
                        <label>Nombre completo</label>
                        <input name="name" placeholder="Nombre..."
                            defaultValue={studentProfile.name}
                            onChange={handleOnChangeProfileStudent}
                            disabled={edit}
                        />
                    </div>
                </div>

                <div className={style.profileDobleInput}>
                    <div className={style.profileInput}>
                        <label>Carrera</label>
                        <select name="major" onChange={handleOnChangeProfileStudent}
                            disabled={edit}
                        >
                            {
                                edit ? (
                                    majors.map((major, i) => (
                                        <option key={i} value={major._id}>{major.name}</option>
                                    ))
                                ) : (
                                    majors.map((major, i) => (
                                        <option key={i} value={major._id}>{major.name}</option>
                                    ))
                                )
                            }
                            <option key={"-1"} value={"-1"}>--Seleccione una option--</option>
                        </select>
                    </div>

                    <div className={style.profileInput}>
                        <label>Semestre</label>
                        <input name="semester" placeholder="Semester..."
                            defaultValue={studentProfile.semester}
                            onChange={handleOnChangeProfileStudent}
                            disabled={edit}
                        />
                    </div>
                </div>

                <div className={style.profileInput}>
                    <label>Descripción</label>
                    <textarea name="description"
                        defaultValue={studentProfile.description}
                        onChange={handleOnChangeProfileStudent}
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

export default ProfileStudent