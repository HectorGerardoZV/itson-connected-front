import { axiosBackend, backendEndpoints } from "../config/AxiosHelper";

const addUserVacancy = async (profile, vacancy) => {
    const { data } = await axiosBackend.post(backendEndpoints.userVacancy, { profile, vacancy });
    return data;
}
    



export {
    addUserVacancy
}