import React from "react";
import { useState, useEffect } from "react";
import TiposDocumentos from "./TiposDocumentos";

const N01 = ({ setLinea })=>{
    const [tipoDocumento, setTipoDocumento] = useState("");
    const [identificacion, setIdentificacion] = useState("");
    const [idAportante, setIdAportante] = useState("");
    const [actividadEconomica, setActividadEconomica] = useState("");



    const handleTipoDocumento= (e)=>{
      setTipoDocumento(e.target.value);
    }
    const handleIdentificacion= (e)=>{
      setIdentificacion(e.target.value);
      
    }
    const handleIdAportante= (e)=>{
      setIdAportante(e.target.value);
      
    }
    const handleActividadEconomica= (e)=>{
      setActividadEconomica(e.target.value);
      
    }

    useEffect(()=>{
      setLinea(prevlinea => [
        {
          ...prevlinea[0],
          L_tpNovedad: "N06",
          N_V1: tipoDocumento,
          O_V2: identificacion,
          P_V3: idAportante,
          Q_V4: actividadEconomica,
          R_V5: "",
          S_V6: "",
          T_V7: ""
        }
      ]);
    }, [tipoDocumento,identificacion,idAportante,actividadEconomica,setLinea]);
    
    return(
        <>
          <fieldset>
            <legend align="right">Novedad: N06</legend>
            <div className="mx-4 my-1">
              <label htmlFor="tipoDocumento">Tipo de documento: </label>
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
              <label htmlFor="identificacion">Numero de Documento: </label>
              <input
                id="identificacion"
                name="identificacion"
                onChange={(e)=>{handleIdentificacion(e)}}
                value={identificacion}
                placeholder="Escriba el numero de documento"
              />
            </div>
            <div className="mx-4 my-1">
              <label htmlFor="idAportante">N de identificacion de aportante: </label>
              <input
                id="idAportante"
                name="idAportante"
                onChange={(e)=>{handleIdAportante(e)}}
                value={idAportante}
                placeholder="Escriba el numero del aportante"
              />
            </div>
            <div className="mx-4 my-1">
              <label htmlFor="actividadEconomica">Actividad economica CIIU: </label>
              <input
                id="actividadEconomica"
                name="actividadEconomica"
                onChange={(e)=>{handleActividadEconomica(e)}}
                value={actividadEconomica}
                placeholder="Escriba el codigo CIIU"
              />
            </div>
          </fieldset>
        </>
    )
}

export default N01;