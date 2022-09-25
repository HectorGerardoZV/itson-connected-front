import IMG_LOGIN_FORM from "/images/img-login-form.svg";
import { useUserSelection } from "../../hooks/Index";
import { InputForm } from "../Index";
import { useAuthentication } from "../../hooks/Index";
import { useNavigate } from "react-router-dom";

import style from "./AuthForm.module.css";
const AuthForm = ({ action }) => {
    let navigate = useNavigate();
    const {
        signupInfo,
        handleOnChangeFormInput,
        handleLogin,
        handleCreateAccout,
    } = useAuthentication();
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

    const handleOnChangeInput = (e) => {
        const { value, name } = e.target;
        handleOnChangeFormInput({
            ...signupInfo,
            [name.trim().toLowerCase()]: value.trim().toLowerCase(),
        });
    };
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result;
        if (action === "login") {
            result = await handleLogin();
            if (result.token) {
                setTimeout(() => {
                    navigate("/student");
                }, 1500);
            }
        } else if (action === "signup") {
            result = await handleCreateAccout();

            if (result) {
                setTimeout(() => {
                    navigate("/auth");
                }, 1500);
            }
        }
    };

    return (
        <div>
            <form className={style.authForm} onSubmit={handleOnSubmit}>
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
                                value={signupInfo.email}
                                handle={handleOnChangeInput}
                            />
                        ) : null}
                        <InputForm
                            label="Usuario"
                            placeholder="Tu usuario..."
                            identifier="username"
                            type="text"
                            value={signupInfo.username}
                            handle={handleOnChangeInput}
                        />

                        {action === "login" ? (
                            <InputForm
                                label="Contraseña"
                                placeholder="Tu contraseña..."
                                identifier="password"
                                type="password"
                                value={signupInfo.password}
                                handle={handleOnChangeInput}
                            />
                        ) : (
                            <div className={style.authForm__inputs__passwords}>
                                <InputForm
                                    label="Contraseña"
                                    placeholder="Tu contraseña..."
                                    identifier="password"
                                    type="password"
                                    value={signupInfo.password}
                                    handle={handleOnChangeInput}
                                />
                                <InputForm
                                    label="Repetir contraseña"
                                    placeholder="Repite la contraseña..."
                                    identifier="rep_password"
                                    type="password"
                                    value={signupInfo.rep_password}
                                    handle={handleOnChangeInput}
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
