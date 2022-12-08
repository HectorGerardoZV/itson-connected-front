import { createContext, useState } from "react";
import { axiosBackend, backendEndpoints } from "../config/AxiosHelper";
import useUserSelection from "../hooks/useUserSelection";
import { toast } from "react-toastify";
import { authAPI } from "../api";

const AuthenticationContext = createContext();
const AuthenticationProvider = ({ children }) => {
    const { userTypeSelection } = useUserSelection();
    const [authValues, setAuthValues] = useState({
        signupInfo: {
            email: "",
            username: "",
            password: "",
            rep_password: "",
        },
        user: localStorage.getItem("userLoged") ? JSON.parse(localStorage.getItem("userLoged")) : null
    });
    const handleOnChangeFormInput = (e) => {
        const { value, name } = e.target;
        setAuthValues({
            ...authValues,
            signupInfo: {
                ...authValues.signupInfo,
                [name]: value
            }
        });
    };
    const clearUserInfo = () => {
        setAuthValues({
            ...authValues,
            signupInfo: {
                email: "",
                username: "",
                password: "",
                rep_password: "",
            }
        });
    };
    //Flows
    const handleLogin = async () => {
        try {
            const response = await authAPI.fetchLogin(authValues.signupInfo);
            const { token, user } = response;
            localStorage.setItem("userLoged", JSON.stringify(user));
            setAuthValues({ ...authValues, user });
            if (token) {
                openToast(
                    "Verificado",
                    "top-center",
                    "toast-success"
                );
            }
            const roleToken = await authAPI.fetchLoginCheck({ headers: { Authorization: `Bearer ${token}` } });
            return roleToken.role;
        } catch (error) {
            openToast("Credenciales invalidas", "top-center", "toast-error");
        }
    };
    const handleCreateAccout = async () => {
        try {
            if (Object.values(authValues.signupInfo).includes("")) {
                openToast(
                    "Todos los campos son requeridos",
                    "top-center",
                    "toast-error"
                );
            } else {
                if (authValues.signupInfo.password !== authValues.signupInfo.rep_password) {
                    openToast(
                        "Las contraseñas no son iguales",
                        "top-center",
                        "toast-error"
                    );
                }
            }

            const responseNewUser = await authAPI.fetchCreteUser(
                authValues.signupInfo,
                userTypeSelection
            );
            console.log(responseNewUser);
            if (responseNewUser?.status === 200) {
                openToast(
                    "Geniall!!, cuenta creada exitosamente",
                    "top-center",
                    "toast-success"
                );
                clearUserInfo();
                return true;
            } else {
                openToast(
                    "No se pudo crear la cuenta",
                    "top-center",
                    "toast-error"
                );
                return false;
            }
        } catch (error) {
            console.log(error);
            openToast(
                "No se pudo crear la cuenta",
                "top-center",
                "toast-error"
            );
            return false;
        }
    };
    const openToast = (message, location, type) => {
        toast.success(message, {
            position: location,
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: type,
            progressClassName: "toast-success-bar",
            icon: false,
        });
    };
    return (
        <AuthenticationContext.Provider
            value={{
                ...authValues,
                handleOnChangeFormInput,
                handleCreateAccout,
                handleLogin,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};

export { AuthenticationProvider };
export default AuthenticationContext;
