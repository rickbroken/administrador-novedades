import React from "react";
import { useState, useEffect } from "react";


const N17 = ({ setLinea })=>{

    const [tipoSexo, setTipoSexo] = useState("");



    const handleTipoSexo= (e)=>{
      const value = e.target.value.toUpperCase();
      setTipoSexo(value);
    }

    useEffect(()=>{
      setLinea(prevlinea => [
        {
          ...prevlinea[0],
          L_tpNovedad: "N17",
          N_V1: tipoSexo,
          O_V2: "",
          P_V3: "",
          Q_V4: "",
          R_V5: "",
          S_V6: "",
          T_V7: ""
        }
      ]);
    }, [tipoSexo,setLinea]);
    

    
    return(
        <> 
          <fieldset>
            <legend align="right">Novedad: N17</legend>
            <div className="mx-4 my-1">
              <label htmlFor="tipoSexo">Tipo de sexo: </label>
              <select
                id="tipoSexo"
                name="tipoSexo"
                onChange={(e)=>{handleTipoSexo(e)}}
                value={tipoSexo}
              >
                <option value="">Seleccione una opcion:</option>
                <option value="M">M</option>
                <option value="F">F</option>
              </select>
            </div>
          </fieldset>
        </>
    )
}

export default N17;