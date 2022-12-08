import { useContext } from 'react';
import { context } from "../context";
const useModal = () => useContext(context.ModalContext);
export default useModal