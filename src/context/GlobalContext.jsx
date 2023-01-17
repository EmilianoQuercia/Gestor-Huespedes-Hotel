import React, { createContext, useEffect, useState } from 'react';

const GlobalContext = createContext() 

const GlobalContextProvider = (props) => {
    let cantD = 0
    let cantC = 0
    let cantA = 0

    const [huespedes, setHuespedes]=useState([])
    const [huesped, setHuesped] = useState({})
    
    const huespedesLS = JSON.parse(localStorage.getItem('huespedesHotel'));
    useEffect(() => {
        setHuespedes(huespedesLS)
      }, []);
    
      useEffect(() => {
        localStorage.setItem('huespedesHotel', JSON.stringify(huespedes))
      }, [huespedes]);
    


    const eliminarHuesped = (id) =>{
        const huespedActualizados = huespedes.filter(huesped => huesped.id !== id)
        setHuespedes(huespedActualizados)
      }

     
    const cantidadServicios = huespedes.map((h)=>{
        if (h.pension === 'DESAYUNO'){
              const HuespedesCantidadTotal = huespedes.reduce((acc, h)=> acc + Number(h.cantHuespedes), 0)
              
                cantD = HuespedesCantidadTotal
    
        }
        if (h.pension === 'MAP'){
            const HuespedesCantidadTotal = huespedes.reduce((acc, h)=> acc + Number(h.cantHuespedes), 0)
               
                cantD = HuespedesCantidadTotal
                cantC += Number(h.cantHuespedes)
        }
        if (h.pension === 'PENSION COMPLETA'){
            const HuespedesCantidadTotal = huespedes.reduce((acc, h)=> acc + Number(h.cantHuespedes), 0)
                
                cantD = HuespedesCantidadTotal
                cantC += Number(h.cantHuespedes)
                cantA += Number(h.cantHuespedes)
        }
    })
    

    return (
        <GlobalContext.Provider value={{huespedes, setHuespedes, huesped, setHuesped, eliminarHuesped, cantA, cantD, cantC}}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export {GlobalContext, GlobalContextProvider};
