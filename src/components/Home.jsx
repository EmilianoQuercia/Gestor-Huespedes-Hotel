import React, { useState } from 'react';
import Formulario from './Formulario';
import Header from './Header';
import ListadoHuespedes from './ListadoHuespedes';

const Home = () => {
    
    return (
        <div>
            <Header/>
            <div className="mt-5 md:flex">
                <Formulario/>
                <ListadoHuespedes />   
            </div>
        </div>
    );
}

export default Home;
