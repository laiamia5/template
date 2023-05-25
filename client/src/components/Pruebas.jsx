import React, { useEffect } from "react";
import { cambiarDatosDelNegocio, contactarseConElNegocio, subscripcion} from "../tools/funciones"
import { useSelector , useDispatch} from 'react-redux'
import { obtenerProductos } from "../redux/actions";
import {useState} from 'react'

export default function Pruebas (){
     // OBTENER REDUX------------------------
     let productos = useSelector(state => state.productos)
     console.log(productos)
     const [productosderedux, setProductos] = useState(...productos)
    useEffect(() => {
        setProductos(productos[0])
    }, [productos])

    //datos del negocio-----------------------------------------------------------------------------OK
    const [probando, setProbando] = useState({})
    const cambiarDatos = (prop, value) => {
        let copia = probando
        copia[prop] = value
        setProbando({...copia})
        console.log(copia)
    }
    //contactarse con el negocio---------------------------------------------------------------OK
    const [datosMensaje, setDatosMensaje] = useState({
        asunto: null,
        email : null,
        mensaje: null
    })
    //subscripcion------------------------------------------------------------------------------OK
    const [datosSubscripcion, setDatosSubscripcion] = useState({
        nombre: null,
        email : null
    })

   

    return(
        <>
        <h2>CAMBIAR INFO DEL NEGOCIO</h2>
        <input type="text" placeholder="email" name='email' onChange={(e) => cambiarDatos(e.target.name, e.target.value)}/>
        <button onClick={(e) => cambiarDatosDelNegocio(probando)}>send</button>

        <input type="text" placeholder="instagram" name='instagram' onChange={(e) => cambiarDatos(e.target.name, e.target.value)}/>
        <button onClick={(e) => cambiarDatosDelNegocio(probando)}>send</button>
     
        <h2>CONTACTARSE CON EL NEGOCIO</h2>
            <form action="" onSubmit={() => contactarseConElNegocio(datosMensaje)}>
                <input type="text" placeholder="email" name='email' onChange={(e) => setDatosMensaje({...datosMensaje, email : e.target.value})}/>
                <input type="text" placeholder="asunto" name='asunto' onChange={(e) => setDatosMensaje({...datosMensaje, asunto : e.target.value})}/>
                <input type="text" placeholder="mensaje" name='mensaje' onChange={(e) => setDatosMensaje({...datosMensaje, mensaje : e.target.value})}/>
                <button>send</button>
            </form>

        <h2>SUBSCRIBIRSE</h2>
            <form action="" onSubmit={() => subscripcion(datosSubscripcion)}>
                <input type="text" placeholder="email" name='email' onChange={(e) => setDatosSubscripcion({...datosSubscripcion, email : e.target.value})}/>
                <input type="text" placeholder="nombre" name='nombre' onChange={(e) => setDatosSubscripcion({...datosSubscripcion, nombre : e.target.value})}/>
                <button>send</button>
            </form>
        {
        productosderedux?.map((e, index) =>{
            console.log(productosderedux)
            return(
                <div style={{marginBottom: '10px', backgroundColor: '#FFF3FC'}} key={index}>
                   {String(e)}
                </div>
            ) 
        })}

        </>
    )
}