import React from "react";
import { useState, useEffect } from "react";


const N02 = ({ setLinea })=>{

    const [priNombre, setPriNombre] = useState("");
    const [segNombre, setSegNombre] = useState("");



    const handlePriNombre= (e)=>{
      const value = e.target.value.toUpperCase();
      setPriNombre(value);
    }
    const handleSegNombre= (e)=>{
      const value = e.target.value.toUpperCase();
      setSegNombre(value);
    }

    useEffect(()=>{
      setLinea(prevlinea => [
        {
          ...prevlinea[0],
          L_tpNovedad: "N02",
          N_V1: priNombre,
          O_V2: segNombre,
          P_V3: "",
          Q_V4: "",
          R_V5: "",
          S_V6: "",
          T_V7: ""
        }
      ]);
    }, [priNombre,segNombre,setLinea]);
    

    
    return(
        <> 
          <fieldset>
            <legend align="right">Novedad: N02</legend>
            <div>
              <label htmlFor="priNombre">Primer Nombre: </label>
              <input
                id="priNombre"
                name="priNombre"
                onChange={(e)=>{handlePriNombre(e)}}
                value={priNombre}
                placeholder="Escriba el primer Nombre"
              />
            </div>
            <div>
              <label htmlFor="segNombre">Segundo Nombre:</label>
              <input
                id="segNombre"
                name="segNombre"
                onChange={(e)=>{handleSegNombre(e)}}
                value={segNombre}
                placeholder="Escriba el segundo nombre"
              />
            </div>
          </fieldset>
        </>
    )
}

export default N02;