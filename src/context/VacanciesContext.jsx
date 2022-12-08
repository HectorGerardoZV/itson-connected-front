import { createContext, useState, useContext } from "react";
import { vacanciesAPI } from "../api";
import { axiosBackend } from "../config/AxiosHelper";
import AuthenticationContext from "./AuthenticationContext";
const VacanciesContext = createContext();
const VacanciesProvider = ({ children }) => {
    const { user } = useContext(AuthenticationContext);
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
            company: user,
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

        }
    }
    const hadleSelectAccount = (vacancy) => {
        localStorage.setItem("vacancySelected", JSON.stringify(vacancy));
        setVacanciesValues({ ...vacanciesValues, vacancy });
    }
    const handleMyVacancies = async () => {
        try {
            const vacancies = await vacanciesAPI.fetchMyVacancies(user);
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

            const result = await vacanciesAPI.fetchCreateVacancy(vacanciesValues.vacancyInfo);
            if (result) {
                setVacanciesValues({
                    ...vacanciesValues,
                    vacancyInfo: {
                        name: "",
                        major: "638a17d8996987d587cf7823",
                        company: user,
                        generalData: "",
                        activities: "",
                        offer: "",
                        requirements: "",
                        limit: "",
                    }
                });
                await loadVacanciesPage();
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    }


    return (
        <VacanciesContext.Provider
            value={{
                ...vacanciesValues,
                loadVacanciesPage,
                hadleSelectAccount,
                handleMyVacancies,
                handleOnChangeVacancy,
                createAccount
            }}
        >
            {children}
        </VacanciesContext.Provider>
    )
}

export { VacanciesProvider };
export default VacanciesContext;