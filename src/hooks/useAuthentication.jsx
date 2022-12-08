import { useContext } from "react";
import {context} from "../context/Index";
const useAuthentication = () => useContext(context.AuthenticationContext);
export default useAuthentication;