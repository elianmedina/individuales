import { useState } from "react"


export const Septimo = () => {


    const [valor, setValor] = useState([]);
    const [valorA, setValorA] = useState([]);
    const [aviso, setAviso] = useState('')
    const [contador, setContador] = useState(1);



    const agregarSalarios = () => {



        const num = document.getElementById('salario').value

        setValor(list => [...list,num])

        const num_a = num * 1.08
        setValorA(listA => [...listA,num_a])

        document.getElementById('listaSalariosAumentados').style.display = 'none'

        setContador(contador + 1)
        console.log(contador)
    }

    const aumentodel8 = () => {

        if (contador >= 11) {
            document.getElementById('listaSalarios').style.display = 'none'
            document.getElementById('listaSalariosAumentados').style.display = 'block'
            document.getElementById('aviso').style.display = 'none'
        } else if(contador <= 10){
            document.getElementById('listaSalarios').style.display = 'none'
            document.getElementById('listaSalariosAumentados').style.display = 'none'
            setAviso('HAY MENOS DE 10 SALARIOS')
            document.getElementById('aviso').style.display = 'block'

        }




    }




    return (
        <div className="mt-5">
            <h1 class='titulos'>Punto 7.</h1>
            <span>Ingrese el sario: </span>
            <br />
            <input type='text' id='salario'></input>
            <br />
            <button onClick={agregarSalarios}>Agregar</button>
            <br />
            <br />
            <span>Aumentar salarios un 8%:</span>
            <br />
            <button onClick={aumentodel8}>Aumento</button>
            <br />
            <ol id='listaSalarios'>{
                (valor.map(
                    (num, key) => {
                        return <li key={key}>{num}</li>
                    }
                ))

            }
            </ol>
            <ol id='listaSalariosAumentados'>{
                (valorA.map(
                    (num, key) => {
                        return <li key={key}>{num}</li>
                    }
                ))

            }
            </ol>
            <ol id='aviso'>
                {aviso}
            </ol>

        </div>
    )
}