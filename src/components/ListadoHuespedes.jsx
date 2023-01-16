import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

import Huespedes from './Huespedes';

const ListadoHuespedes = () => {

    const {huespedes, setHuesped} = useContext(GlobalContext)

    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
            <h2 className='font-black text-3xl text-center'>Listado de Huespedes</h2>
                    <p className='text-xl mt-1 mb-10 text-center'>
                        Chequea tus huespedes {''}
                        <span className='text-sky-600 font-bold'>AQUI</span>
                    </p>
                    {
                        huespedes.map((huesped)=>
                        <Huespedes huesped={huesped}
                            key={huesped.id}
                            setHuesped={setHuesped}/>
                        )
                      
                    }
        </div>
    );
}

export default ListadoHuespedes;
