import React, { useContext } from 'react';
import Home from '../components/Home';
import PantallaInicio from '../components/PantallaInicio';
import { GlobalContext } from '../context/GlobalContext';


const ContainerRoutes = () => {
 
    const {inicio} = useContext(GlobalContext)



    return (
        <div>
            {inicio ? <PantallaInicio/> :
            
                <Home/>
            }
        </div>
    );
}

export default ContainerRoutes;
