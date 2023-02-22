import React from "react";
import { useState, useEffect } from "react";


const N03 = ({ setLinea })=>{

    const [priApellido, setPriApellido] = useState("");
    const [segApellido, setSegApellido] = useState("");



    const handlePriApellido= (e)=>{
      const value = e.target.value.toUpperCase();
      setPriApellido(value);
    }
    const handleSegApellido= (e)=>{
      const value = e.target.value.toUpperCase();
      setSegApellido(value);
    }


    useEffect(()=>{
      setLinea(prevlinea => [
        {
          ...prevlinea[0],
          L_tpNovedad: "N03",
          N_V1: priApellido,
          O_V2: segApellido,
          P_V3: "",
          Q_V4: "",
          R_V5: "",
          S_V6: "",
          T_V7: ""
        }
      ]);
    }, [priApellido,segApellido,setLinea]);
    

    
    return(
        <> 
          <fieldset>
            <legend align="right">Novedad: N03</legend>
            <div>
              <label htmlFor="priApellido">Primer Apellido: </label>
              <input
                id="priApellido"
                name="priApellido"
                onChange={(e)=>{handlePriApellido(e)}}
                value={priApellido}
                placeholder="Escriba el primer apellido"
              />
            </div>
            <div>
              <label htmlFor="segApellido">Segundo Apellido: </label>
              <input
                id="segApellido"
                name="segApellido"
                onChange={(e)=>{handleSegApellido(e)}}
                value={segApellido}
                placeholder="Escriba el segundo apellido"
              />
            </div>
          </fieldset>
        </>
    )
}

export default N03;