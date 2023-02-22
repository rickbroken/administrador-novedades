import React from "react";
import { useState, useEffect } from "react";
import TiposDocumentos from "./TiposDocumentos";
import moment from "moment";

const N01 = ({ setLinea })=>{
    const [tipoDocumento, setTipoDocumento] = useState("");
    const [identificacion, setIdentificacion] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [tipoCausal, setTipoCausal] = useState("");

    //Formateamos el valor por defecto de el input date, a DD/MM/YYYY
    const [fecha, setFecha] = useState();
    useEffect(()=>{
      const fecha = fechaNacimiento; //Varia el nombre del state segun el estado del componente
      const fechaMoment = moment(fecha);
      const fechaFormateada = fechaMoment.format("DD/MM/YYYY");
      setFecha(fechaFormateada);
    },[fechaNacimiento]);




    const handleTipoDocumento= (e)=>{
      setTipoDocumento(e.target.value);
    }
    const handleIdentificacion= (e)=>{
      setIdentificacion(e.target.value);
      
    }
    const handleFechaNacimiento= (e)=>{
      setFechaNacimiento(e.target.value);
    }
    const handleTipoCausal= (e)=>{
      setTipoCausal(e.target.value);
    }

    useEffect(()=>{
      setLinea(prevlinea => [
        {
          ...prevlinea[0],
          L_tpNovedad: "N01",
          N_V1: tipoDocumento,
          O_V2: identificacion,
          P_V3: fecha,
          Q_V4: tipoCausal,
          R_V5: "",
          S_V6: "",
          T_V7: ""
        }
      ]);
    }, [tipoDocumento,identificacion,fecha,tipoCausal,setLinea]);
    
    return(
        <>
          <fieldset>
            <legend align="right">Novedad: N01</legend>
            <div>
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
            <div>
              <label htmlFor="fechaNacimiento">Fecha de Nacimiento: </label>
              <input
                type="date"
                id="fechaNacimiento"
                name="fechaNacimiento"
                onChange={(e)=>{handleFechaNacimiento(e)}}
                value={fechaNacimiento}
              />
            </div>
            <div>
              <label htmlFor="tipoCausal">Tipo de causal: </label>
              <select
                id="tipoCausal"
                name="tipoCausal"
                onChange={(e)=>{handleTipoCausal(e)}}
                value={tipoCausal}
              >
                <option value="">Seleccione el tipo de causal:</option>
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
            </div>
          </fieldset>
        </>
    )
}

export default N01;