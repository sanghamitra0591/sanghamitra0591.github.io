import { useState } from "react";

import { createContext } from "react";


export const ThemeContext= createContext();

const ThemeContextProvider= ({children})=>{
    const [darktheme, setdarktheme]= useState("dark");
    
    return <ThemeContext.Provider value={{darktheme, setdarktheme}}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider;