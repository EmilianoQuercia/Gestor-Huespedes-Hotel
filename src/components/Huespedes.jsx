import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Huespedes = ({huesped, setHuesped}) => {
    const {nombre, habitacion, cantHuespedes, pension, checkin, checkout, vehiculo, observaciones, id} = huesped

    const {eliminarHuesped}= useContext(GlobalContext)

    const handleEliminar = () =>{
        const respuesta = confirm(`Desea eliminar al huesped de la Habitacion ${habitacion}`)
        eliminarHuesped(id)
    }

    return (
        <div className=' m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase' >
            Nombre: {''}
            <span className='font-normal normal-case'>{nombre}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase' >
           Habitacion: {''}
            <span className='font-normal normal-case'>{habitacion}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase' >
            Cantidad de Huespedes: {''}
            <span className='font-normal normal-case'>{cantHuespedes}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase' >
            Tipo de Pension: {''}
            <span className='font-normal normal-case'>{pension}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase' >
            Check IN: {''}
            <span className='font-normal normal-case'>{checkin}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase' >
            Check OUT: {''}
            <span className='font-normal normal-case'>{checkout}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase' >
            Vehiculo: {''}
            <span className='font-normal normal-case'>{vehiculo}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase' >
            Observaciones: {''}
            <span className='font-normal normal-case'>{observaciones}</span>
        </p>
        <div className='flex justify-between mt-10'>
            <button type='button'
                className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
                onClick={()=> setHuesped(huesped)}
            >Editar</button>

            <button type='button'
                 className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
                 onClick={handleEliminar}
            >Eliminar</button>
        </div>
    </div>
    );
}

export default Huespedes;
