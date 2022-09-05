import { useState } from "react"


export const Cuarto = () => {

    const [valor, setValor] = useState("");


    const calcularRepetidos = () => {

        const num_uno = document.getElementById('primerNum').value
        const num_dos = document.getElementById('segundoNum').value
        const num_tres = document.getElementById('tercerNum').value
        
        var contador_num = 0;
        
        if (num_uno === num_dos) {
          contador_num++
          setValor("Hay: "+contador_num + " números repetidos")
        }
        if (num_uno === num_tres) {
          contador_num++
          setValor("Hay: "+contador_num + " números repetidos")
        }
        if (num_dos === num_tres) {
          contador_num++
          setValor("Hay: "+contador_num + " números repetidos")
        }
        if (contador_num === 1 || contador_num === 2) {
          contador_num = 2
          setValor("Hay: "+contador_num + " números repetidos")
        } else if (contador_num === 3) {
          contador_num = 3
          setValor("Hay: "+contador_num + " números repetidos")
        }else if ( contador_num === 0 ){
            setValor("Hay: "+contador_num + " números repetidos")
        }
    }


    return (
        <div className="mt-5">
            <h1 class='titulos'>Punto 4.</h1>
            <span>Ingrese el primer número: </span>
            <br/>
            <input type='text' id='primerNum'></input>
            <br/>
            <br/>
            <span>Ingrese el segundo número: </span>
            <br/>
            <input type='text' id='segundoNum'></input>
            <br/>
            <br/>
            <span>Ingrese el tercer número: </span>
            <br/>
            <input type='text' id='tercerNum'></input>
            <br/>
            <br/>
            <button onClick={calcularRepetidos}>Mensaje</button>
            <h3 class='respuestas'>{valor}</h3>
        </div>
    )
}