import React from "react";
import { useState, useEffect } from "react";
import TipoIps from "./TipoIps";

const N25 = ({ setLinea })=>{
    const [centroSalud, setCentroSalud] = useState("");


    const handleCentroSalud= (e)=>{
      setCentroSalud(e.target.value);
    }

    useEffect(()=>{
      setLinea(prevlinea => [
        {
        ...prevlinea[0],
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
    }, [centroSalud,setLinea]);
    
    return(
        <>
          <fieldset>
            <legend align="right">Novedad: N25</legend>
            <div className="mx-4 my-1">
              <label htmlFor="centro_salud">Centro de Salud: </label>
              <select
                id="centro_salud"
                name="centro_salud"
                onChange={(e)=>{handleCentroSalud(e)}}
                value={centroSalud}
              >
                <option value="">Seleccione un centro de salud</option>
                <TipoIps />
              </select>
            </div>
          </fieldset>
        </>
    )
}

export default N25;