import dayjs from 'dayjs';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const CantidadHabitaciones = () => {

    const {totalHabitaciones, huespedes} = useContext(GlobalContext)

    let habOcupadas = huespedes.length
    let habLibres = totalHabitaciones - habOcupadas

    let fechaHoy = Date.now()
    let hoy= dayjs(fechaHoy).format('DD/MM/YYYY')
    const checkOutHoy = huespedes.filter(h=>dayjs(h.checkout).format('DD/MM/YYYY').includes(hoy))
    let checkout = checkOutHoy.length

    return (
        <div className='flex justify-end'>
        <div className='m-2'>
            <div className='font-bold text-center'>Hab Ocupadas</div>
            <div className='text-center bg-orange-600 font-black text-white'>{habOcupadas}</div>
        </div>
        <div className='m-2'>
            <div className='font-bold text-center'>Hab Libres</div>
            <div className='text-center bg-lime-700 font-black text-white'>{habLibres}</div>
        </div>
        <div className='m-2'>
            <div className='font-bold text-center text-red-600 ' >CheckOut Hoy</div>
            <div className='text-center bg-red-600 font-black text-white'>{checkout}</div>
        </div>
        
    </div>
    );
}

export default CantidadHabitaciones;
