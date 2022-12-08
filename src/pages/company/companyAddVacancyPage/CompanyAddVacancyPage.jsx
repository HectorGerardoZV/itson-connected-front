import { useNavigate } from "react-router-dom";
import { useVacancies, useMajors } from "../../../hooks";
import { dateHelpers } from "../../../helpers";
import ICON_COMPANY from "./ibm-img.png";
import { BackPage } from "../../../components";
import style from "./CompanyAddVacancyPage.module.css";
const CompanyAddVacancyPage = () => {
    let navigate = useNavigate();
    const { handleOnChangeVacancy, createAccount, vacancyInfo } = useVacancies();
    const { majors } = useMajors();

    const handleOnCreate = async () => {
        const result = await createAccount();
        if (result) {
            navigate("/company");
        }
    }
    return (
        <section className={style.page}>
            <BackPage
                backURL={"/company"}
                title={"vacante"}
            />
            <section className={style.vacancyInfo}>
                <div className={style.vacancyInfo__image}>
                    <img src={ICON_COMPANY} />
                </div>
                <h3>{dateHelpers.formateDate(new Date())}</h3>

                <div className={style.selectInfo}>
                    <label>Licenciatura de la vacante</label>
                    <select name="major" onChange={handleOnChangeVacancy} defaultValue={vacancyInfo.major}>
                        <option disabled={true} value={"nomajor"}>
                            --Seleccione una licenciatura--
                        </option>
                        {
                            majors.map((major, index) => (
                                <option
                                    key={index}
                                    value={major._id}
                                >
                                    {major.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div className={style.vacancyInfo_primary}>
                    <div className={style.inputInfo}>
                        <label>Nombre de la vacante</label>
                        <input placeholder="Nombre..." name="name"
                            onChange={handleOnChangeVacancy}
                            defaultValue={vacancyInfo.name}
                        />
                    </div>
                    <div className={style.inputInfo}>
                        <label>Limite de vacantes</label>
                        <input placeholder="Limite..." type="number" name="limit"
                            onChange={handleOnChangeVacancy}
                            defaultValue={vacancyInfo.limit}
                        />
                    </div>
                </div>
                <section className={style.vacancyInfo__section}>
                    <div className={style.vacancyInfo__left}>
                        <div className={style.vacancyInfo__card}>
                            <div className={style.vacancyInfo__card_title}>
                                <p>Datos generales</p>
                            </div>
                            <div className={style.vacancyInfo__card_body}>
                                <textarea
                                    name="generalData"
                                    onChange={handleOnChangeVacancy}
                                    defaultValue={vacancyInfo.generalData}
                                >

                                </textarea>
                            </div>
                        </div>
                        <div className={style.vacancyInfo__card}>
                            <div className={style.vacancyInfo__card_title}>
                                <p>Actividades a realizar</p>
                            </div>
                            <div className={style.vacancyInfo__card_body}>
                                <textarea
                                    name="activities"
                                    onChange={handleOnChangeVacancy}
                                    defaultValue={vacancyInfo.activities}
                                >

                                </textarea>
                            </div>
                        </div>

                    </div>

                    <div className={style.vacancyInfo__right}>
                        <div className={style.vacancyInfo__card}>
                            <div className={style.vacancyInfo__card_title}>
                                <p>Te ofrecemos</p>
                            </div>
                            <div className={style.vacancyInfo__card_body}>
                                <textarea
                                    name="offer"
                                    onChange={handleOnChangeVacancy}
                                    defaultValue={vacancyInfo.offer}
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className={style.vacancyInfo__card}>
                            <div className={style.vacancyInfo__card_title}>
                                <p>Requisitos</p>
                            </div>
                            <div className={style.vacancyInfo__card_body}>
                                <textarea
                                    name="requirements"
                                    onChange={handleOnChangeVacancy}
                                    defaultValue={vacancyInfo.requeriments}
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className={style.apply}>
                            <button onClick={handleOnCreate}>Crear</button>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default CompanyAddVacancyPage