import React, { useState, useEffect } from 'react';

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [habitacion, setHabitacion] = useState('')
    const [cantHuespedes, setCantHuespedes] = useState('')
    const [pension, setPension] = useState('desayuno')
    const [checkin, setCheckin] = useState('')
    const [checkout, setCheckout] = useState('')
    const [vehiculo, setVehiculo] = useState('')
    const [observaciones, setObservaciones] = useState('')

   
  
    const handleSubmit = (e) =>{
        e.preventDefault()

        //Objeto de Huesped Cargado
        const objetoHuesped ={
            nombre,
            habitacion,
            cantHuespedes,
            pension,
            checkin,
            checkout,
            vehiculo,
            observaciones
        }
        console.log(objetoHuesped)
       
        //Reiniciar Formulario
        setNombre('')
        setHabitacion('')
        setCantHuespedes('')
        setPension('desayuno')
        setCheckin('')
        setCheckout('')
        setVehiculo('')
        setObservaciones('')
        document.getElementById('select').selected = true
    }

    return (
        <div className='md:w-1/2 lg:w-2/5'>
            <h2 className='font-black text-xl text-center '>Registro de Huespedes</h2>
            <p className='text-xl mt-1 text-center mb-10'>
                Añade {''}
                <span className=' text-sky-600 font-bold'>Huespedes Aqui</span>  
            </p>

            <form  onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-5 px-5 mb-10'>
                <div className='mb-3'>
                    <label htmlFor="nombre"
                        className='block uppercase font-bold text-gray-600'
                    >Nombre Titular Reserva
                    </label>
                    <input  className=' bg-slate-100 border-2 w-full p-1 mt-1 placeholder-gray-600 rounded-md' 
                        type="text" id='nombre'
                        placeholder='Nombre del huesped'
                        value={nombre}
                        onChange={(e)=>setNombre(e.target.value)}
                        required />
                </div>
                <div className='mb-3'>
                    <label htmlFor="habitacion"
                        className='block uppercase font-bold text-gray-600'
                    >Habitacion
                    </label>
                    <input  className=' bg-slate-100 border-2 w-full p-1 mt-1 placeholder-gray-600 rounded-md' 
                        type="number" id='habitacion'
                        placeholder='Numero de habitación'
                        value={habitacion}
                        onChange={(e)=>setHabitacion(e.target.value)} 
                        required/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="cantidadH"
                        className='block uppercase font-bold text-gray-600'
                    >Cantidad de Huespedes
                    </label>
                    <input  className=' bg-slate-100 border-2 w-full p-1 mt-1 placeholder-gray-600 rounded-md' 
                        type="number" id='CantidadH'
                        placeholder='Cantidad de Huespedes'
                        value={cantHuespedes}
                        onChange={(e)=>setCantHuespedes(e.target.value)} 
                        required/>
                </div>
                <div className='mb-3'>
                    <label 
                        className='block uppercase font-bold text-gray-600'
                    >Tipo de Pension
                    </label>
                    <select   onChange={(e)=>{setPension(e.target.value)}} className=' bg-slate-100 border-2 w-full p-1 mt-1 placeholder-gray-600 rounded-md' >
                        <option value={'desayuno'} id='select' >Desayuno</option>
                        <option value={'MAP'} >MAP (Desayuno Y Cena)</option>
                        <option value={'pc'} >Pension Completa</option>
                    </select>
                </div>
            
                <div className='mb-3'>
                    <label 
                        className='block uppercase font-bold text-gray-600'
                    >Check IN
                    </label>
                    <input  className=' bg-slate-100 border-2 w-full p-1 mt-1 placeholder-gray-600 rounded-md' 
                        type="date"
                        value={checkin}
                        onChange={(e)=>setCheckin(e.target.value)} 
                        required
                        />
                </div>
                <div className='mb-3'>
                    <label 
                        className='block uppercase font-bold text-gray-600'
                    >Check Out
                    </label>
                    <input  className=' bg-slate-100 border-2 w-full p-1 mt-1 placeholder-gray-600 rounded-md' 
                        type="date" 
                        value={checkout}
                        onChange={(e)=>setCheckout(e.target.value)}
                        required
                         />
                </div>
                <div className='mb-3'>
                    <label htmlFor="vehiculo"
                        className='block uppercase font-bold text-gray-600'
                    >Vehiculo y Patente
                    </label>
                    <input  className=' bg-slate-100 border-2 w-full p-1 mt-1 placeholder-gray-600 rounded-md' 
                        type="text" id='vehiculo'
                        placeholder='Ingrese Marca y Patente'
                        value={vehiculo}
                        onChange={(e)=>setVehiculo(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="observaciones"
                        className='block uppercase font-bold text-gray-600'
                    >Observaciones
                    </label>
                    <textarea  className=' bg-slate-100 border-2 w-full p-1 mt-1 placeholder-gray-600 rounded-md' 
                        type="text" id='observaciones'
                        placeholder='Ingrese alguna observación'
                        value={observaciones}
                        onChange={(e)=>setObservaciones(e.target.value)} />
                </div>
                <input className=' bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all' 
                    type="submit" name="" 
                    value={'Agregar Huesped'} />

            </form>
        </div>

    );
}

export default Formulario;
