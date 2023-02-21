import React from "react";
import { useState, useEffect } from "react";
import TiposDocumentos from "./TiposDocumentos";
import TipoAfiliado from "./TipoAfiliado";
import TipoParentesco from "./TipoParentesco";

const N07 = ({ setLinea })=>{
    const [tipoDocumento, setTipoDocumento] = useState("");
    const [identificacion, setIdentificacion] = useState("");
    const [tipoAfiliado, setTipoAfiliado] = useState("");
    const [tipoParentesco, setTipoParentesco] = useState("");
    const [actividadEconomica, setActividadEconomica] = useState("");



    const handleTipoDocumento= (e)=>{
      setTipoDocumento(e.target.value);
    }
    const handleIdentificacion= (e)=>{
      setIdentificacion(e.target.value);
    }
    const handleTipoAfiliado= (e)=>{
      setTipoAfiliado(e.target.value);
    }
    const handleTipoParentesco= (e)=>{
      setTipoParentesco(e.target.value);
    }
    const handleActividadEconomica= (e)=>{
      setActividadEconomica(e.target.value);
    }

    useEffect(()=>{
      setLinea(prevlinea => [
        {
          ...prevlinea[0],
          L_tpNovedad: "N07",
          N_V1: tipoDocumento,
          O_V2: identificacion,
          P_V3: tipoAfiliado,
          Q_V4: tipoParentesco,
          R_V5: actividadEconomica,
          S_V6: "",
          T_V7: ""
        }
      ]);
    }, [tipoDocumento,identificacion,tipoAfiliado,tipoParentesco,actividadEconomica]);
    
    return(
        <>
          <fieldset>
            <legend align="right">Novedad: N07</legend>
            <div>
              <label htmlFor="tipoDocumento">Tipo de documento del cabeza de familia: </label>
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
              <label htmlFor="identificacion">Numero de Documento del cabeza de familia: </label>
              <input
                id="identificacion"
                name="identificacion"
                onChange={(e)=>{handleIdentificacion(e)}}
                value={identificacion}
                placeholder="Escriba el numero de documento"
              />
            </div>
            <div>
              <label htmlFor="tipoAfiliado">Tipo de afiliado: </label>
              <select
                id="tipoAfiliado"
                name="tipoAfiliado"
                onChange={(e)=>{handleTipoAfiliado(e)}}
                value={tipoAfiliado}
              >
                <option value="">Seleccione el tipo de adiliado:</option>
                <TipoAfiliado />
              </select>
            </div>
            <div>
              <label htmlFor="tipoParentesco">Parentesco con el cabeza de familia: </label>
              <select
                id="tipoParentesco"
                name="tipoParentesco"
                onChange={(e)=>{handleTipoParentesco(e)}}
                value={tipoParentesco}
              >
                <option value="">Seleccione el tipo de parentesco:</option>
                <TipoParentesco />
              </select>
            </div>
            <div>
              <label htmlFor="actividadEconomica">Actividad economica CIIU del afiliado: </label>
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

export default N07;