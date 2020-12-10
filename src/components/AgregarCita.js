import React, {useRef, useState} from 'react';
import { v4 as uuidv4 }from 'uuid';

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
                id: uuidv4(),
                mascota,
                propietario,
                fecha,
                hora,
                sintomas
            }
            props.crearCita(nuevaCita);
            setError(false);
            e.currentTarget.reset();
        }else{
            setError(true);
        }
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
                            <input type="text" ref={nombreMascotaRef} className="form-control" placeholder="Nombre Mascota" required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                        <div className="col-sm-8 col-lg-10">
                            <input type="text" ref={propietarioRef} className="form-control"  placeholder="Nombre Dueño de la Mascota" required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-lg-2 col-form-label">Fecha</label>
                        <div className="col-lg-5  mb-4 mb-lg-0 mr-3">
                            <input type="date" ref={fechaRef} className="form-control" required />
                        </div>                            

                        {/* <label className=" col-lg-2 col-form-label">Hora</label>
                        <div className=" col-lg-4">
                            <input type="time" ref={horaRef} className="form-control" value='08:00:00'/>
                        </div> */}
                        <label htmlFor="appt-time" className="col-form-label mr-4">Hora </label>
                        <input id="appt-time" ref={horaRef} type="time" name="appt-time" step="2" defaultValue="08:00:00" min="08:00:00" max="18:00:00" required></input>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea ref={sintomasRef} className="form-control" required />
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
