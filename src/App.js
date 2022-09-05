import { Cuarto } from "./components/Cuarto";
import { Primero } from "./components/Primero";
import { Segundo } from "./components/Segundo";
import { Tercero } from "./components/Tercero";
import { Quinto } from "./components/Quinto";
import { Sexto } from "./components/Sexto";
import { Septimo } from "./components/Septimo";
import { Octavo } from "./components/Octavo";
import { Noveno } from "./components/Noveno";
import './components/estilos.css'
import {Once} from "./components/Once"
import { Doce } from "./components/Doce";

function App() {
  return (

    <>

    <div class='titulos' id='encabezado'>
      TALLER 01 REALIZADO POR<br/>
      ELIÁN MEDINA NARANJO.
    </div>

      <hr className="mt-5" />
      <div class='number1'>
        <Primero />
      </div>
      <hr className="mt-5" />

      <div class='number2'>
      <Segundo />
      </div>

      <hr className="mt-5" />

      <div class='number3'>
      <Tercero />
      </div>

      <hr className="mt-5" />

      <div class='number4'>
      <Cuarto />
      </div>

      <hr className="mt-5" />

      <div class='number5'>
      <Quinto />
      </div>

      <hr className="mt-5" />

      <div class='number6'>
      <Sexto />
      </div>
      <hr className="mt-5" />

      <div class='number7'>
      <Septimo />
      </div>

      <hr className="mt-5" />

      <div class='number8'>
      <Octavo />
      </div>

      <hr className="mt-5" />

      <div class='number9'>
      <Noveno />
      </div>

      <hr className="mt-5" />


      <div class='number11'>
      <Once />
      </div>

      <hr className="mt-5" />

      <div class='number12'>
      <Doce />
      </div>

      <hr className="mt-5" />

    </>
  );
}

export default App;
