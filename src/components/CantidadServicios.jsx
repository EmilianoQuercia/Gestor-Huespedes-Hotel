import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const CantidadServicios = () => {

    const { cantA, cantD, cantC } = useContext(GlobalContext)

    return (
        <div className='flex justify-end'>
            <div className='m-2'>
                <div className='font-bold text-center'>Desayunos</div>
                <div className='text-center bg-orange-500 font-black text-white'>{cantD}</div>
            </div>
            <div className='m-2'>
                <div className='font-bold text-center'>Almuerzos</div>
                <div className='text-center bg-lime-600 font-black text-white'>{cantA}</div>
            </div>
            <div className='m-2'>
                <div className='font-bold text-center'>Cenas</div>
                <div className='text-center bg-indigo-600 font-black text-white'>{cantC}</div>
            </div>
            
        </div>
    );
}

export default CantidadServicios;
