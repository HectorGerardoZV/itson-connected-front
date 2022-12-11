import { useContext } from 'react';
import { context } from "../context";
const useProfiles = () => useContext(context.ProfileContext);
export default useProfiles;