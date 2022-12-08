import { useNavigate } from "react-router-dom";
//Hooks
import { useVacancies } from "../../hooks";
//Helpers
import { dateHelpers } from "../../helpers/";
//Icons
import IBM_IMG from "./ibm-img.png";

//Style
import style from "./VacancyCard.module.css";
const VacancyCard = ({ vacancy, vacancyURL }) => {
  let navigate = useNavigate();
  const { hadleSelectAccount } = useVacancies();

  const { _id, created, limit, name, company } = vacancy;
  const handleOnClickVacancy = () => {
    hadleSelectAccount(vacancy);
    navigate(`${vacancyURL}/${_id}`);
  }
  return (
    <div className={style.vacancyCard}>
      <div className={style.vacancyCard__date}>
        <p>{dateHelpers.formateDate(created)}</p>
      </div>
      <div className={style.vacancyCard__info}>
        <div className={style.vacancyCard__img}>
          <img src={IBM_IMG} alt="" />
        </div>

        <div className={style.vacancyCard__title}>
          <p>{name}</p>
        </div>

        <div className={style.vacancyCard__infoVac}>
          <p><span>Empresa</span> - {company?.username}</p>
          <p><span>Limite</span> - {limit}</p>
        </div>

        <button className={style.vacancyCard__button}
          onClick={handleOnClickVacancy}
        >
          Ver vacante
        </button>
      </div>
    </div>
  )
}

export default VacancyCard