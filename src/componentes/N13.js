import React from "react";
import { useState, useEffect } from "react";
import TipoCausalTerminacion from "./TipoCausalTerminacion";
import moment from "moment";


const N13 = ({ setLinea })=>{
    const [tipoCausalTerminacion, setTipoCausalTerminacion] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");


    //Formateamos el valor por defecto de el input date, a DD/MM/YYYY
    const [fecha, setFecha] = useState();
    useEffect(()=>{
      const fecha = fechaInicio; //Varia el nombre del state segun el estado del componente
      const fechaMoment = moment(fecha);
      const fechaFormateada = fechaMoment.format("DD/MM/YYYY");
      setFecha(fechaFormateada);
    },[fechaInicio]);


    const handleTipoCausalTerminacion= (e)=>{
      setTipoCausalTerminacion(e.target.value);
    }
    const handleFechaInicio= (e)=>{
      setFechaInicio(e.target.value);
    }

    useEffect(()=>{
      setLinea(prevlinea => [
        {
          ...prevlinea[0],
          L_tpNovedad: "N13",
          N_V1: tipoCausalTerminacion,
          O_V2: fecha,
          P_V3: "",
          Q_V4: "",
          R_V5: "",
          S_V6: "",
          T_V7: ""
        }
      ]);
    }, [tipoCausalTerminacion,fecha,setLinea]);
    
    return(
        <>
          <fieldset>
            <legend align="right">Novedad: N13</legend>
            <div>
              <label htmlFor="tipoCausalTerminacion">Selecione Tipo causal determinacion: </label>
              <select
                id="tipoCausalTerminacion"
                name="tipoCausalTerminacion"
                onChange={(e)=>{handleTipoCausalTerminacion(e)}}
                value={tipoCausalTerminacion}
              >
                <option value="">Seleccione una opcion:</option>
                <TipoCausalTerminacion />
              </select>
            </div>
            <div>
              <label htmlFor="fechaInicio">Fecha de Nacimiento: </label>
              <input
                type="date"
                id="fechaInicio"
                name="fechaInicio"
                onChange={(e)=>{handleFechaInicio(e)}}
                value={fechaInicio}
              />
            </div>
          </fieldset>
        </>
    )
}

export default N13;