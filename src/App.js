import React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import CambioMunicipio from './componentes/CambioMunicipio';
import ActualizacionDeDocumento from './componentes/ActualizacionDeDocumento';
import ActualizacionDeCNRC from './componentes/ActualizacionDeCNRC';
import * as XLSX from 'xlsx';
import './funciones/Municipios.js'
import { handleMunicipio2 } from './funciones/Municipios.js';
import { handleDepartamento2 } from './funciones/Departamentos.js';
import Municipios from './componentes/Muicipios';
import Departamentos from './componentes/Departamento';
import ActualizacionNombres from './componentes/ActualizacionNombres';
import ActualizacionApellidos from './componentes/ActualizacionApellidos';


function App() {
  //definimos el estado de linea que a su vez se guarda en un array-
  //dentro los objetos
  const [linea, setLinea] = useState([{}]);


  //Definimos los estados que se guardaran en en el estado de linea
  const [tipoNovedad, setTipoNovedad] = useState("");
  const [tipoDoc, setTipoDoc] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [priNombre, setPriNombre] = useState("");
  const [segNombre, setSegNombre] = useState("");
  const [priApellido, setPriApellido] = useState("");
  const [segApellido, setSegApellido] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [municipio, setMunicipio] = useState("");


  //Definimos los estados para los departamento y municipios para-
  //compararlos y transformar de str a codigo de depart y municipio
  const [departamento2, setDepartamento2] = useState("");
  const [municipio2, setMunicipio2] = useState("");

  

  //Definimos las funciones que cambiaran el estado de los inputs
  const handleTipoDoc= (e)=>{
    setTipoDoc(e.target.value);
  }
  const handleIdentificacion= (e)=>{
    setIdentificacion(e.target.value);
  }
  const handlePriNombre= (e)=>{
    const value = e.target.value.toUpperCase();
    setPriNombre(value);
  }
  const handleSegNombre= (e)=>{
    const value = e.target.value.toUpperCase();
    setSegNombre(value);
  }
  const handlePriApellido= (e)=>{
    const value = e.target.value.toUpperCase();
    setPriApellido(value);
  }
  const handleSegApellido= (e)=>{
    const value = e.target.value.toUpperCase();
    setSegApellido(value);
  }
  const handleFechaNacimiento= (e)=>{
    setFechaNacimiento(e.target.value);
  }

  
  //Funcion para limpiar el formulario
  const resetearFormulario = () => {
    setLinea([{}]);
    setTipoDoc('')
    setIdentificacion('');
    setPriNombre('');
    setSegNombre('');
    setPriApellido('');
    setSegApellido('');
    setFechaNacimiento('');
    setDepartamento('');
    setMunicipio('');
  }



  //Al cambiar el estado del input option de "tipo novedad", se resetean lo demas estados
  const handleTipoNovedad = (e)=>{
    setTipoNovedad(e.target.value);
    resetearFormulario();
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



  //Funciones para convertir el estado de linea a excel utilizando XLSX
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
            <option value="Actualizacion de Nombres">Actualizacion de Nombres</option>
            <option value="Actualizacion de Apellidos">Actualizacion de Apellidos</option>
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
            onChange={(e)=>handleDepartamento2(e, setDepartamento, setDepartamento2)}
            value={departamento2}
          >
            <option value="">Seleccione un departamento</option>
            <Departamentos />
          </select>
        </div>
        <div>
          <label htmlFor="municipio">Municipio: </label>
          <select
            id="municipio"
            name="municipio"
            onChange={(e)=>handleMunicipio2(e, setMunicipio, setMunicipio2)}
            value={municipio2}
          >
            <option value="">Seleccione un municipio</option>
            <Municipios />
          </select>
        </div>
        
        {
          tipoNovedad === "Cambio de DP y MP" ? (
            <CambioMunicipio setLinea={setLinea} />
          ) : tipoNovedad === "Actualizacion de documento" ? (
            <ActualizacionDeDocumento setLinea={setLinea} />
          ) : tipoNovedad === "Actualizacion de CN a RC" ? (
            <ActualizacionDeCNRC setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "Actualizacion de Nombres" ? (
            <ActualizacionNombres setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "Actualizacion de Apellidos" ? (
            <ActualizacionApellidos setLinea={setLinea} linea={linea} />
          ) : "" // Retornar un valor por defecto si no se cumple ninguna condición
        }
        
        
        <button type="submit">Enviar</button>
        <button type="reset" onClick={()=>{
            setTipoNovedad('');
            resetearFormulario();
          }}
          >
            Limpiar Formulario
        </button>
      </form>
    </div>
  );
}


export default App;
