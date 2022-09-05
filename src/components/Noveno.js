


export const Noveno = () => {

    function generarTabla (){
        const div = document.getElementById("tabla")
        div.innerHTML = ''
        var table = document.createElement("table")
      
        
      
        const c = document.getElementById("columnas").value
        const f = document.getElementById("filas").value
        if(c <= 0 || f <= 0){
          var mensaje = document.createTextNode("Debe ser numero mayores o diferentes a 0")
          div.appendChild(mensaje)
        }else{
          for(let cont = 0; cont<f; cont++){
            var fila = document.createElement("tr")
            for(let cont2 = 0; cont2<c; cont2++){
             
              var msj = document.createTextNode(cont2)
              var cell = document.createElement("td")
              cell.appendChild(msj)
              fila.appendChild(cell)
      
            }
            table.appendChild(fila)
          }
          div.appendChild(table)
          table.setAttribute("border", "1")
        }
        
      }

    return (
        <div className="mt-5">
            <h1 class='titulos'>Ejercicio 9:</h1>
            <div>
                <span>Ingrese el tamaño de su tabla </span>
                <br/>
                <br/>
                <br/>
                <span>Filas:</span>
                <br/>
                <input type="text" id='filas'></input>
                <br/>
                <br/>
                <span>Columnas:</span>
                <br/>
                <input type="text" id='columnas'></input>
                <br/>
                <button onClick={generarTabla}>Generar</button>
            </div>
            
            <br/>
        <div id='tabla'></div>
        </div>
    )
}