import { useState } from "react"


export const Octavo = () => {


    const [valor, setValor] = useState([]);
    const [valorDividio, setValorD] = useState([]);
    const [randoms, setRandoms] = useState([])

    var arreglo_numeros_aleatorios = []
    var arreglo_numeros_dividos = []
    const randomer = []








    const generalNumRandom = () => {
       
        document.getElementById('listaNumerosRandomDivididos').style.display = 'none'

        document.getElementById('avisoR').style.display = 'none'

        console.log(arreglo_numeros_aleatorios)
    }

    const dividirLista = () => {

        function random(min, max) {
            return Math.floor((Math.random() * (max - min + 1)) + min);
        }

        arreglo_numeros_aleatorios = [random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10), random(1, 10)]


        const num = document.getElementById('numeroDivisor').value

        const valor_elegido = arreglo_numeros_aleatorios[num - 1]

        
        if (num <= 0 || num > arreglo_numeros_aleatorios.length - 1) {
            document.getElementById('listaNumerosRandomDivididos').style.display = 'none'
            document.getElementById('avisoR').style.display = 'block'
        } else {

            for (var ab = 0; ab < arreglo_numeros_aleatorios.length; ab++) {
                arreglo_numeros_dividos.push((arreglo_numeros_aleatorios[ab] / valor_elegido).toFixed(2));

            }
            document.getElementById('listaNumerosRandomDivididos').style.display = 'block'
            document.getElementById('avisoR').style.display = 'none'
            setValorD(arreglo_numeros_dividos)
        }



        console.log("lista Original   " + arreglo_numeros_aleatorios)
    }
    return (
        <div className="mt-5">
            <h1 class='titulos'>Punto 8.</h1>
            
            <span>Ingrese la posición entre 1 y 10: </span>
            <br />
            <input type="text" id='numeroDivisor'></input>
            <br />
            <button onClick={dividirLista}>Dividir</button>
            <br />
            <br />
            <ol id='listaNumerosRandomDivididos'>{
                (valorDividio.map(
                    (num, key) => {
                        return <li key={key}>{num}</li>
                    }
                ))

            }
            </ol>
            <span id='avisoR'>El elemento que está indicando, no se encuentra en la lista.</span>


        </div>
    )
}