import { useContext } from "react";
import {context} from "../context/Index";

const useAuthentication = () => {
  return useContext(context.AuthenticationContext)
}

export default useAuthentication