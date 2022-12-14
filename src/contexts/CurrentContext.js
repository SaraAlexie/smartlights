import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CurrentContext = createContext()

const CurrentProvider = ({ children }) => {

    const [currentLight, setCurrentLight] = useState();
    const [lightIsOn, setLightIsOn] = useState();
    const [light] = useState();

    useEffect(() => {
        axios.put(`http://192.168.8.100/api/${process.env.REACT_APP_USERNAME}/lights/${currentLight}/state`, {
            on: lightIsOn
        })
    }, [lightIsOn, currentLight]);

    const handleCurrent = () => {
        setLightIsOn(!lightIsOn)
        setCurrentLight(light)
    }

    return (
        <CurrentContext.Provider value={{ setCurrentLight, currentLight, handleCurrent }}>
            {children}
        </CurrentContext.Provider>
    );
}
 
export default CurrentProvider;