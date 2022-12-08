import {axiosBackend,backendEndpoints} from "../config/AxiosHelper";

const fetchMajors = async()=>{
    try {
        const {data} = await axiosBackend.get(backendEndpoints.majors);
        return data;
    } catch (error) {
        return error;
    }
}

export {
    fetchMajors
}