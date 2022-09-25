import { AuthForm } from "../../../components/Index";
import IMG_LOGIN from "/images/img-login-back.svg";

import style from "./Login.module.css";
const Login = () => {
    return (
        <div className={style.login}>
            <div className={style.login__image}>
                <img src={IMG_LOGIN} alt="img-login" />
            </div>
            <AuthForm />
        </div>
    );
};

export default Login;
