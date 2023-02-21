import React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import { handleMunicipio2 } from './funciones/Municipios.js';
import { handleDepartamento2 } from './funciones/Departamentos.js';
import CambioMunicipio from './componentes/CambioMunicipio';
import ActualizacionDeCNRC from './componentes/ActualizacionDeCNRC';
import * as XLSX from 'xlsx';
import MunicipiosTolima from './componentes/MuicipiosTolima';
import MunicipiosMeta from './componentes/MuicipiosMeta';
import Departamentos from './componentes/Departamento';
import TiposDocumentos from './componentes/TiposDocumentos';
import N01 from './componentes/N01';
import N02 from './componentes/N02';
import N03 from './componentes/N03';
import N04 from './componentes/N04';
import N05 from './componentes/N05';
import N06 from './componentes/N06';
import N07 from './componentes/N07';
import N08 from './componentes/N08';
import N09 from './componentes/N09';
import N10 from './componentes/N10';
import N11 from './componentes/N11';
import N12 from './componentes/N12';
import N13 from './componentes/N13';
import N14 from './componentes/N14';
import N17 from './componentes/N17';
import N19 from './componentes/N19';
import N21 from './componentes/N21';
import N25 from './componentes/N25';


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
            <option value="Cambio de DP y MP">Cambio de DP y MP "N04-N25"</option>
            <option value="Actualizacion de CN a RC">Actualizacion de CN a RC "N01-N02-N03"</option>
            <option value="N01">N01 - Actualizacion de documento</option>
            <option value="N02">N02 - Actualizacion de Nombres</option>
            <option value="N03">N03 - Actualizacion de Apellidos</option>
            <option value="N04">N04 - Actualizacion de Municipio</option>
            <option value="N05">N05 - Actualizacion de segundo cotz a cotizante principal</option>
            <option value="N06">N06 - Adicion de relacion con un aporte o react. en la misma entidad</option>
            <option value="N07">N07 - Inclucion de adiliado a un group familiar, camvio de condicion de beneficiario</option>
            <option value="N08">N08 - Actualizacion de beneficiario a otro tipo de beneficiario o cot principal</option>
            <option value="N09">N09 - Retiro por Muerte</option>
            <option value="N10">N10 - Actualizacion de relacion laboral</option>
            <option value="N11">N11 - Finalizacion de relacion con un aporte</option>
            <option value="N12">N12 - Condicion de discapacidad</option>
            <option value="N13">N13 - Novedad de retiro en BDUA</option>
            <option value="N14">N14 - Estado de Afiliacion</option>
            <option value="N17">N17 - Cambiar tipo sexo del afiliado</option>
            <option value="N19">N19 - Cambiar zona del afiliado</option>
            <option value="N21">N21 - Tipo de poblacion especial</option>
            <option value="N25">N25 - Cambio de IPS Primaria</option>
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
            <option value="">Seleccione el tipo de documento:</option>
            <TiposDocumentos />
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
          {
            departamento === "73" ? (
              <MunicipiosTolima />
            ) : departamento === "50" ? (
              <MunicipiosMeta />
            ) : "" // Retornar un valor por defecto si no se cumple ninguna condición
          }
          </select>
        </div>
        
        {
          tipoNovedad === "Cambio de DP y MP" ? (
            <CambioMunicipio setLinea={setLinea} />
          ) : tipoNovedad === "N01" ? (
            <N01 setLinea={setLinea} />
          ) : tipoNovedad === "Actualizacion de CN a RC" ? (
            <ActualizacionDeCNRC setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N02" ? (
            <N02 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N03" ? (
            <N03 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N09" ? (
            <N09 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N05" ? (
            <N05 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N04" ? (
            <N04 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N06" ? (
            <N06 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N07" ? (
            <N07 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N08" ? (
            <N08 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N10" ? (
            <N10 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N11" ? (
            <N11 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N12" ? (
            <N12 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N13" ? (
            <N13 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N14" ? (
            <N14 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N17" ? (
            <N17 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N19" ? (
            <N19 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N21" ? (
            <N21 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N25" ? (
            <N25 setLinea={setLinea} linea={linea} />
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
