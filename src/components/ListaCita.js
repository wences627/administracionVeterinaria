import React from 'react';
import Cita from './Cita';


const ListaCita = (props) => {

    const citas = props.cita;

    const mensaje = Object.keys(citas).length === 0 ? 'No hay Citas' : 'Administra tus Citas Aqui';

    return(
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">
                    {mensaje}
                </h2>
                <div className="lista-citas">
                    {Object.keys(props.cita).map(citas => (
                        <Cita 
                            key = {citas}
                            info = {props.cita[citas]}
                            eliminarCita = {props.eliminarCita}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ListaCita;