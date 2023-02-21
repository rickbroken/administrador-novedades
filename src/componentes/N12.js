import React from "react";
import { useState, useEffect } from "react";
import TipoDiscapacidad from "./TipoDiscapacidad";

const N12 = ({ setLinea })=>{
    const [tipoDiscapacidad, setTipoDiscapacidad] = useState("");



    const handleTipoDiscapacidad= (e)=>{
      setTipoDiscapacidad(e.target.value);
    }

    useEffect(()=>{
      setLinea(prevlinea => [
        {
          ...prevlinea[0],
          L_tpNovedad: "N12",
          N_V1: tipoDiscapacidad,
          O_V2: "",
          P_V3: "",
          Q_V4: "",
          R_V5: "",
          S_V6: "",
          T_V7: ""
        }
      ]);
    }, [tipoDiscapacidad]);
    
    return(
        <>
          <fieldset>
            <legend align="right">Novedad: N12</legend>
            <div>
              <label htmlFor="tipoDiscapacidad">Condicion de discapacidad: </label>
              <select
                id="tipoDiscapacidad"
                name="tipoDiscapacidad"
                onChange={(e)=>{handleTipoDiscapacidad(e)}}
                value={tipoDiscapacidad}
              >
                <option value="">Seleccione una opcion:</option>
                <TipoDiscapacidad />
              </select>
            </div>
          </fieldset>
        </>
    )
}

export default N12;