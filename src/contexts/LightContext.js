import axios from "axios";
import { useState, useEffect, createContext } from "react";

export const LightContext = createContext();

const LightProvider = ({children}) => {

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        axios(`http://192.168.8.100/api/${process.env.REACT_APP_USERNAME}/groups`)
        .then((response) => {
            setGroups(response.data)
        })
    }, []);
    
    return (
        <LightContext.Provider value={{ groups }}>
            {children}
        </LightContext.Provider>
    );
}
 
export default LightProvider;