import React from "react";
import { cambiarDatosDelNegocio} from "../tools/funciones"
import {useState} from 'react'

export default function Pruebas (){

    const [probando, setProbando] = useState('')

    return(
        <>
        <h2>CAMBIAR INFO DEL NEGOCIO</h2>
        <input type="text" placeholder="email" onChange={(e) => setProbando(e.target.value)}/>
        <button onClick={(e) => cambiarDatosDelNegocio({instagram: probando})}>send</button>
        </>
    )
}