import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Header = () => {

    const {nombreHotel}=useContext(GlobalContext)

    return (
        <h1 className='font-black text-3xl text-center md:w-2/3 m-auto '>
        Gestor Huespedes {''}
        <span className=' text-sky-500'>{nombreHotel}</span>
    </h1>
    );
}

export default Header;
