import { useEffect } from "react";

//Components
import { VacancyCard } from "../../../components/Index";
//Hooks
import { useVacancies } from "../../../hooks";
//Images
import IMG_HOME from "/images/img-home.svg";

//Style
import style from "./HomeStudent.module.css";
const HomeStudent = () => {
  const { vacancies, loadVacanciesPage } = useVacancies();
  let lastThreeVacancies = [...vacancies];
  lastThreeVacancies.length = 3;

  useEffect(() => {
    loadVacanciesPage();
  }, [])
  return (
    <div className={style.page}>
      <div className={style.home__image}>
        <img src={IMG_HOME} alt="" />
      </div>

      <section className={style.home__vacancies}>
        <h2><span>Nuevas</span> Vacantes</h2>

        <div className={style.vacancies__section}>
          {
            lastThreeVacancies.map((vacancy, index) => {
              if (vacancy) {
                return (
                  <VacancyCard
                    key={index}
                    vacancy={vacancy}
                  />
                )
              }
            })
          }
        </div>
        <div className={style.home__buttonVacancies}>
          <button>Ver vacantes</button>
        </div>
      </section>

    </div>
  )
}

export default HomeStudent