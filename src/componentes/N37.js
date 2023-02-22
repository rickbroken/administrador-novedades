import React from "react";
import { useState, useEffect } from "react";
import TipoEtnia from './TipoEtnia';

const N37 = ({ setLinea })=>{
    const [tipoEtnia, setTipoEtnia] = useState("");


    const handleTipoEtnia= (e)=>{
      setTipoEtnia(e.target.value);
    }

    useEffect(()=>{
      setLinea(prevlinea => [
        {
        ...prevlinea[0],
          L_tpNovedad: "N37",
          N_V1: tipoEtnia,
          O_V2: "",
          P_V3: "",
          Q_V4: "",
          R_V5: "",
          S_V6: "",
          T_V7: ""
        }

      ]);
    }, [tipoEtnia,setLinea]);
    
    return(
        <>
          <fieldset>
            <legend align="right">Novedad: N37</legend>
            <div>
              <label htmlFor="tipoEtnia">Tipo de Etnia: </label>
              <select
                id="tipoEtnia"
                name="tipoEtnia"
                onChange={(e)=>{handleTipoEtnia(e)}}
                value={tipoEtnia}
              >
                <option value="">Seleccione una etnia</option>
                <TipoEtnia />
              </select>
            </div>
          </fieldset>
        </>
    )
}

export default N37;