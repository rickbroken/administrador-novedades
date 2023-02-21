import React from "react";
import { useState, useEffect } from "react";


const N09 = ({ setLinea })=>{

    const [fechaMuerte, setFechaMuerte] = useState("");



    const handleFechaMuerte= (e)=>{
      setFechaMuerte(e.target.value);
    }
    useEffect(()=>{
      setLinea(prevlinea => [
        {
          ...prevlinea[0],
          L_tpNovedad: "N09",
          N_V1: fechaMuerte,
          O_V2: "",
          P_V3: "",
          Q_V4: "",
          R_V5: "",
          S_V6: "",
          T_V7: ""
        }
      ]);
    }, [fechaMuerte]);
    

    
    return(
        <> 
          <fieldset>
            <legend align="right">Novedad: N09</legend>
            <div>
              <label htmlFor="fechaMuerte">Fecha de Defuncion: </label>
              <input
                type="date"
                id="fechaMuerte"
                name="fechaMuerte"
                onChange={(e)=>{handleFechaMuerte(e)}}
                value={fechaMuerte}
              />
            </div>
          </fieldset>
        </>
    )
}

export default N09;