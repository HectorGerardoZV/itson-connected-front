import IMG_LOGIN_FORM from "/images/img-login-form.svg";
import { useUserSelection } from "../../hooks/Index";
import { InputForm } from "../Index";

import style from "./AuthForm.module.css";
const AuthForm = ({ action }) => {
    const { userTypeSelection } = useUserSelection();
    const values = {
        title:
            action === "login" ? (
                <h4>Iniciar sesión</h4>
            ) : (
                <h4>
                    Crear cuenta -{" "}
                    <span className={style.importantText}>
                        {userTypeSelection}
                    </span>
                </h4>
            ),
        buttonSubmit: action === "login" ? "Iniciar sesión" : "Crear cuenta",
    };

    return (
        <div>
            <form className={style.authForm}>
                <fieldset className={style.authForm__fieldset}>
                    <div className={style.authForm__top}>
                        <img src={IMG_LOGIN_FORM} alt="" />
                        {values.title}
                    </div>
                    <div className={style.authForm__inputs}>
                        {action === "signup" ? (
                            <InputForm
                                label="Correo electrónico"
                                placeholder="Tu correo electrónico..."
                                identifier="email"
                                type="email"
                            />
                        ) : null}
                        <InputForm
                            label="Usuario"
                            placeholder="Tu usuario..."
                            identifier="username"
                            type="text"
                        />

                        {action === "login" ? (
                            <InputForm
                                label="Contraseña"
                                placeholder="Tu contraseña..."
                                identifier="password"
                                type="password"
                            />
                        ) : (
                            <div className={style.authForm__inputs__passwords}>
                                <InputForm
                                    label="Contraseña"
                                    placeholder="Tu contraseña..."
                                    identifier="password"
                                    type="password"
                                />
                                <InputForm
                                    label="Repetir contraseña"
                                    placeholder="Repite la contraseña..."
                                    identifier="rep_password"
                                    type="password"
                                />
                            </div>
                        )}
                    </div>

                    <div className={style.submit}>
                        <input type="submit" value={values.buttonSubmit} />
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default AuthForm;
