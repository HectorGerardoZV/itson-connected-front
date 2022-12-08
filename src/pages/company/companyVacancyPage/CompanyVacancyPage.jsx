import ICON_COMPANY from "./ibm-img.png";
//Components
import { BackPage } from "../../../components";
//Hooks
import { useVacancies } from "../../../hooks";
//Helpers
import { dateHelpers } from "../../../helpers";
//Style
import style from "./CompanyVacancyPage.module.css";
const CompanyVacancyPage = () => {
    const { vacancy } = useVacancies();
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
                <h3>{dateHelpers.formateDate(vacancy.created)}</h3>
                <section className={style.vacancyInfo__section}>

                    <div className={style.vacancyInfo__left}>
                        <div className={style.vacancyInfo__card}>
                            <div className={style.vacancyInfo__card_title}>
                                <p>Datos generales</p>
                            </div>
                            <div className={style.vacancyInfo__card_body}>
                                <p><span>Empresa:</span> {vacancy.company.username}</p>
                                <p><span>Puesto: </span> {vacancy.name}</p>
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
                       
                    </div>
                </section>
            </section>
        </section>
    )
}

export default CompanyVacancyPage