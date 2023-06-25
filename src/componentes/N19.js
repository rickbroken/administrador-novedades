import React from "react";
import { useState, useEffect } from "react";


const N19 = ({ setLinea })=>{

    const [tipoZona, setTipoZona] = useState("");



    const handleTipoZona= (e)=>{
      const value = e.target.value.toUpperCase();
      setTipoZona(value);
    }

    useEffect(()=>{
      setLinea(prevlinea => [
        {
          ...prevlinea[0],
          L_tpNovedad: "N19",
          N_V1: tipoZona,
          O_V2: "",
          P_V3: "",
          Q_V4: "",
          R_V5: "",
          S_V6: "",
          T_V7: ""
        }
      ]);
    }, [tipoZona,setLinea]);
    

    
    return(
        <> 
          <fieldset>
            <legend align="right">Novedad: N19</legend>
            <div className="mx-4 my-1">
              <label htmlFor="tipoZona">Tipo de Zona: </label>
              <select
                id="tipoZona"
                name="tipoZona"
                onChange={(e)=>{handleTipoZona(e)}}
                value={tipoZona}
              >
                <option value="">Seleccione una opcion:</option>
                <option value="U">U</option>
                <option value="R">R</option>
              </select>
            </div>
          </fieldset>
        </>
    )
}

export default N19;