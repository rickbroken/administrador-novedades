import React, { useState, useEffect } from 'react';
import CambioMunicipio from './CambioMunicipio';
import ActualizacionDeDocumento from './ActualizacionDeDocumento';

function PrimerFormulario({linea, setLinea}) {

    const [tipoDoc, setTipoDoc] = useState("");
    const [identificacion, setIdentificacion] = useState("");
    const [priNombre, setPriNombre] = useState("");
    const [segNombre, setSegNombre] = useState("");
    const [priApellido, setPriApellido] = useState("");
    const [segApellido, setSegApellido] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [departamento, setDepartamento] = useState("");
    const [municipio, setMunicipio] = useState("");
    const [tipoNovedad, setTipoNovedad] = useState("");
  
    const handleTipoDoc= (e)=>{
      setTipoDoc(e.target.value);
    }
    const handleIdentificacion= (e)=>{
      setIdentificacion(e.target.value);
    }
    const handlePriNombre= (e)=>{
      setPriNombre(e.target.value);
    }
    const handleSegNombre= (e)=>{
      setSegNombre(e.target.value);
    }
    const handlePriApellido= (e)=>{
      setPriApellido(e.target.value);
    }
    const handleSegApellido= (e)=>{
      setSegApellido(e.target.value);
    }
    
    const handleFechaNacimiento= (e)=>{
      setFechaNacimiento(e.target.value);
    }
    const handleDepartamento= (e)=>{
      setDepartamento(e.target.value);
    }
    const handleMunicipio= (e)=>{
      setMunicipio(e.target.value);
    }

    const handleTipoNovedad= (e)=>{
      setTipoNovedad(e.target.value);
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      
      setLinea([
          {
            ...linea[0],
            tipoDoc: tipoDoc,
            identificacion: identificacion,
            priNombre: priNombre,
            segNombre: segNombre,
            priApellido: priApellido,
            segApellido: segApellido,
            fechaNacimiento: fechaNacimiento,
            departamento: departamento,
            municipio: municipio
          },
          {
            ...linea[1],
            tipoDoc: tipoDoc,
            identificacion: identificacion,
            priNombre: priNombre,
            segNombre: segNombre,
            priApellido: priApellido,
            segApellido: segApellido,
            fechaNacimiento: fechaNacimiento,
            departamento: departamento,
            municipio: municipio
          }
        ]);
      };
      
      return (
        <form onSubmit={(e)=>{handleSubmit(e)}}>
          <div>
            <label htmlFor="tpIdentificacion">Tipo de documento: </label>
            <select
              id="tpIdentificacion"
              name="tpIdentificacion"
              onChange={(e)=>{handleTipoDoc(e)}}
              value={tipoDoc}
            >
              <option value="">TP</option>
              <option value="CN">CN</option>
              <option value="RC">RC</option>
              <option value="TI">TI</option>
              <option value="CC">CC</option>
            </select>
          </div>
          <div>
            <label htmlFor="identificacion">Identificación: </label>
            <input
              type="text"
              id="identificacion"
              name="identificacion"
              onChange={(e)=>{handleIdentificacion(e)}}
              value={identificacion}
            />
          </div>
          <div>
            <label htmlFor="pri_apellido">Primer Apellido: </label>
            <input
              type="text"
              id="pri_apellido"
              name="pri_apellido"
              onChange={(e)=>{handlePriApellido(e)}}
              value={priApellido}
            />
          </div>
          <div>
            <label htmlFor="seg_apellido">Segundo Apellido: </label>
            <input
              type="text"
              id="seg_apellido"
              name="seg_apellido"
              onChange={(e)=>{handleSegApellido(e)}}
              value={segApellido}
            />
          </div>
          <div>
            <label htmlFor="pri_nombre">Primer Nombre: </label>
            <input
              type="text"
              id="pri_nombre"
              name="pri_nombre"
              onChange={(e)=>{handlePriNombre(e)}}
              value={priNombre}
            />
          </div>
          <div>
            <label htmlFor="seg_nombre">Segundo Nombre: </label>
            <input
              type="text"
              id="seg_nombre"
              name="seg_nombre"
              onChange={(e)=>{handleSegNombre(e)}}
              value={segNombre}
            />
          </div>
          <div>
            <label htmlFor="fecha_nacimiento">Fecha de Nacimiento: </label>
            <input
              type="date"
              id="fecha_nacimiento"
              name="fecha_nacimiento"
              onChange={(e)=>{handleFechaNacimiento(e)}}
              value={fechaNacimiento}
            />
          </div>
          <div>
            <label htmlFor="departamento">Departamento: </label>
            <select
              id="departamento"
              name="departamento"
              onChange={(e)=>{handleDepartamento(e)}}
              value={departamento}
            >
              <option value="">Seleccione un departamento</option>
              <option value="Meta">Meta</option>
            </select>
          </div>
          <div>
            <label htmlFor="municipio">Municipio: </label>
            <select
              id="municipio"
              name="municipio"
              onChange={(e)=>{handleMunicipio(e)}}
              value={municipio}
            >
              <option value="">Seleccione un municipio</option>
              <option value="Puerto Gaitan">Puerto Gaitan</option>
            </select>
          </div>
          <div>
          <hr/>
            <label htmlFor="tipoNovedad">Novedad a realizar: </label>
            <select
              id="tipoNovedad"
              name="tipoNovedad"
              onChange={(e)=>{handleTipoNovedad(e)}}
              value={tipoNovedad}
            >
              <option value="">Seleccione el tipo de novedad:</option>
              <option value="Cambio de DP y MP">Cambio de DP y MP</option>
              <option value="Actualizacion de documento">Actualizacion de documento</option>
            </select>
          </div>

          {
            tipoNovedad === "Cambio de DP y MP" ? (
              <CambioMunicipio setLinea={setLinea} />
            ) : tipoNovedad === "Actualizacion de documento" ? (
              <ActualizacionDeDocumento setLinea={setLinea} />
            ) : null // Retornar un valor por defecto si no se cumple ninguna condición
          }

          
  
          <button type="submit">Enviar</button>
          <button type="reset">Reset</button>
        </form>
    );
}

export default PrimerFormulario;