import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

let totalDesayuno = 0

const Formulario = () => {

  const {huespedes, setHuespedes, huesped, setHuesped} = useContext(GlobalContext)

    const [nombre, setNombre] = useState('')
    const [habitacion, setHabitacion] = useState('')
    const [cantHuespedes, setCantHuespedes] = useState('')
    const [pension, setPension] = useState('desayuno')
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
            }else if (huesped.pension === 'pc'){
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
            // const planDesayuno = huespedes.find(h=>h.pension === 'desayuno')
            // console.log(planDesayuno)
            // if (planDesayuno === undefined) {
            //       totalDesayuno += Number(objetoHuesped.cantHuespedes)
            //       console.log(totalDesayuno)

            // }
            objetoHuesped.id = generarId()
            setHuespedes([...huespedes, objetoHuesped])
        }


       
        //Reiniciar Formulario
        setNombre('')
        setHabitacion('')
        setCantHuespedes('')
        setPension('desayuno')
        setCheckin('')
        setCheckout('')
        setVehiculo('')
        setObservaciones('')
        document.getElementById('desayuno').selected = true
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
                        <option value={'desayuno'} id='desayuno' >Desayuno</option>
                        <option value={'MAP'} id='map' >MAP (Desayuno Y Cena)</option>
                        <option value={'pc'} id= 'pc'>Pension Completa</option>
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
                    value={huesped.id ? 'Editar Huesped' : 'Agregar Huesped'} />

            </form>
        </div>

    );
}

export default Formulario;
