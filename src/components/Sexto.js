import { useState } from "react"


export const Sexto = () => {

    const [valor, setValor] = useState([]);



    const agregarNumerosImpares = () => {
        const num = document.getElementById('numero-limite').value
        setValor(Array.from({ length: num }).map((v, k) => k + 1).filter(v => v % 2 === 1))
    }




    return (
        <div className="mt-5">
            <h1 class='titulos'>Punto 6.</h1>
            <span>Ingrese el número: </span>
            <br/>
            <input type='text' id='numero-limite'></input>
            <br/>
            <span>Ver lista de números impares menores a ese número:</span>   
            <br/> 
            <button onClick={agregarNumerosImpares}>Ver</button>  
            <br/>
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