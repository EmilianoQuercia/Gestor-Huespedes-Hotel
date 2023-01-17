import React, { useState } from 'react';
import CantidadServicios from './CantidadServicios';
import Formulario from './Formulario';
import Header from './Header';
import ListadoHuespedes from './ListadoHuespedes';

const Home = () => {
    
    return (
        <div>
            <Header/>
            <CantidadServicios/>
            <div className="mt-5 md:flex">
                <Formulario/>
                <ListadoHuespedes />   
            </div>
        </div>
    );
}

export default Home;
