import React from "react";
import { useState, useEffect } from "react";
import { handleMunicipio2 } from '../funciones/Municipios.js';
import { handleDepartamento2 } from '../funciones/Departamentos.js';
import MunicipiosTolima from './MuicipiosTolima';
import MunicipiosMeta from './MuicipiosMeta';
import Departamentos from "./Departamentos.js";
import MunicipiosRisaralda from "./MuicipiosRisaralda.js";

const N04 = ({ setLinea })=>{
    const [departamento, setDepartamento] = useState("");
    const [municipio, setMunicipio] = useState("");

    const [departamento2, setDepartamento2] = useState("");
    const [municipio2, setMunicipio2] = useState("");


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
        }
      ]);
    }, [departamento,municipio,setLinea]);
    
    return(
        <>
          <fieldset>
            <legend align="right">Novedad: N04</legend>
            <div className="mx-4 my-1">
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
            <div className="mx-4 my-1">
              <label htmlFor="municipioNuevo">Nuevo Municipio: </label>
              <select
                id="municipioNuevo"
                name="municipioNuevo"
                onChange={(e)=>{handleMunicipio2(e, setMunicipio, setMunicipio2)}}
                value={municipio2}
              >
                <option value="">Seleccione un municipio</option>
                {
                  departamento === "73" ? (
                    <MunicipiosTolima />
                  ) : departamento === "50" ? (
                    <MunicipiosMeta />
                  ) : departamento === "66" ? (
                    <MunicipiosRisaralda />
                  ) : "" // Retornar un valor por defecto si no se cumple ninguna condición
                }
              </select>
            </div>
          </fieldset>
        </>
    )
}

export default N04;