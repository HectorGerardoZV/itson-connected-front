import { AuthForm } from "../../../components/Index";
import IMG_LOGIN from "/images/img-login-back.svg";

import style from "./SignUp.module.css";
const SignUp = () => {
    return (
        <div className={style.signUp}>
            <div className={style.signUp__image}>
                <img src={IMG_LOGIN} alt="img-login" />
            </div>
            <AuthForm action={"signup"} />
        </div>
    );
};

export default SignUp;
