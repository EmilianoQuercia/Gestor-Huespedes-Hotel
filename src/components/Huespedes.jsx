import dayjs from 'dayjs';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Huespedes = ({huesped, setHuesped}) => {
    const {nombre, habitacion, cantHuespedes, pension, checkin, checkout, vehiculo, observaciones, id} = huesped

    const {eliminarHuesped}= useContext(GlobalContext)

    const handleEliminar = () =>{
        const respuesta = confirm(`Desea eliminar al huesped de la Habitacion ${habitacion}`)
        if (respuesta){
            eliminarHuesped(id)
        }
    }

    return (
        <div className=' m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className=' bg-teal-600 text-center font-bold mb-3 text-sm text-white uppercase' >
                Habitacion: {''}
                <span className='font-bold normal-case'>{habitacion}</span>
            </p>
            <p className='font-bold mb-3 text-sm text-gray-700 uppercase' >
                Nombre: {''}
                <span className='font-normal normal-case'>{nombre}</span>
            </p>
            <p className='font-bold mb-3 text-sm text-gray-700 uppercase' >
                Cantidad de Huespedes: {''}
                <span className='font-normal normal-case'>{cantHuespedes}</span>
            </p>
            <p className='font-bold mb-3 text-sm text-gray-700 uppercase' >
                Tipo de Pension: {''}
                <span className='font-normal normal-case'>{pension}</span>
            </p>
            <p className='font-bold mb-3 text-sm  text-gray-700 uppercase' >
                Check IN: {''}
                <span className='font-normal normal-case'>{dayjs(checkin).format('DD/MM/YYYY')}</span>
            </p>
            <p className='font-bold mb-3 text-sm text-red-700 uppercase' >
                Check OUT: {''}
                <span className='font-normal normal-case'>{dayjs(checkout).format('DD/MM/YYYY')}</span>
            </p>
            <p className='font-bold mb-3 text-sm text-gray-700 uppercase' >
                Vehiculo: {''}
                <span className='font-normal normal-case'>{vehiculo}</span>
            </p>
            <p className='font-bold mb-3 text-sm text-gray-700 uppercase' >
                Observaciones: {''}
                <span className='font-normal normal-case'>{observaciones}</span>
            </p>
            <div className='flex justify-between mt-10'>
                <button type='button'
                    className='py-2 px-8 m-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
                    onClick={() => setHuesped(huesped)}
                >Editar</button>

                <button type='button'
                    className='py-2 px-8 m-2 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
    );
}

export default Huespedes;
