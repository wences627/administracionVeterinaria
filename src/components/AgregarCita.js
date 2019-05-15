import React, {useRef, useState} from 'react';
import uuid from 'uuid';

const AgregarCita = (props)=>{

    const [error, setError] = useState(false);

    // creando los refs con hooks

    const nombreMascotaRef = useRef(null);
    const propietarioRef = useRef(null);
    const fechaRef = useRef(null);
    const horaRef = useRef(null);
    const sintomasRef = useRef(null);


    const crearNuevaCita =  e =>{
        e.preventDefault();

        const   mascota = nombreMascotaRef.current.value.trim(),
                propietario = propietarioRef.current.value.trim(),
                fecha = fechaRef.current.value,
                hora = horaRef.current.value,
                sintomas = sintomasRef.current.value.trim();
        
        if(mascota && propietario && fecha && hora && sintomas){
            const nuevaCita = {
                id: uuid(),
                mascota,
                propietario,
                fecha,
                hora,
                sintomas
            }
            props.crearCita(nuevaCita);
            setError(false);
        }else{
            setError(true);
        }
        // e.currentTarget.reset();
    }

    return(
        <div className="card mt-5">
            <div className="card-body">
                
                <h2 className= "card-title text-center mb-5">
                    Agrega tus citas aqui
                </h2>

                <form onSubmit={crearNuevaCita}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                        <div className="col-sm-8 col-lg-10">
                            <input type="text" ref={nombreMascotaRef} className="form-control" placeholder="Nombre Mascota" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                        <div className="col-sm-8 col-lg-10">
                            <input type="text" ref={propietarioRef} className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input type="date" ref={fechaRef} className="form-control" />
                        </div>                            

                        <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                        <div className="col-sm-8 col-lg-4">
                            <input type="time" ref={horaRef} className="form-control" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea ref={sintomasRef} className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Agregar</button>
                        </div>
                    </div>
                </form>
                {error ? <div className="alert alert-danger text-center"> Todos los campos son obligatorios </div> : ''}
            </div>
        </div>
    )
}

export default AgregarCita;
