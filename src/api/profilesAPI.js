import { axiosBackend, backendEndpoints } from "../config/AxiosHelper";
const urlProfile = backendEndpoints.profiles;
const urlStudentProfile = `${urlProfile}/student`;
const urlCompanyProfile = `${urlProfile}/company`;
const config = {
    headers: { 'content-type': 'multipart/form-data' }
}
const addStudentProfile = async (profile) => {
    const { data } = await axiosBackend.post(urlStudentProfile, profile, config);
    return data;
}

const addCompanyProfile = async (profile) => {
    const { data } = await axiosBackend.post(urlCompanyProfile, profile, config);
    return data;
}

const getProfileById = async (idProfile) => {
    const { data } = await axiosBackend.get(`${urlProfile}/${idProfile}`);
    return data;
}

export {
    addCompanyProfile,
    addStudentProfile,
    getProfileById
}
