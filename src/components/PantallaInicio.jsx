import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const PantallaInicio = () => {

    const {setInicio, nombreHotel, setNombreHotel, setTotalHabitaciones, totalHabitaciones} = useContext(GlobalContext)

    const handleSubmit= (e) =>{
        e.preventDefault();
        setInicio(false)
        localStorage.setItem('nombreHotel', JSON.stringify(nombreHotel))
        localStorage.setItem('totalHabitaciones', JSON.stringify(totalHabitaciones))
    }

    return (
        <div className='w-full'>
            <h1 className='font-black text-4xl my-10 text-center md:w-2/3 m-auto '>
                Bienvenido al Gestor de {''}
                <span className=' text-sky-500'>Hotel</span>
            </h1>
            <div className='flex justify-center'>
                <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-5 px-5 mb-10'>
                    <div className='mb-3'>
                        <label htmlFor="nombre"
                            className='block uppercase text-sm font-bold text-gray-600'
                        >Nombre del Hotel
                        </label>
                        <input className=' text-sm uppercase bg-slate-100 border-2 w-full p-1 mt-1 placeholder-gray-600 rounded-md'
                            type="text" id='nombre'
                            placeholder='Nombre del hotel'
                            value={nombreHotel}
                            onChange={(e)=>setNombreHotel((e.target.value).toUpperCase())}
                            required />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="habitacion"
                            className='block text-sm uppercase font-bold text-gray-600'
                        >Cantidad Total de Habitacion
                        </label>
                        <input className='text-sm bg-slate-100 border-2 w-full p-1 mt-1 placeholder-gray-600 rounded-md'
                            type="number" id='habitacion'
                            placeholder='CANTIDAD DE HABITACION'
                            value={totalHabitaciones}
                            onChange={(e)=>setTotalHabitaciones(e.target.value)} 
                            required />
                    </div>

                    <input className='text-sm bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
                        type="submit" name=""
                        value='Empezar' />

                </form>
            </div>
        </div>
    );
}

export default PantallaInicio;
