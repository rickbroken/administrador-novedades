import React from "react";
import { useState, useEffect } from "react";
import TipoCausalTerminacion from "./TipoCausalTerminacion";
import TipoEstadoAfiliacion from "./TipoEstadoAfiliacion";


const N14 = ({ setLinea })=>{

    const [estadoAfiliacion, setEstadoAfiliacion] = useState("");
    const [causalTerminacion, setCausalTerminacion] = useState("");



    const handleEstadoAfiliacion= (e)=>{
      setEstadoAfiliacion(e.target.value);
    }
    const handleCausalTerminacion= (e)=>{
      setCausalTerminacion(e.target.value);
    }

    useEffect(()=>{
      setLinea(prevlinea => [
        {
          ...prevlinea[0],
          L_tpNovedad: "N14",
          N_V1: estadoAfiliacion,
          O_V2: causalTerminacion,
          P_V3: "",
          Q_V4: "",
          R_V5: "",
          S_V6: "",
          T_V7: ""
        }
      ]);
    }, [estadoAfiliacion,causalTerminacion]);
    

    
    return(
        <> 
          <fieldset>
            <legend align="right">Novedad: N14</legend>
            <div>
              <label htmlFor="estadoAfiliacion">Estado de Afiliacion: </label>
              <select
                id="estadoAfiliacion"
                name="estadoAfiliacion"
                onChange={(e)=>{handleEstadoAfiliacion(e)}}
                value={estadoAfiliacion}
              >
                <option value="">Seleccione el nuevo estado de afiliacion:</option>
                <TipoEstadoAfiliacion />
              </select>
            </div>

            <div>
              <label htmlFor="causalTerminacion">Causal de terminacion: </label>
              <select
                id="causalTerminacion"
                name="causalTerminacion"
                onChange={(e)=>{handleCausalTerminacion(e)}}
                value={causalTerminacion}
              >
                <option value="">Seleccione la Causal de terminacion:</option>
                <TipoCausalTerminacion />
              </select>
            </div>
          </fieldset>
        </>
    )
}

export default N14;