import { createContext, useState } from "react";

const UserSelectionContext = createContext();

const UserSelectionProvider = ({ children }) => {
    const [userTypeSelection, setUserTypeSelection] = useState(
        localStorage.getItem("userTypeSelection")
            ? JSON.parse(localStorage.getItem("userTypeSelection"))
            : null
    );

    const handleUserTypeSelection = (userType) => {
        setUserTypeSelection(userType);
        localStorage.setItem("userTypeSelection", JSON.stringify(userType));
    };

    return (
        <UserSelectionContext.Provider
            value={{
                userTypeSelection,
                handleUserTypeSelection,
            }}
        >
            {children}
        </UserSelectionContext.Provider>
    );
};

export { UserSelectionProvider };
export default UserSelectionContext;
