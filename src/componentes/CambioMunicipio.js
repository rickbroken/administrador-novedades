import React from "react";
import { useState, useEffect } from "react";

const CambioMunicipio = ({ setLinea })=>{
    const [departamentoNuevo, setDepartamentoNuevo] = useState("");
    const [municipioNuevo, setMunicipioNuevo] = useState("");
    const [centroSalud, setCentroSalud] = useState("");



    const handleDepartamentoNuevo= (e)=>{
      setDepartamentoNuevo(e.target.value);
    }
    const handleMunicipioNuevo= (e)=>{
      setMunicipioNuevo(e.target.value);
      
    }
    const handleCentroSalud= (e)=>{
      setCentroSalud(e.target.value);
    }

    useEffect(()=>{
      setLinea(prevlinea => [
        {
          ...prevlinea[0],
          L_tpNovedad: "N4",
          N_V1: departamentoNuevo,
          O_V2: municipioNuevo,
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
    }, [departamentoNuevo,municipioNuevo,centroSalud]);
    
    return(
        <>
          <div>
          <hr/>
            <label htmlFor="departamentoNuevo">Nuevo Departamento: </label>
            <select
              id="departamentoNuevo"
              name="departamentoNuevo"
              onChange={(e)=>{handleDepartamentoNuevo(e)}}
              value={departamentoNuevo}
            >
              <option value="">Seleccione un departamento</option>
              <option value="Tolima">Tolima</option>
            </select>
          </div>
          <div>
            <label htmlFor="municipioNuevo">Nuevo Municipio: </label>
            <select
              id="municipioNuevo"
              name="municipioNuevo"
              onChange={(e)=>{handleMunicipioNuevo(e)}}
              value={municipioNuevo}
            >
              <option value="">Seleccione un municipio</option>
              <option value="Ortega">Ortega</option>
            </select>
          </div>
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
        </>
    )
}

export default CambioMunicipio;