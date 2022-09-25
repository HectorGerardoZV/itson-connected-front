import { useContext } from "react";
import {context} from "../context/Index";

const useUserSelection = () => {
  return useContext(context.UserSelectionContext);
}

export default useUserSelection