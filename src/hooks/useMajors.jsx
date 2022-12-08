import { useContext } from "react";
import { context } from "../context";
const useMajors = () => useContext(context.MajorsContext);
export default useMajors;