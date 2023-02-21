import React from "react";
import { useState, useEffect } from "react";
import { handleMunicipio2 } from '../funciones/Municipios.js';
import { handleDepartamento2 } from '../funciones/Departamentos.js';
import Municipios from "./Muicipios.js";
import Departamentos from "./Departamento.js";

const CambioMunicipio = ({ setLinea })=>{
    const [departamento, setDepartamento] = useState("");
    const [municipio, setMunicipio] = useState("");
    const [centroSalud, setCentroSalud] = useState("");

    const [departamento2, setDepartamento2] = useState("");
    const [municipio2, setMunicipio2] = useState("");



    const handleCentroSalud= (e)=>{
      setCentroSalud(e.target.value);
    }

    useEffect(()=>{
      setLinea(prevlinea => [
        {
          ...prevlinea[0],
          L_tpNovedad: "N04",
          N_V1: departamento,
          O_V2: municipio,
          P_V3: "",
          Q_V4: "",
          R_V5: "",
          S_V6: "",
          T_V7: ""
        },
        {
        ...prevlinea[1],
          L_tpNovedad: "N25",
          N_V1: centroSalud,
          O_V2: "",
          P_V3: "",
          Q_V4: "",
          R_V5: "",
          S_V6: "",
          T_V7: ""
        }

      ]);
    }, [departamento,municipio,centroSalud]);
    
    return(
        <>
          <fieldset>
            <legend align="right">Novedad: N04</legend>
            <div>
              <label htmlFor="departamentoNuevo">Nuevo Departamento: </label>
              <select
                id="departamentoNuevo"
                name="departamentoNuevo"
                onChange={(e)=>handleDepartamento2(e, setDepartamento, setDepartamento2)}
                value={departamento2}
              >
                <option value="">Seleccione un departamento</option>
                <Departamentos />
              </select>
            </div>
            <div>
              <label htmlFor="municipioNuevo">Nuevo Municipio: </label>
              <select
                id="municipioNuevo"
                name="municipioNuevo"
                onChange={(e)=>{handleMunicipio2(e, setMunicipio, setMunicipio2)}}
                value={municipio2}
              >
                <option value="">Seleccione un municipio</option>
                <Municipios />
              </select>
            </div>
          </fieldset>
          <fieldset>
            <legend align="right">Novedad: N25</legend>
            <div>
              <label htmlFor="centro_salud">Centro de Salud: </label>
              <select
                id="centro_salud"
                name="centro_salud"
                onChange={(e)=>{handleCentroSalud(e)}}
                value={centroSalud}
              >
                <option value="">Seleccione un centro de salud</option>
                <option value="Previs IPS">Previs IPS</option>
                <option value="Matsuludani IPS">Matsuludani IPS</option>
              </select>
            </div>
          </fieldset>
        </>
    )
}

export default CambioMunicipio;