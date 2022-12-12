import { createContext, useState } from "react";

const ModalContext = createContext();
const ModalProvider = ({ children }) => {
    const [modalValues, setModalValues] = useState({
        isOpenModal: false,
        optionModal: "",
        isOpenModalProfile:false
    });

    const handleOnChangeModal = (state, option) => {
        setModalValues({
            ...modalValues,
            isOpenModal: state,
            optionModal: option
        });
    }
    const handleOnChangeModalProfile = (state)=>{
        setModalValues({
            ...modalValues,
            isOpenModalProfile:state
        });
    }
    return (
        <ModalContext.Provider
            value={{
                ...modalValues,
                handleOnChangeModal,
                handleOnChangeModalProfile
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export { ModalProvider }
export default ModalContext;