
export const Doce = () =>{
    var text
    var estudiantes = []
    var aprobados, reprobados
    function añadirEstudiante(){
        var estudiante = new Object();
        estudiante.nombre = document.getElementById("nombreEstudiante_12").value
        estudiante.nota1 = document.getElementById("nota1").value
        estudiante.nota2 = document.getElementById("nota2").value 
        estudiante.nota3 = document.getElementById("nota3").value
        estudiante.notaFinal = (parseFloat(estudiante.nota1)+parseFloat(estudiante.nota2)+parseFloat(estudiante.nota3))/3

        console.log(estudiante)

        estudiantes.push(estudiante)
    }
     

    function calcularAprobados(){
        
        const div = document.getElementById("12")
        const table = document.getElementById("tableEstudiante")        // const span = document.createElement("span")

        estudiantes.forEach((estudiante) =>{
            var tr = document.createElement("tr")
            var nombre = document.createElement('td')
            nombre.appendChild(document.createTextNode(estudiante.nombre))
            var nota = document.createElement('td')
            nota.appendChild(document.createTextNode(estudiante.notaFinal))
            

            if (estudiante.notaFinal >= 3.0){
                // text = document.createTextNode("El estudiante "+estudiante.nombre+" paso la materia con " + estudiante.notaFinal)
                var aprueba = document.createElement('td')
                aprueba.appendChild(document.createTextNode("Si aprobo"))
        
            }else{
                var aprueba = document.createElement('td')
                aprueba.appendChild(document.createTextNode("No aprobo"))
            // text = document.createTextNode("El estudiante "+estudiante.nombre+" no paso la materia con "+ estudiante.notaFinal)
            }

            tr.appendChild(nombre)
            tr.appendChild(nota)
            tr.appendChild(aprueba)
            table.appendChild(tr)
    
        })

    }
        

    
    return(
        <>
        <div className="mt-5">
        <h1 class='titulos'>Punto 12.</h1>
        <br/>
        <span>Ingrese el nombre del estudiante</span>
        <br/>
        <input type='text' id="nombreEstudiante_12"></input>
        <br/>
        <br/>
        <span>Ingrese las tres notas</span>
        <br/>
        <input type='number' id='nota1'></input>
        <br/>
        <input type='number' id='nota2'></input>
        <br/>
        <input type='number' id='nota3'></input>
        <br/>
        <br/>
        
        </div>
        <button onClick={añadirEstudiante}>Añadir Estudiante</button>
        <br/>
        <button onClick={calcularAprobados}>Mostrar estudiantes</button>
        <br/>
        <br/>
        <table id="tableEstudiante" border="1">
            <tr>
                <th>Nombre</th>
                <th>Nota</th>
                <th>Aprobo</th>
            </tr>
        </table>
        </>
    )
}
    