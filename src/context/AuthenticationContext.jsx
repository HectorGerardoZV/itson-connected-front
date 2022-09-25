import { createContext, useState } from "react";
import { axiosBackend, backendEndpoints } from "../config/AxiosHelper";
import useUserSelection from "../hooks/useUserSelection";
import { toast } from "react-toastify";

const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
    const { userTypeSelection } = useUserSelection();
    const [signupInfo, setSignupInfo] = useState(
        localStorage.getItem("signupInfo")
            ? JSON.parse(localStorage.getItem("signupInfo"))
            : {
                  email: "",
                  username: "",
                  password: "",
                  rep_password: "",
              }
    );
    const handleOnChangeFormInput = (value) => {
        setSignupInfo(value);
    };
    const handleCreateAccout = async () => {
        try {
            if (Object.values(signupInfo).includes("")) {
                openToast(
                    "Todos los campos son requeridos",
                    "top-center",
                    "toast-error"
                );
            } else {
                if (signupInfo.password !== signupInfo.rep_password) {
                    openToast(
                        "Las contraseñas no son iguales",
                        "top-center",
                        "toast-error"
                    );
                }
            }
            const idRole = validateRole();
            const responseRole = await axiosBackend.get(
                `${backendEndpoints.role}/${idRole}`
            );
            const roleExist = responseRole.data;
            if (!roleExist) {
                openToast("Este role no existe", "top-center", "toast-error");
            }
            const newUser = { ...signupInfo, idRole: Number(idRole) };
            const responseNewUser = await axiosBackend.post(
                backendEndpoints.users,
                newUser
            );
            const statusNewUser = responseNewUser.status;
            if (statusNewUser === 200) {
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
            openToast(
                "No se pudo crear la cuenta",
                "top-center",
                "toast-error"
            );
            return false;
        }
    };
    const validateRole = () => {
        if (userTypeSelection.trim().toLowerCase() === "student") {
            return 1;
        } else if (userTypeSelection.trim().toLowerCase() === "company") {
            return 5;
        }
    };
    const clearUserInfo = () => {
        setSignupInfo({
            email: "",
            username: "",
            password: "",
            rep_password: "",
        });
    };

    const handleLogin = async () => {};
    const openToast = (message, location, type) => {
        toast.success(message, {
            position: location,
            autoClose: 3500,
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
                signupInfo,
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
