import { createContext, useState, useContext, useEffect } from "react";
import { vacanciesAPI } from "../api";
import ProfileContext from "./ProfileContext";
import { toast } from "react-toastify";
import UserVacancyContext from './UserVacancyContext';

const VacanciesContext = createContext();
const VacanciesProvider = ({ children }) => {
    const { profile } = useContext(ProfileContext);
    const { addAplicationUser } = useContext(UserVacancyContext);
    const [vacanciesValues, setVacanciesValues] = useState({
        vacancies: [],
        vacanciesManipulate: [],
        lastThreeVacancies: [],
        vacancy: localStorage.getItem("vacancySelected") ? JSON.parse(localStorage.getItem("vacancySelected")) : null,
        vacanciesFilters: {
            name: "",
            company: "",
            date: ""
        },
        vacancyInfo: {
            name: "",
            major: "",
            company: "",
            generalData: "",
            activities: "",
            offer: "",
            requirements: "",
            limit: "",
        }
    });

    const loadVacanciesPage = async () => {
        try {
            const vacancies = await vacanciesAPI.fetchVacancies(true);
            setVacanciesValues({
                ...vacanciesValues,
                vacancies: vacancies,
                vacanciesManipulate: vacancies,
            });
        } catch (error) {
            console.log(error);
        }
    }
    const hadleSelectAccount = async (vacancy) => {
        const vacancyFound = await vacanciesAPI.fetchVacancyById(vacancy._id);
        localStorage.setItem("vacancySelected", JSON.stringify(vacancyFound));
        setVacanciesValues({ ...vacanciesValues, vacancy: vacancyFound });
    }
    const handleMyVacancies = async () => {
        try {
            const vacancies = await vacanciesAPI.fetchMyVacancies(profile._id);
            setVacanciesValues({
                ...vacanciesValues,
                vacancies: vacancies,
                vacanciesManipulate: vacancies
            });
        } catch (error) {

        }
    }
    const handleOnChangeVacancy = (e) => {
        const { name, value } = e.target;
        setVacanciesValues({
            ...vacanciesValues,
            vacancyInfo: {
                ...vacanciesValues.vacancyInfo,
                [name]: value
            }
        });
    }
    const createAccount = async () => {
        try {
            const vacancy = { ...vacanciesValues.vacancyInfo };
            vacancy.company = profile._id;
            await vacanciesAPI.fetchCreateVacancy(vacancy);
            setVacanciesValues({
                ...vacanciesValues,
                vacancyInfo: {
                    name: "",
                    major: "",
                    company: "",
                    generalData: "",
                    activities: "",
                    offer: "",
                    requirements: "",
                    limit: "",
                }
            });
            await handleMyVacancies();
            openToast("Vacante creada!!, dale un vistado en tus vacantes.", "top-right", "toast-success");
            return true;

        } catch (error) {
            openToast("No se pudo agregar la vacante, intentalo de nuevo.", "top-right", "toast-error");
            return false;
        }
    }
    const addUserAplication = async () => {
        const profileId = profile._id;
        const vacancyId = vacanciesValues.vacancy.vacancy._id;
        await addAplicationUser(profileId, vacancyId);
    }
    const handleGetVacancyById = async () => {
        try {
            const vacancy = await vacanciesAPI.fetchVacancyById(vacanciesValues.vacancy._id);
            localStorage.setItem("vacancySelected", JSON.stringify(vacancy));
            setVacanciesValues({ ...vacanciesValues, vacancy });
        } catch (error) {

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



    useEffect(() => {
        handleMyVacancies();
    }, [profile]);
    return (
        <VacanciesContext.Provider
            value={{
                ...vacanciesValues,
                loadVacanciesPage,
                hadleSelectAccount,
                handleMyVacancies,
                handleOnChangeVacancy,
                createAccount,
                addUserAplication,
                handleGetVacancyById
            }}
        >
            {children}
        </VacanciesContext.Provider>
    )
}

export { VacanciesProvider };
export default VacanciesContext;