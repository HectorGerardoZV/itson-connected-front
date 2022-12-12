import { createContext, useState } from 'react';
import { userVacancyAPI } from "../api";
import { toast } from "react-toastify";

const UserVacancyContext = createContext();
const UserVacancyProfile = ({ children }) => {
    const addAplicationUser = async (profile, vacancy) => {
        try {
            await userVacancyAPI.addUserVacancy(profile, vacancy);
            openToast("Geniall!!, te postulaste exitosamente", "top-right", "toast-success");
        } catch (error) {
            const { msg } = error.response.data;
            openToast(msg, "top-right", "toast-error");
        }
    }

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
        <UserVacancyContext.Provider
            value={{
                addAplicationUser
            }}
        >
            {children}
        </UserVacancyContext.Provider>
    )
}
export { UserVacancyProfile };
export default UserVacancyContext;