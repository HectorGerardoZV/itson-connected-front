import { useEffect } from "react";

import { VacancyCard } from "../../../components/Index";

//Hooks
import { useVacancies } from "../../../hooks";

//Images
import ICON_SEARCH from "/icons/icon-search.svg";

//Style
import "react-calendar/dist/Calendar.css";
import style from "./VacanciesPage.module.css";
const VacanciesPage = () => {
    const { loadVacanciesPage, vacanciesManipulate } = useVacancies();

    useEffect(() => {
        loadVacanciesPage();
    }, [])

    return (
        <section className={style.vacanciesPage}>
            <div className={style.vacancies__filters}>
                <input
                    className={style.inputFilter}
                    type="text"
                    placeholder="Nombre de la vacante..."
                />
                <input
                    className={style.inputFilter}
                    type="text"
                    placeholder="Nombre de la empresa..."
                />
                
                <div className={style.button__filter}>
                    <button>
                        Buscar
                        <img src={ICON_SEARCH} alt="" />
                    </button>
                </div>
            </div>
            <div className={style.line} />

            <section className={style.vacancies__area}>

                {
                    vacanciesManipulate.map((vacancy, index)=>(
                        <VacancyCard 
                            key={index}
                            vacancy={vacancy}
                            vacancyURL={"/student/vacancies"}
                        />
                    ))
                }
            </section>
        </section>
    );
};

export default VacanciesPage;
