import './estilos.css'
import { useState } from "react"


export const Segundo = () => {

    const [valor, setValor] = useState("");




    const valor_menor = 100
    const valor_extra = 50


    const calcularValorLlamada = () => {

        const duracion_llamada_telefonia = document.getElementById('minutosllamada').value

        if (duracion_llamada_telefonia <= 3) {
            setValor (valor_menor);
          
          } else {
            setValor(((duracion_llamada_telefonia - 3) * valor_extra) + valor_menor); // Se resta 3 contar a partir de ahí los cantidad de minutos extra que pagaría
          }
          
    }


    return (
        <div className="mt-5">
            <h1 class='titulos'>Punto 2.</h1>
            <span >Ingrese duración de la llamada en minutos:</span>
            <br/>
            <input type='text' id='minutosllamada'></input>
            <button onClick={calcularValorLlamada}>Convertir</button>
            <h3 class='respuestas'>{valor}</h3>
        </div>
    )
}