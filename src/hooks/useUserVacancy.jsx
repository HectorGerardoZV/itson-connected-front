import { useContext } from 'react'
import { context } from "../context";
const useUserVacancy = () => useContext(context.UserVacancyContext);
export default useUserVacancy;