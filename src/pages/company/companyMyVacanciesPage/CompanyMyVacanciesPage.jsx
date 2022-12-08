import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
//Components
import { VacancyCard } from "../../../components";
//Hooks
import { useVacancies } from "../../../hooks";
//Icons
import ADD_BUTTON from "/icons/icon-add-new.svg"
//Style
import style from "./CompanyMyVacanciesPage.module.css";
const CompanyMyVacanciesPage = () => {
    let navigate = useNavigate();
    const { handleMyVacancies, vacanciesManipulate } = useVacancies();

    const handleOnClick = ()=>{
        navigate("/company/myVacancies/add");
    }
    useEffect(() => {
        handleMyVacancies();
    }, []);

    return (
        <section className={style.myVacanciesPage}>
            <div className={style.myVacanciesFilters}>
                <input
                    placeholder="Nombre de la vacante..."
                />
                <button onClick={handleOnClick}>
                    <img src={ADD_BUTTON} />
                </button>
            </div>
            <div className={style.line}></div>

            <div className={style.vacancies}>
                {
                    vacanciesManipulate.map((vacancy, index) => (
                        <VacancyCard
                            key={index}
                            vacancy={vacancy}
                            vacancyURL={"/company/myVacancies"}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default CompanyMyVacanciesPage