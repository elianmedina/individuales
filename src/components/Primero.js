import './estilos.css'
import { useState } from "react"


export const Primero = () => {

    const [valor, setValor] = useState('');

   

    
    const minute_value = 60;
    const hour_value = minute_value * 60;
    const day_value = hour_value * 60;

    var minutos = 0;
    var horas = 0;
    var segundos = 0;
    var dias = 0;

    const convertirSegundos = () => {

        const hora_en_secs = document.getElementById('segundos').value

        if (hora_en_secs >= day_value) { //si es mayor que la duracion de un dia
            dias = Math.floor(hora_en_secs / day_value);
            segundos = hora_en_secs - (dias * day_value);
            if (segundos >= hour_value) {
                horas = Math.floor(segundos / hour_value);
                segundos = segundos - (horas * hour_value);
                if (segundos >= minute_value) {
                    minutos = Math.floor(segundos / minute_value);
                    segundos = segundos - (minutos * minute_value);
                }
            }
        } else if (hora_en_secs >= hour_value) { //si es mayor que la duracion de una hora
            horas = Math.floor(hora_en_secs / hour_value);
            segundos = hora_en_secs - (horas * hour_value);
            if (segundos >= minute_value) {
                minutos = Math.floor(segundos / minute_value);
                segundos = segundos - (minutos * minute_value);
            }
        } else if (hora_en_secs >= hour_value) { //si es mayor que la duracion de una hora
            horas = Math.floor(hora_en_secs / hour_value);
            segundos = hora_en_secs - (horas * hour_value);
            if (segundos >= minute_value) {
                minutos = Math.floor(segundos / minute_value);
                segundos = segundos - (minutos * minute_value);
            }
        } else if (hora_en_secs >= minute_value) { //si es mayor que la duracion de un minuto

            minutos = Math.floor(hora_en_secs / minute_value);

            segundos = hora_en_secs - (minutos * minute_value);

        } else if (hora_en_secs < minute_value) { //si es menor que la duracion de un minuto
            segundos = hora_en_secs;
            minutos = 0;
            horas = 0;
        }

        setValor( hora_en_secs + " segundos, equivalen a: " +dias+" Dias, "+ horas + " horas, "+ minutos + " minutos y " + Math.abs(segundos) + " segundos.")
    }


    return (
        <div id='1' className="mt-5">
            <h1 class='titulos'>Punto 1.</h1>
            <span >Ingrese los segundos a calcular:</span>
            <br/>
            <input type='text' id='segundos'></input>
            <button onClick={convertirSegundos}>Calcular</button>
            <h3 class='respuestas'>{valor}</h3>
        </div>
    )
}