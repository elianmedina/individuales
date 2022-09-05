import { useState } from "react"


export const Quinto = () => {

    const [valor, setValor] = useState([]);

    const lista_numeros = [];

    const agregarValoresaLaLista = () => {
        var num = document.getElementById('lista_num').value
        lista_numeros.push(num);
        
    }

    const ordenarMayorMenor = () => {
        setValor(lista_numeros.sort(function(a,b) {return a -b}))
    }


    return (
        <div className="mt-5">
            <h1 class='titulos'>Punto 5.</h1>
            <span>Ingrese el número: </span>
            <br/>
            <input type='text' id='lista_num'></input>
            <br/>
            <br/>     
            <button onClick={agregarValoresaLaLista}>Agregar</button>
            <br/>
            <br/> 
            <span >Ordenar números agregados</span>
            <br/> 
            <button onClick={ordenarMayorMenor}>Ordenar</button>
            <>{
                (valor.map(
                    (num,key)=>
                    {
                        return <li key={key}>{num}</li>
                    }
                ))
                
            }
            </>
            
        </div>
    )
}