import React from "react";
import { useState, useEffect } from "react";
import TipoCausalTerminacion from "./TipoCausalTerminacion";
import moment from "moment";

const N33 = ({ setLinea })=>{

    const [fechaFin, setFechaFin] = useState("");
    const [causalTerminacion, setCausalTerminacion] = useState("");

    //Formateamos el valor por defecto de el input date, a DD/MM/YYYY
    const [fecha, setFecha] = useState();
    useEffect(()=>{
      const fecha = fechaFin; //Varia el nombre del state segun el estado del componente
      const fechaMoment = moment(fecha);
      const fechaFormateada = fechaMoment.format("DD/MM/YYYY");
      setFecha(fechaFormateada);
    },[fechaFin]);

    const handleFechaFin = (e)=>{
      setFechaFin(e.target.value);
    }
    const handleCausalTerminacion= (e)=>{
      setCausalTerminacion(e.target.value);
    }

    useEffect(()=>{
      setLinea(prevlinea => [
        {
          ...prevlinea[0],
          L_tpNovedad: "N33",
          N_V1: causalTerminacion,
          O_V2: fecha,
          P_V3: "",
          Q_V4: "",
          R_V5: "",
          S_V6: "",
          T_V7: ""
        }
      ]);
    }, [fecha,causalTerminacion]);
    

    
    return(
        <> 
          <fieldset>
            <legend align="right">Novedad: N33</legend>
              <div>
                <label htmlFor="causalTerminacion">Causal de terminacion: </label>
                <select
                  id="causalTerminacion"
                  name="causalTerminacion"
                  onChange={(e)=>{handleCausalTerminacion(e)}}
                  value={causalTerminacion}
                >
                  <option value="">Seleccione la Causal de terminacion:</option>
                  <TipoCausalTerminacion />
                </select>
              </div>
              <div>
                <label htmlFor="fechaFin">Fecha din del periodo solicitado: </label>
                <input
                  type="date"
                  id="fechaFin"
                  name="fechaFin"
                  onChange={(e)=>{handleFechaFin(e)}}
                  value={fechaFin}
                />
              </div>
          </fieldset>
        </>
    )
}

export default N33;