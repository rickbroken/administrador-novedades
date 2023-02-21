import React from "react";
import { useState, useEffect } from "react";
import TiposDocumentos from "./TiposDocumentos";

const N05 = ({ setLinea })=>{
    const [tipoDocumento, setTipoDocumento] = useState("");
    const [identificacion, setIdentificacion] = useState("");



    const handleTipoDocumento= (e)=>{
      setTipoDocumento(e.target.value);
    }
    const handleIdentificacion= (e)=>{
      setIdentificacion(e.target.value);
      
    }

    useEffect(()=>{
      setLinea(prevlinea => [
        {
          ...prevlinea[0],
          L_tpNovedad: "N05",
          N_V1: tipoDocumento,
          O_V2: identificacion,
          P_V3: "",
          Q_V4: "",
          R_V5: "",
          S_V6: "",
          T_V7: ""
        }
      ]);
    }, [tipoDocumento,identificacion]);
    
    return(
        <>
          <fieldset>
            <legend align="right">Novedad: N05</legend>
            <div>
              <label htmlFor="tipoDocumento">Tipo de documento del cotizante principal: </label>
              <select
                id="tipoDocumento"
                name="tipoDocumento"
                onChange={(e)=>{handleTipoDocumento(e)}}
                value={tipoDocumento}
              >
                <option value="">Seleccione el tipo de documento:</option>
                <TiposDocumentos />
              </select>
            </div>
            <div>
              <label htmlFor="identificacion">Numero de Documento: </label>
              <input
                id="identificacion"
                name="identificacion"
                onChange={(e)=>{handleIdentificacion(e)}}
                value={identificacion}
                placeholder="Escriba el numero de documento"
              />
            </div>
          </fieldset>
        </>
    )
}

export default N05;