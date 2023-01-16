import React, { createContext, useState } from 'react';

const GlobalContext = createContext() 

const GlobalContextProvider = (props) => {

    const [huespedes, setHuespedes]=useState([])
    const [huesped, setHuesped] = useState({})

    const eliminarHuesped = (id) =>{
        const huespedActualizados = huespedes.filter(huesped => huesped.id !== id)
        setHuespedes(huespedActualizados)
      }
    

    return (
        <GlobalContext.Provider value={{huespedes, setHuespedes, huesped, setHuesped, eliminarHuesped}}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export {GlobalContext, GlobalContextProvider};
