import axios from "axios";

const backendEndpoints = {
    users: "/users",
    role: "/roles",
    auth: "/auth",
    vacancies: "/vacancies",
    majors: "/majors",
    profiles: "/profiles",
    userVacancy: "/usersVacancy"
};
const axiosBackend = axios.create({
    baseURL: import.meta.env.VITE_BACK_URL,
});

export { axiosBackend, backendEndpoints };
