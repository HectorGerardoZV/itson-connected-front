
//Components
import { BackPage } from "../../../components";
//Hooks
import { useVacancies } from "../../../hooks";
//Helpers
import { dateHelpers } from "../../../helpers";
//Icons
import ICON_COMPANY from "./ibm-img.png";
//Style
import style from "./VacancyPage.module.css";
const VacancyPage = () => {
    const { vacancy: vacancyFound, addUserAplication } = useVacancies();
    const { vacancy } = vacancyFound
    return (
        <section className={style.page}>
            <BackPage
                backURL={"/student/vacancies"}
                title={"vacante"}
            />
            <section className={style.vacancyInfo}>
                <div className={style.vacancyInfo__image}>
                    <img src={vacancy.company.image} />
                </div>
                <h3>{dateHelpers.formateDate(vacancy.created)}</h3>
                <p className={style.vacancyTitle}>{vacancy.name}</p>
                <section className={style.vacancyInfo__section}>

                    <div className={style.vacancyInfo__left}>
                        <div className={style.vacancyInfo__card}>
                            <div className={style.vacancyInfo__card_title}>
                                <p>Datos generales</p>
                            </div>
                            <div className={style.vacancyInfo__card_body}>
                                <textarea disabled={true} defaultValue={vacancy.generalData}></textarea>
                            </div>
                        </div>
                        <div className={style.vacancyInfo__card}>
                            <div className={style.vacancyInfo__card_title}>
                                <p>Actividades a realizar</p>
                            </div>
                            <div className={style.vacancyInfo__card_body}>
                                <textarea disabled={true} defaultValue={vacancy.activities}></textarea>
                            </div>
                        </div>
                        <div className={style.vacancyInfo__card}>
                            <div className={style.vacancyInfo__card_title}>
                                <p>Te ofrecemos</p>
                            </div>
                            <div className={style.vacancyInfo__card_body}>
                                <textarea disabled={true} defaultValue={vacancy.offer}></textarea>
                            </div>
                        </div>
                    </div>

                    <div className={style.vacancyInfo__right}>
                        <div className={style.vacancyInfo__card}>
                            <div className={style.vacancyInfo__card_title}>
                                <p>Requisitos</p>
                            </div>
                            <div className={style.vacancyInfo__card_body}>
                                <textarea disabled={true} defaultValue={vacancy.requirements}>
                                </textarea>
                            </div>
                        </div>
                        <div className={style.apply}>
                            <button onClick={addUserAplication}>Postularme</button>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default VacancyPage