import { useState } from "react"





export const Once = () => {


    const [nombre, setNombre] = useState("");
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);
    const [estadoFinal, setMensaje] = useState("")
    const [estudiante, setEstudiante] = useState()



    const PailaCalculadora = (a, b, c) => {
        let not1 = +a
        let not2 = +b
        let not3 = +c
        if (a < 0 || b < 0 || c < 0) {
            alert("Las notas no pueden ser negativas")
        } else {
            var mensaje;
            var suma = (not1 + not2 + not3)
            console.log(suma)
            var promedio = (suma / 3)
            console.log(promedio)

            if (promedio >= 3) {
                mensaje = "Gana la Materia"
            } else {
                mensaje = "Pierde la materia"
            }
            return (mensaje)

        }

    }

    const EstudiantetoString = (estudiante) => {
        return "Su nombre: " + estudiante.nombre + ", Nota 1: " + estudiante.Nota1 + ", Nota2 : " + estudiante.Nota2 + ", Nota3: " + estudiante.Nota3 + ", Estado: " + estudiante.estado;
    }




    const obtenerNombre = (evt) => {
        setNombre(evt.target.value)
    }
    const obtenerValor1 = (evt) => {
        setNota1(evt.target.value)
    }
    const obtenerValor2 = (evt) => {
        setNota2(evt.target.value)
    }
    const obtenerValor3 = (evt) => {
        setNota3(evt.target.value)
    }

    const crearEstudiante = (nombre, a, b, c) => {
        const estudiante = {
            nombre: nombre,
            Nota1: a,
            Nota2: b,
            Nota3: c,
            estado: "Ya valio",
        }
        estudiante.estado = PailaCalculadora(nota1, nota2, nota3)
        setEstudiante(estudiante)
        alert("Se creo el estudiante mi rey")
    }

    const mostrarEstudiante = (estudiante) => {
        setMensaje(EstudiantetoString(estudiante))
    }

    return (
        <>
            <div className="col-sm-5" id="espaciopunto11">

                <h1 class='titulos'>Punto 11.</h1>
                <br />
                <span >Digita el nombre</span>
                <br />
                <input type="text" value={nombre} onChange={(event) => obtenerNombre(event)} />
                <br />
                <br />
                <span >Primera Nota</span>
                <br />
                <input type="number" step="0.01" value={nota1} onChange={(event) => obtenerValor1(event)} />
                <br />
                <br />
                <span >Segunda Nota 
                    
                <button  onClick={() => crearEstudiante(nombre, nota1, nota2, nota3)}>Crear Estudiante</button>

                    <button  onClick={() => mostrarEstudiante(estudiante)}>Mostrar Estudiante</button></span>
                <br />
                <input type="number" step="0.01" value={nota2} onChange={(event) => obtenerValor2(event)} />
                <br />
                <br />
                <span>Tercera Nota</span>
                <br />
                <input type="number" step="0.01" value={nota3} onChange={(event) => obtenerValor3(event)} />
                <br />
                <br />

                <span >{estadoFinal}</span>

            </div>
        </>
    )

}


