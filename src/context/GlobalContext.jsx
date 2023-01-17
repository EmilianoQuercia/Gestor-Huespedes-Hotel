import React, { createContext, useState } from 'react';

const GlobalContext = createContext() 

const GlobalContextProvider = (props) => {
    let cantD = 0
    let cantC = 0
    let cantA = 0

    const [huespedes, setHuespedes]=useState([])
    const [huesped, setHuesped] = useState({})

    const eliminarHuesped = (id) =>{
        const huespedActualizados = huespedes.filter(huesped => huesped.id !== id)
        setHuespedes(huespedActualizados)
      }

     
    // const HuespedesCantidadTotal = huespedes.reduce((acc, h)=> acc + Number(h.cantHuespedes), 0)
    // console.log('TOTAL:', HuespedesCantidadTotal)
    const cantidadServicios = huespedes.map((h)=>{
        if (h.pension === 'desayuno'){
              const HuespedesCantidadTotal = huespedes.reduce((acc, h)=> acc + Number(h.cantHuespedes), 0)
                console.log('TOTAL:', HuespedesCantidadTotal)
                cantD = HuespedesCantidadTotal
    
        }
        if (h.pension === 'MAP'){
            const HuespedesCantidadTotal = huespedes.reduce((acc, h)=> acc + Number(h.cantHuespedes), 0)
                console.log('TOTAL:', HuespedesCantidadTotal)
                cantD = HuespedesCantidadTotal
                cantC += Number(h.cantHuespedes)
        }
        if (h.pension === 'pc'){
            const HuespedesCantidadTotal = huespedes.reduce((acc, h)=> acc + Number(h.cantHuespedes), 0)
                console.log('TOTAL:', HuespedesCantidadTotal)
                cantD = HuespedesCantidadTotal
                cantC += Number(h.cantHuespedes)
                cantA += Number(h.cantHuespedes)
        }
    })
    
    console.log('Desayunos:',cantD , 'Almuerzos', cantA, 'cenas', cantC)

    return (
        <GlobalContext.Provider value={{huespedes, setHuespedes, huesped, setHuesped, eliminarHuesped, cantA, cantD, cantC}}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export {GlobalContext, GlobalContextProvider};
