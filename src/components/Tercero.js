import { useState } from "react"


export const Tercero = () => {

    const [valor, setValor] = useState("");


    const max_manana = 12;
    const max_tarde = 18;
    const inter_noche1 = 24;
    const inter_noche2 = 0;
    const max_noche = 6;
    


    const calcularMensaje = () => {

        const hora_dia = document.getElementById('horaDia').value
        const nombre_User = document.getElementById('nombreUser').value


        if (hora_dia <= max_manana && hora_dia >= max_noche) {
           setValor("Buenos días, "+ nombre_User);
          } else if (hora_dia <= max_tarde && hora_dia > max_manana) {
            setValor("Buenas tardes, "+ nombre_User);
          } else if ((hora_dia <= inter_noche1 && hora_dia > max_tarde) || (hora_dia < max_noche && hora_dia >= inter_noche2)) {
            setValor("Buenos noches, "+ nombre_User);
          } else {
            setValor("Escriba una hora igual o mayor a 0 ó menor o igual a 24 ")
          }

      
          
    }


    return (
        <div className="mt-5">
            <h1 class='titulos'>Punto 3.</h1>
            <span>Ingrese su nombre: </span>
            <br/>
            <input type='text' id='nombreUser'></input>
            <br/>
            <br/>
            <span>Ingrese la hora en formato 24 hrs: </span>
            <br/>
            <input type='text' id='horaDia'></input>
            <button onClick={calcularMensaje}>Mensaje</button>
            <h3 class='respuestas'>{valor}</h3>
        </div>
    )
}