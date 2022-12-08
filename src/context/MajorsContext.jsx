import { createContext, useState, useEffect } from "react"
import { majorsAPI } from "../api";
const MajorsContext = createContext();
const MajorsProvider = ({ children }) => {

    const [majorsValues, setMajorsValues] = useState({
        majors: [],
        majorSelected: null
    })

    const loadMajors = async () => {
        try {
            const majors = await majorsAPI.fetchMajors();
            setMajorsValues({
                ...majorsValues,
                majors
            });
        } catch (error) {

        }
    }

    useEffect(()=>{
        loadMajors();
    },[]);

    return (
        <MajorsContext.Provider
            value={{
                ...majorsValues,
                loadMajors
            }}
        >
            {children}
        </MajorsContext.Provider>
    )
}

export { MajorsProvider }
export default MajorsContext