import IMG_LOGIN_FORM from "/images/img-login-form.svg";

import style from "./AuthForm.module.css";
const AuthForm = () => {
    return (
        <div>
            <form className={style.authForm}>
                <fieldset className={style.authForm__fieldset}>
                    <div className={style.authForm__top}>
                        <img src={IMG_LOGIN_FORM} alt="" />
                        <h4>Iniciar sesión</h4>
                    </div>
                    <div className={style.authForm__inputs}>
                        <div className={style.authForm__input}>
                            <label htmlFor="username">Usuario</label>
                            <input
                                name="username"
                                id="username"
                                type="text"
                                placeholder="Tu usuario..."
                            />
                        </div>
                        <div className={style.authForm__input}>
                            <label htmlFor="password">Contraseña</label>
                            <input
                                name="password"
                                id="password"
                                type="text"
                                placeholder="Tu usuario..."
                            />
                        </div>
                    </div>

                    <div className={style.submit}>
                        <input type="submit" value={"Iniciar sesión"} />
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default AuthForm;
