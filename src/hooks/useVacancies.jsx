import { useContext } from "react"
import { context } from "../context";
const useVacancies = () => useContext(context.VacanciesContext);
export default useVacancies;