import style from "./InputForm.module.css";
const InputForm = (props) => {
    const { label, placeholder, identifier, type, value, handle } = props;
    return (
        <div className={style.inputStyle}>
            <label htmlFor={identifier}>{label}</label>
            <input
                type={type}
                name={identifier}
                id={identifier}
                placeholder={placeholder}
                defaultValue={value}
                onChange={handle}
            />
        </div>
    );
};

export default InputForm;
