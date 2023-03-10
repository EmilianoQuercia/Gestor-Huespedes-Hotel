import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import dayjs, { isDayjs } from 'dayjs'

let totalDesayuno = 0

const Formulario = () => {

  const {huespedes, setHuespedes, huesped, setHuesped} = useContext(GlobalContext)

    const [nombre, setNombre] = useState('')
    const [habitacion, setHabitacion] = useState('')
    const [cantHuespedes, setCantHuespedes] = useState('')
    const [pension, setPension] = useState('DESAYUNO')
    const [checkin, setCheckin] = useState('')
    const [checkout, setCheckout] = useState('')
    const [vehiculo, setVehiculo] = useState('')
    const [observaciones, setObservaciones] = useState('')

   

    // En el useEffect paso el objeto a modificar
    useEffect(()=>{
        if(Object.keys(huesped).length >0){
            setNombre(huesped.nombre)
            setHabitacion(huesped.habitacion)
            setCantHuespedes(huesped.cantHuespedes)
            if (huesped.pension === 'MAP'){
                document.getElementById('map').selected = true
            }else if (huesped.pension === 'PENSION COMPLETA'){
                document.getElementById('pc').selected = true
            }
            setPension(huesped.pension)
            setCheckin(huesped.checkin)
            setCheckout(huesped.checkout)
            setVehiculo(huesped.vehiculo)
            setObservaciones(huesped.observaciones)
        }
    },[huesped])

    const generarId = () =>{
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }

   
  
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
        
       


        //vamos a chequear si es un nuevo registro o si es una edicion
        if (huesped.id) {
            //editando el registro
            objetoHuesped.id = huesped.id
            const huespedActualizado = huespedes.map(huespedState =>
                huespedState.id === huesped.id ? objetoHuesped : huespedState)
            setHuespedes(huespedActualizado)
            setHuesped({})
        } else {
            //Nuevo registro
            //checkeo que el numero de habitacion no se repita
            const numHabitacion = huespedes.find(h=>h.habitacion === objetoHuesped.habitacion)
            if (numHabitacion) {
                alert(`La habitacion ${objetoHuesped.habitacion} ya esta ocupada`)
                return
            }
            objetoHuesped.id = generarId()
            setHuespedes([...huespedes, objetoHuesped])
        }


       
        //Reiniciar Formulario
        setNombre('')
        setHabitacion('')
        setCantHuespedes('')
        setPension('DESAYUNO')
        setCheckin('')
        setCheckout('')
        setVehiculo('')
        setObservaciones('')
        document.getElementById('desayuno').selected = true
    }

    return (
        <div className='md:w-1/2 lg:w-2/5'>
            <h2 className='font-black text-xl text-center '>Registro de Huespedes</h2>
            <p className='text-xl mt-1 text-center mb-5'>
                A??ade {''}
                <span className=' text-sky-600 font-bold'>Huespedes Aqui</span>  
            </p>

            <form  onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-5 px-5 mb-10'>
                <div className='mb-3'>
                    <label htmlFor="nombre"
                        className='block uppercase text-sm font-bold text-gray-600'
                    >Nombre Titular Reserva
                    </label>
                    <input  className=' text-sm uppercase bg-slate-100 border-2 w-full p-1 mt-1 placeholder-gray-600 rounded-md' 
                        type="text" id='nombre'
                        placeholder='Nombre del huesped'
                        value={nombre}
                        onChange={(e)=>setNombre((e.target.value).toUpperCase())}
                        required />
                </div>
                <div className='mb-3'>
                    <label htmlFor="habitacion"
                        className='block text-sm uppercase font-bold text-gray-600'
                    >Habitacion
                    </label>
                    <input  className='text-sm bg-slate-100 border-2 w-full p-1 mt-1 placeholder-gray-600 rounded-md' 
                        type="number" id='habitacion'
                        placeholder='NUMERO DE HABITACION'
                        value={habitacion}
                        onChange={(e)=>setHabitacion(e.target.value)} 
                        required/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="cantidadH"
                        className='block text-sm uppercase font-bold text-gray-600'
                    >Cantidad de Huespedes
                    </label>
                    <input  className='text-sm bg-slate-100 border-2 w-full p-1 mt-1 placeholder-gray-600 rounded-md' 
                        type="number" id='CantidadH'
                        placeholder='CANTIDAD DE HUESPEDES'
                        max={6}
                        value={cantHuespedes}
                        onChange={(e)=>setCantHuespedes(e.target.value)} 
                        required/>
                </div>
                <div className='mb-3'>
                    <label 
                        className='block text-sm uppercase font-bold text-gray-600'
                    >Tipo de Pension
                    </label>
                    <select   onChange={(e)=>{setPension(e.target.value)}} className='text-sm uppercase bg-slate-100 border-2 w-full p-1 mt-1 placeholder-gray-600 rounded-md' >
                        <option value={'DESAYUNO'} id='desayuno' >Desayuno</option>
                        <option value={'MAP'} id='map' >MAP (Desayuno Y Cena)</option>
                        <option value={'PENSION COMPLETA'} id= 'pc'>Pension Completa</option>
                    </select>
                </div>
            
                <div className='mb-3'>
                    <label 
                        className='block text-sm uppercase font-bold text-gray-600'
                    >Check IN
                    </label>
                    <input  className='text-sm bg-slate-100 border-2 w-full p-1 mt-1 placeholder-gray-600 rounded-md' 
                        type='date'
                        value={checkin}
                        onChange={(e)=>setCheckin(e.target.value)} 
                        required
                        
                     
                        />
                </div>
                <div className='mb-3'>
                    <label 
                        className='block text-sm uppercase font-bold text-gray-600'
                    >Check Out
                    </label>
                    <input  className='text-sm bg-slate-100 border-2 w-full p-1 mt-1 placeholder-gray-600 rounded-md' 
                        type="date" 
                        value={checkout}
                        onChange={(e)=>setCheckout(e.target.value)}
                        required
                         />
                </div>
                <div className='mb-3'>
                    <label htmlFor="vehiculo"
                        className='block text-sm uppercase font-bold text-gray-600'
                    >Vehiculo y Patente
                    </label>
                    <input  className='text-sm uppercase bg-slate-100 border-2 w-full p-1 mt-1 placeholder-gray-600 rounded-md' 
                        type="text" id='vehiculo'
                        placeholder='Ingrese Marca y Patente'
                        value={vehiculo}
                        onChange={(e)=>setVehiculo((e.target.value).toUpperCase())} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="observaciones"
                        className='block text-sm uppercase font-bold text-gray-600'
                    >Observaciones
                    </label>
                    <textarea  className='text-sm uppercase bg-slate-100 border-2 w-full p-1 mt-1 placeholder-gray-600 rounded-md' 
                        type="text" id='observaciones'
                        placeholder='Ingrese alguna observaci??n'
                        value={observaciones}
                        onChange={(e)=>setObservaciones((e.target.value).toUpperCase())} />
                </div>
                <input className='text-sm bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all' 
                    type="submit" name="" 
                    value={huesped.id ? 'Editar Huesped' : 'Agregar Huesped'} />

            </form>
        </div>

    );
}

export default Formulario;
