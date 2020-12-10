import React, {useState, useEffect} from 'react';
import Header from './Header';
import AgregarCita from './AgregarCita';
import ListaCita from './ListaCita';


function App() {

  const citasLS = localStorage.getItem('cita');
  const pCitas = citasLS ? JSON.parse(citasLS) : [];
  const [citas, setCitas] = useState(pCitas);
  useEffect(()=>{
      localStorage.setItem(
        'cita',
        JSON.stringify(citas))
      
  }, [citas])

  const crearCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  }

  const eliminarCita = id => {
    //Actualizar el estado
    setCitas(citas.filter(cita => cita.id !== id));
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
            cita = {citas}
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
