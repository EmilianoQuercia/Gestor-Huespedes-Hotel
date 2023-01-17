import dayjs from 'dayjs';
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

import Huespedes from './Huespedes';

const ListadoHuespedes = () => {
    const[busqueda, setBusqueda]=useState('')
    const {huespedes, setHuesped} = useContext(GlobalContext)

    let resultado = []
    console.log(busqueda)
    const buscarHuesped = () =>{
        resultado = huespedes.filter(h=> h.nombre.includes(busqueda) || h.habitacion.includes(busqueda)|| h.vehiculo.includes(busqueda) || dayjs(h.checkout).format('DD/MM/YYYY').includes(busqueda))
    }
    buscarHuesped()

    return (
        <div className='md:w-1/2 lg:w-3/5'>
            <h2 className='font-black text-xl text-center'>Listado de Huespedes</h2>
            <p className='text-xl mt-1 text-center mb-8'>
                Chequea tus huespedes {''}
                <span className='text-sky-600 font-bold'>AQUI</span>
            </p>
            <div className='flex justify-center mb-6'>
                <label className='text-xl mx-3' htmlFor="">Buscar:</label>
                <input onChange={(e)=>setBusqueda((e.target.value).toUpperCase())}
                 className=' uppercase bg-slate-100 border-1 w-2/3 p-1 mt-1 placeholder-gray-600 rounded-md' type="text"
                 placeholder='Nombre, Habitacion, Vehiculo o Checkout' />
            </div>
            <div className='  flex flex-wrap overflow-y-scroll h-screen'>
                {
                    resultado.map((huesped)=>
                    <Huespedes huesped={huesped}
                        key={huesped.id}
                        setHuesped={setHuesped}/>
                    )
                
                }
            </div>
        </div>
    );
}

export default ListadoHuespedes;
