import { axiosBackend, backendEndpoints } from "../config/AxiosHelper";
const ROLE1_NAME = import.meta.env.VITE_ROLE1_NAME;
const ROLE2_NAME = import.meta.env.VITE_ROLE2_NAME;
const ROLE1_ID = import.meta.env.VITE_ROLE1_ID;
const ROLE2_ID = import.meta.env.VITE_ROLE2_ID;
const fetchLogin = async (credentials) => {
    try {
        const {data} = await axiosBackend.post(backendEndpoints.auth,credentials);
        return data;
    } catch (error) {

    }
}
const fetchLoginCheck = async(headers)=>{
    const url = `${backendEndpoints.auth}/checkRole`;
    try {
       const {data} = await axiosBackend.get(url,headers);
       return data;
    } catch (error) {
        return error;
    }
}
const fetchCreteUser = async (credentials, role) => {
    const fetchOptions = {
        [ROLE1_NAME]: fetchCreateStudentUser,
        [ROLE2_NAME]: fetchCreateCompanyUser
    }
    return await fetchOptions[role](credentials);
}
const fetchCreateStudentUser = async (credentials) => {
    try {
        credentials.role = ROLE1_ID;
        const newUser = await axiosBackend.post(backendEndpoints.users, credentials);
        return newUser;
    } catch (error) {

    }
}
const fetchCreateCompanyUser = async (credentials) => {
    try {
        credentials.role = ROLE2_ID;
        const newUser = await axiosBackend.post(backendEndpoints.users, credentials);
        return newUser;
    } catch (error) {

    }
}

export {
    fetchLogin,
    fetchCreteUser,
    fetchCreateStudentUser,
    fetchCreateCompanyUser,
    fetchLoginCheck
}
