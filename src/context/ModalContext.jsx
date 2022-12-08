import { createContext, useState } from "react";

const ModalContext = createContext();
const ModalProvider = ({ children }) => {
    const [modalValues, setModalValues] = useState({
        isOpenModal: false,
        optionModal: ""
    });

    const handleOnChangeModal = (state, option) => {
        setModalValues({
            ...modalValues,
            isOpenModal: state,
            optionModal: option
        });
    }
    return (
        <ModalContext.Provider
            value={{
                ...modalValues,
                handleOnChangeModal
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export { ModalProvider }
export default ModalContext;