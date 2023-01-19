import React, { useState } from 'react';
import CantidadHabitaciones from './CantidadHabitaciones';
import CantidadServicios from './CantidadServicios';
import Formulario from './Formulario';
import Header from './Header';
import ListadoHuespedes from './ListadoHuespedes';

const Home = () => {
    
    return (
        <div>
            <Header/>
            <div className='flex justify-between'>
            <CantidadHabitaciones/>
            <CantidadServicios/>
            </div>
            <div className="mt-2 md:flex">
                <Formulario/>
                <ListadoHuespedes />   
            </div>
        </div>
    );
}

export default Home;
