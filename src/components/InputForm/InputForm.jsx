
import style from "./InputForm.module.css";
const InputForm = (props) => {
    const {label, placeholder, identifier, type} = props;
  return (
    <div className={style.inputStyle}>
        <label htmlFor={identifier}>{label}</label>
        <input type={type} name={identifier} id={identifier} placeholder={placeholder} />
    </div>
  )
}

export default InputForm