import React from "react";
import { useState, useEffect } from "react";
import TiposDocumentos from "./TiposDocumentos";
import TipoAfiliado from "./TipoAfiliado";
import TipoParentesco from "./TipoParentesco";
import TipoDiscapacidad from "./TipoDiscapacidad";

const N32 = ({ setLinea })=>{
    const [tipoDocumento, setTipoDocumento] = useState("");
    const [identificacion, setIdentificacion] = useState("");
    const [tipoAfiliado, setTipoAfiliado] = useState("");
    const [tipoParentesco, setTipoParentesco] = useState("");
    const [tipoDiscapacidad, setTipoDiscapacidad] = useState("");



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
    const handleTipoDiscapacidad= (e)=>{
      setTipoDiscapacidad(e.target.value);
    }

    useEffect(()=>{
      setLinea(prevlinea => [
        {
          ...prevlinea[0],
          L_tpNovedad: "N32",
          N_V1: tipoDocumento,
          O_V2: identificacion,
          P_V3: tipoAfiliado,
          Q_V4: tipoParentesco,
          R_V5: tipoDiscapacidad,
          S_V6: "",
          T_V7: ""
        }
      ]);
    }, [tipoDocumento,identificacion,tipoAfiliado,tipoParentesco,tipoDiscapacidad,setLinea]);
    
    return(
        <>
          <fieldset>
            <legend align="right">Novedad: N32</legend>
            <div className="mx-4 my-1">
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
            <div className="mx-4 my-1">
              <label htmlFor="identificacion">Numero de Documento del cabeza de familia: </label>
              <input
                id="identificacion"
                name="identificacion"
                onChange={(e)=>{handleIdentificacion(e)}}
                value={identificacion}
                placeholder="Escriba el numero de documento"
              />
            </div>
            <div className="mx-4 my-1">
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
            <div className="mx-4 my-1">
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
            <div className="mx-4 my-1">
              <label htmlFor="tipoDiscapacidad">Afiliado en condicion de discapacidad: </label>
              <select
                id="tipoDiscapacidad"
                name="tipoDiscapacidad"
                onChange={(e)=>{handleTipoDiscapacidad(e)}}
                value={tipoDiscapacidad}
              >
                <option value="">Seleccione la opcion:</option>
                <TipoDiscapacidad />
              </select>
            </div>
          </fieldset>
        </>
    )
}

export default N32;