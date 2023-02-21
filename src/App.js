import React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import CambioMunicipio from './componentes/CambioMunicipio';
import ActualizacionDeDocumento from './componentes/ActualizacionDeDocumento';
import ActualizacionDeCNRC from './componentes/ActualizacionDeCNRC';
import * as XLSX from 'xlsx';

function App() {
  //definimos el estado de linea que a su vez se guarda en un array-
  //dentro los objetos
  const [linea, setLinea] = useState([{}]);


  //Definimos los estados que se guardaran en en el estado de linea
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


  //Definimos los estados para los departamento y municipios para-
  //compararlos y transformar de str a codigo de depart y municipio
  const [departamento2, setDepartamento2] = useState("");
  const [municipio2, setMunicipio2] = useState("");

  
  const handleDepartamento2 = (e) => {
    setDepartamento2(e.target.value);
    if(e.target.value === "Meta"){
      setDepartamento('50');
    } else if(e.target.value === "Tolima"){
      setDepartamento('73')
    }
  }

  const handleMunicipio2 = (e) => {
    setMunicipio2(e.target.value);
    if(e.target.value === "Ibague"){
      setMunicipio('001');
    } else if(e.target.value === "Alpujarra"){
      setMunicipio('024')
    } else if(e.target.value === "Alvarado"){
      setMunicipio('026')
    } else if(e.target.value === "Ambalema"){
      setMunicipio('030')
    } else if(e.target.value === "Anzoategui"){
      setMunicipio('043')
    } else if(e.target.value === "Armero (Guayabal)"){
      setMunicipio('055')
    } else if(e.target.value === "Ataco"){
      setMunicipio('067')
    } else if(e.target.value === "Cajamarca"){
      setMunicipio('124')
    } else if(e.target.value === "Carmen Apicala"){
      setMunicipio('148')
    } else if(e.target.value === "Casabianca"){
      setMunicipio('152')
    } else if(e.target.value === "Chaparral"){
      setMunicipio('168')
    } else if(e.target.value === "Coello"){
      setMunicipio('200')
    } else if(e.target.value === "Coyaima"){
      setMunicipio('217')
    } else if(e.target.value === "Cunday"){
      setMunicipio('226')
    } else if(e.target.value === "Dolores"){
      setMunicipio('236')
    } else if(e.target.value === "Espinal"){
      setMunicipio('268')
    } else if(e.target.value === "Falan"){
      setMunicipio('270')
    } else if(e.target.value === "Flandes"){
      setMunicipio('275')
    } else if(e.target.value === "Fresno"){
      setMunicipio('283')
    } else if(e.target.value === "Guamo"){
      setMunicipio('319')
    } else if(e.target.value === "Herveo"){
      setMunicipio('347')
    } else if(e.target.value === "Honda"){
      setMunicipio('349')
    } else if(e.target.value === "Icononzo"){
      setMunicipio('352')
    } else if(e.target.value === "Lerida"){
      setMunicipio('408')
    } else if(e.target.value === "Libano"){
      setMunicipio('411')
    } else if(e.target.value === "Mariquita"){
      setMunicipio('443')
    } else if(e.target.value === "Melgar"){
      setMunicipio('449')
    } else if(e.target.value === "Murillo"){
      setMunicipio('461')
    } else if(e.target.value === "Natagaima"){
      setMunicipio('483')
    } else if(e.target.value === "Ortega"){
      setMunicipio('504')
    } else if(e.target.value === "Palocabildo"){
      setMunicipio('520')
    } else if(e.target.value === "Piedras"){
      setMunicipio('547')
    } else if(e.target.value === "Planadas"){
      setMunicipio('555')
    } else if(e.target.value === "Prado"){
      setMunicipio('563')
    } else if(e.target.value === "Purificacion"){
      setMunicipio('585')
    } else if(e.target.value === "Rioblanco"){
      setMunicipio('616')
    } else if(e.target.value === "Roncesvalles"){
      setMunicipio('622')
    } else if(e.target.value === "Rovira"){
      setMunicipio('624')
    } else if(e.target.value === "Saldaña"){
      setMunicipio('671')
    } else if(e.target.value === "San Antonio"){
      setMunicipio('675')
    } else if(e.target.value === "San Luis"){
      setMunicipio('678')
    } else if(e.target.value === "Santa Isabel"){
      setMunicipio('686')
    } else if(e.target.value === "Suarez"){
      setMunicipio('770')
    } else if(e.target.value === "Valle de San Juan"){
      setMunicipio('854')
    } else if(e.target.value === "Venadillo"){
      setMunicipio('861')
    } else if(e.target.value === "Villahermosa"){
      setMunicipio('870')
    } else if(e.target.value === "Villarrica"){
      setMunicipio('873')
    } else if(e.target.value === "Puerto Gaitan"){
      setMunicipio('568')
    }
  }
  



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
  const handleMunicipio= (e)=>{
    setMunicipio(e.target.value);
  }

  

  console.log(departamento);



  const handleTipoNovedad= (e)=>{
    setTipoNovedad(e.target.value);
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
            onChange={(e)=>{handleDepartamento2(e)}}
            value={departamento2}
          >
            <option value="">Seleccione un departamento</option>
            <option value="Meta">Meta</option>
            <option value="Tolima">Tolima</option>
          </select>
        </div>
        <div>
          <label htmlFor="municipio">Municipio: </label>
          <select
            id="municipio"
            name="municipio"
            onChange={(e)=>{handleMunicipio2(e)}}
            value={municipio2}
          >
            <option value="">Seleccione un municipio</option>
            <option value="Puerto Gaitan">Puerto Gaitan</option>
            <option value="Ibague">Ibague</option>
            <option value="Alpujarra">Alpujarra</option>
            <option value="Alvarado">Alvarado</option>
            <option value="Ambalema">Ambalema</option>
            <option value="Anzoategui">Anzoategui</option>
            <option value="Armero (Guayabal)">Armero (Guayabal)</option>
            <option value="Ataco">Ataco</option>
            <option value="Cajamarca">Cajamarca</option>
            <option value="Carmen Apicala">Carmen Apicala</option>
            <option value="Casabianca">Casabianca</option>
            <option value="Chaparral">Chaparral</option>
            <option value="Coello">Coello</option>
            <option value="Coyaima">Coyaima</option>
            <option value="Cunday">Cunday</option>
            <option value="Dolores">Dolores</option>
            <option value="Espinal">Espinal</option>
            <option value="Falan">Falan</option>
            <option value="Flandes">Flandes</option>
            <option value="Fresno">Fresno</option>
            <option value="Guamo">Guamo</option>
            <option value="Herveo">Herveo</option>
            <option value="Honda">Honda</option>
            <option value="Icononzo">Icononzo</option>
            <option value="Lerida">Lerida</option>
            <option value="Libano">Libano</option>
            <option value="Mariquita">Mariquita</option>
            <option value="Melgar">Melgar</option>
            <option value="Murillo">Murillo</option>
            <option value="Natagaima">Natagaima</option>
            <option value="Ortega">Ortega</option>
            <option value="Palocabildo">Palocabildo</option>
            <option value="Piedras">Piedras</option>
            <option value="Planadas">Planadas</option>
            <option value="Prado">Prado</option>
            <option value="Purificacion">Purificacion</option>
            <option value="Rioblanco">Rioblanco</option>
            <option value="Roncesvalles">Roncesvalles</option>
            <option value="Rovira">Rovira</option>
            <option value="Saldaña">Saldaña</option>
            <option value="San Antonio">San Antonio</option>
            <option value="San Luis">San Luis</option>
            <option value="Santa Isabel">Santa Isabel</option>
            <option value="Suarez">Suarez</option>
            <option value="Valle de San Juan">Valle de San Juan</option>
            <option value="Venadillo">Venadillo</option>
            <option value="Villahermosa">Villahermosa</option>
            <option value="Villarrica">Villarrica</option>
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
