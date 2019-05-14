import React, {useState, useEffect} from 'react';
import Header from './Header';
import AgregarCita from './AgregarCita';
import ListaCita from './ListaCita';


function App() {

  const [cita, setCitas] = useState([]);

  useEffect(()=>{

    const citasLS = localStorage.getItem('cita');
    console.log(citasLS);
    // if(citasLS){
    //   setCitas({
    //     cita: JSON.parse(citasLS)
    //   });
    // }

    localStorage.setItem(
      'cita',
      JSON.stringify(cita)
    )
  })

  const crearCita = (nuevaCita) => {
    const citas = [...cita, nuevaCita];

    console.log(citas);

    setCitas(citas);
  }

  const eliminarCita = id => {
    // obtener copia del estado
    const citasActuales = [...cita];

    //borrar elemento del estado
    const citas = citasActuales.filter(cita => cita.id !== id);

    //Actualizar el estado
    setCitas(citas);
  }

  return (
    <div className="container">
      <Header 
        titulo = "Administrador de Pacientes de Veterinaria"
      />
      <div className="row">
        <div className="col-md-6">
         <AgregarCita 
            crearCita = {crearCita}
          />
        </div>
        <div className="col-md-6">
          <ListaCita 
            cita = {cita}
            eliminarCita = {eliminarCita}
          />
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default App;
