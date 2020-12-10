import React from 'react';

function Cita(props){

    const eliminarCita = () =>{
        props.eliminarCita(props.info.id);
    }
    const {fecha, hora, mascota, propietario, sintomas} = props.info


    return(
        <div className="media mt-3 col-md-6 d-block" >
            <div className="media-body">
                <h3 className="mt-0"> {mascota} </h3>
                <p className="card-text"><span>Nombre del Dueño: </span> {propietario} </p>
                <p className="card-text"><span>Fecha: </span> {fecha} </p>
                <p className="card-text"><span>Hora: </span> {hora} </p>
                <p className="card-text"><span>Sintomas: </span></p>
                <p className="card-text"> {sintomas} </p>

                <button onClick={eliminarCita} className="btn btn-danger ">
                    Borrar &times;
                </button>
            </div>
        </div>
    )
}

export default Cita;
