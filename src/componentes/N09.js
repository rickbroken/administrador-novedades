import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";


const N09 = ({ setLinea })=>{

    const [fechaMuerte, setFechaMuerte] = useState("");

    //Formateamos el valor por defecto de el input date, a DD/MM/YYYY
    const [fecha, setFecha] = useState();
    useEffect(()=>{
      const fecha = fechaMuerte; //Varia el nombre del state segun el estado del componente
      const fechaMoment = moment(fecha);
      const fechaFormateada = fechaMoment.format("DD/MM/YYYY");
      setFecha(fechaFormateada);
    },[fechaMuerte]);



    const handleFechaMuerte= (e)=>{
      setFechaMuerte(e.target.value);
    }
    useEffect(()=>{
      setLinea(prevlinea => [
        {
          ...prevlinea[0],
          L_tpNovedad: "N09",
          N_V1: "",
          O_V2: "",
          P_V3: "",
          Q_V4: "",
          R_V5: "",
          S_V6: "",
          T_V7: ""
        }
      ]);
    }, [fecha,setLinea]);
    

    
    return(
        <> 
          <fieldset>
            <legend align="right">Novedad: N09</legend>
            <div className="mx-4 my-1">
              <label htmlFor="fechaMuerte">Fecha de Defuncion: </label>
              <input
                type="date"
                id="fechaMuerte"
                name="fechaMuerte"
                onChange={(e)=>{handleFechaMuerte(e)}}
                value={fechaMuerte}
              />
            </div>
          </fieldset>
        </>
    )
}

export default N09;