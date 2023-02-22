import React from "react";
import { useState, useEffect } from "react";


const N38 = ({ setLinea })=>{

    const [comunidad, setComunidad] = useState("");


    const handleComunidad= (e)=>{
      const value = e.target.value.toUpperCase();
      setComunidad(value);
    }

    useEffect(()=>{
      setLinea(prevlinea => [
        {
          ...prevlinea[0],
          L_tpNovedad: "N38",
          N_V1: comunidad,
          O_V2: "",
          P_V3: "",
          Q_V4: "",
          R_V5: "",
          S_V6: "",
          T_V7: ""
        }
      ]);
    }, [comunidad,setLinea]);
    

    
    return(
        <> 
          <fieldset>
            <legend align="right">Novedad: N38</legend>
            <div>
              <label htmlFor="comunidad">Comunidad indígena o nombre del resguardo: </label>
              <input
                id="comunidad"
                name="comunidad"
                onChange={(e)=>{handleComunidad(e)}}
                value={comunidad}
                placeholder="Escriba la comunidad o resguardo"
              />
            </div>
          </fieldset>
        </>
    )
}

export default N38;