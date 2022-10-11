
//Components
import { VacancyCard } from "../../../components/Index";

//Images
import IMG_HOME from "/images/img-home.svg";

//Style
import style from "./HomeStudent.module.css";
const HomeStudent = () => {
  return (
    <div>
      <div className={style.home__image}>
        <img src={IMG_HOME} alt="" />
      </div>

      <section className={style.home__vacancies}>
        <h2><span>Nuevas</span> Vacantes</h2>

        <div className={style.vacancies__section}>
          <VacancyCard />
          <VacancyCard />
          <VacancyCard />
        </div>
        <div className={style.home__buttonVacancies}>
          <button>Ver vacantes</button>
        </div>
      </section>

    </div>
  )
}

export default HomeStudent