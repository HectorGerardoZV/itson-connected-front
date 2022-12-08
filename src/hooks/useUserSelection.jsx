import { useContext } from "react";
import { context } from "../context/Index";
const useUserSelection = () => useContext(context.UserSelectionContext);
export default useUserSelection;