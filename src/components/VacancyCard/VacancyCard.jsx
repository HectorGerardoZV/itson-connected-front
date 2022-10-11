
//Icons
import IBM_IMG from "./ibm-img.png";

//Style
import style from "./VacancyCard.module.css";
const VacancyCard = (props) => {

  const { date, image, title, vacancies, company } = props;
  return (
    <div className={style.vacancyCard}>
      <div className={style.vacancyCard__date}>
        <p>11/01/2022</p>
      </div>
      <div className={style.vacancyCard__info}>
        <div className={style.vacancyCard__img}>
          <img src={IBM_IMG} alt="" />
        </div>

        <div className={style.vacancyCard__title}>
          <p>Desarrollador de software</p>
        </div>

        <div className={style.vacancyCard__infoVac}>
          <p><span>Empresa</span> - IBM</p>
          <p><span>Vacancies</span> - 10</p>
        </div>

        <button className={style.vacancyCard__button}>Ver vacante</button>
      </div>
    </div>
  )
}

export default VacancyCard