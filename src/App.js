import React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import CambioMunicipio from './componentes/CambioMunicipio';
import ActualizacionDeDocumento from './componentes/ActualizacionDeDocumento';
import ActualizacionDeCNRC from './componentes/ActualizacionDeCNRC';
import * as XLSX from 'xlsx';

function App() {
  const [linea, setLinea] = useState([{}]);

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

  useEffect(() => {
    setLinea(linea => {
      return linea.map(obj => ({
        ...obj,
        A_id: "",
        B_entidad: "EPSI06",
        M_tipoDoc: tipoDoc,
        D_identificacion: identificacion,
        E_priApellido: priApellido,
        F_segApellido: segApellido,
        G_priNombre: priNombre,
        H_segNombre: segNombre,
        I_fechaNacimiento: fechaNacimiento,
        J_departamento: departamento,
        K_municipio: municipio
      }));
    });
  }, [tipoDoc, identificacion, priApellido, segApellido, priNombre, segNombre, fechaNacimiento, departamento, municipio]);

  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    handleExport();
  };

  useEffect(() => {
    console.log("linea actualizada:", linea);
  }, [linea]);



  
  function convertToSheet(data) {
    const sheet = XLSX.utils.json_to_sheet(data);
    return sheet;
  }
  function exportToXLSX(sheet, filename) {
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, sheet, 'Sheet1');
    XLSX.writeFile(wb, filename);
  }
  function handleExport() {
    const data = linea;
    const sheet = convertToSheet(data);
    exportToXLSX(sheet, 'data.xlsx');
  }


  
  return (
    <div className='container'>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
      <div>
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
            <option value="Actualizacion de CN a RC">Actualizacion de CN a RC</option>
          </select>
          <hr/>
        </div>
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
        
        {
          tipoNovedad === "Cambio de DP y MP" ? (
            <CambioMunicipio setLinea={setLinea} />
          ) : tipoNovedad === "Actualizacion de documento" ? (
            <ActualizacionDeDocumento setLinea={setLinea} />
          ) : tipoNovedad === "Actualizacion de CN a RC" ? (
            <>
              <ActualizacionDeCNRC setLinea={setLinea} linea={linea} />
            </>
          ) : null // Retornar un valor por defecto si no se cumple ninguna condición
        }
        
        
        <button type="submit">Enviar</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}


export default App;
