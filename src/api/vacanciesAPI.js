import { axiosBackend, backendEndpoints } from "../config/AxiosHelper";
const vacanciesEndpoint = backendEndpoints.vacancies;

const fetchVacancies = async (status) => {
    const url = `${vacanciesEndpoint}/activated/${status}`
    try {
        const { data } = await axiosBackend.get(url);
        return data;
    } catch (error) {
        return error;
    }
}

const fetchMyVacancies = async (companyId) => {
    const url = `${vacanciesEndpoint}/company/${companyId}`
    try {
        const { data } = await axiosBackend.get(url);
        return data;
    } catch (error) {
        return error;
    }
}

const fetchCreateVacancy = async(vacancy)=>{
    const url = `${vacanciesEndpoint}`
    try {
        const {data} = await axiosBackend.post(url,vacancy);
        return data;
    } catch (error) {
        return error;        
    }
}

export {
    fetchVacancies,
    fetchMyVacancies,
    fetchCreateVacancy
}