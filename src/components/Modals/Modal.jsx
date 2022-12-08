//Modals
import ModalVacancy from "./ModalVacancy/ModalVacancy";

//Style
import style from "./Modal.module.css";
const Modal = () => {
    const Modals={
        vacancyDesition:<ModalVacancy/>
    }
  return (
    <div className={style.modal}>

    </div>
  )
}

export default Modal