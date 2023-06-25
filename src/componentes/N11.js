import React from "react";
import { useState, useEffect } from "react";
import TiposDocumentos from "./TiposDocumentos";
import TipoCotizante from "./TipoCotizante";

const N11 = ({ setLinea })=>{
    const [tipoDocumento, setTipoDocumento] = useState("");
    const [identificacion, setIdentificacion] = useState("");
    const [tipoCotizante, setTipoCotizante] = useState("");



    const handleTipoDocumento= (e)=>{
      setTipoDocumento(e.target.value);
    }
    const handleIdentificacion= (e)=>{
      setIdentificacion(e.target.value);
    }
    const handleTipoCotizante= (e)=>{
      setTipoCotizante(e.target.value);
    }

    useEffect(()=>{
      setLinea(prevlinea => [
        {
          ...prevlinea[0],
          L_tpNovedad: "N11",
          N_V1: tipoDocumento,
          O_V2: identificacion,
          P_V3: tipoCotizante,
          Q_V4: "",
          R_V5: "",
          S_V6: "",
          T_V7: ""
        }
      ]);
    }, [tipoDocumento,identificacion,tipoCotizante,setLinea]);
    
    return(
        <>
          <fieldset>
            <legend align="right">Novedad: N11</legend>
            <div className="mx-4 my-1">
              <label htmlFor="tipoDocumento">Tipo de documento del aportante: </label>
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
            <div className="mx-4 my-1">
              <label htmlFor="identificacion">Numero de Documento del aportante: </label>
              <input
                id="identificacion"
                name="identificacion"
                onChange={(e)=>{handleIdentificacion(e)}}
                value={identificacion}
                placeholder="Escriba el numero de documento"
              />
            </div>
            <div className="mx-4 my-1">
              <label htmlFor="tipoCotizante">Tipo de Cotizante: </label>
              <select
                id="tipoCotizante"
                name="tipoCotizante"
                onChange={(e)=>{handleTipoCotizante(e)}}
                value={tipoCotizante}
              >
                <option value="">Seleccione el tipo de Cotizante:</option>
                <TipoCotizante />
              </select>
            </div>
          </fieldset>
        </>
    )
}

export default N11;