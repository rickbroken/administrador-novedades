import React from "react";
import { useState, useEffect } from "react";
import TiposDocumentos from "./TiposDocumentos";
import TipoCotizante from "./TipoCotizante";
import moment from "moment";

const N10 = ({ setLinea })=>{
    const [tipoDocumento, setTipoDocumento] = useState("");
    const [identificacion, setIdentificacion] = useState("");
    const [tipoCotizante, setTipoCotizante] = useState("");
    const [fechaVinculacion, setFechaVinculacion] = useState("");
    const [actividadEconomica, setActividadEconomica] = useState("");
    const [tipoNuevoCotizante, setTipoNuevoCotizante] = useState("");



    //Formateamos el valor por defecto de el input date, a DD/MM/YYYY
    const [fecha, setFecha] = useState();
    useEffect(()=>{
      const fecha = fechaVinculacion; //Varia el nombre del state segun el estado del componente
      const fechaMoment = moment(fecha);
      const fechaFormateada = fechaMoment.format("DD/MM/YYYY");
      setFecha(fechaFormateada);
    },[fechaVinculacion]);

    const handleTipoDocumento= (e)=>{
      setTipoDocumento(e.target.value);
    }
    const handleIdentificacion= (e)=>{
      setIdentificacion(e.target.value);
    }
    const handleTipoCotizante= (e)=>{
      setTipoCotizante(e.target.value);
    }
    const handleActividadEconomica= (e)=>{
      setActividadEconomica(e.target.value);
    }
    const handleFechaVinculacion= (e)=>{
      setFechaVinculacion(e.target.value);
    }
    const handleTipoNuevoCotizante= (e)=>{
      setTipoNuevoCotizante(e.target.value);
    }

    useEffect(()=>{
      setLinea(prevlinea => [
        {
          ...prevlinea[0],
          L_tpNovedad: "N10",
          N_V1: tipoDocumento,
          O_V2: identificacion,
          P_V3: tipoCotizante,
          Q_V4: fecha,
          R_V5: actividadEconomica,
          S_V6: tipoNuevoCotizante,
          T_V7: ""
        }
      ]);
    }, [tipoDocumento,identificacion,tipoCotizante,actividadEconomica,fecha,tipoNuevoCotizante]);
    
    return(
        <>
          <fieldset>
            <legend align="right">Novedad: N10</legend>
            <div>
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
            <div>
              <label htmlFor="identificacion">Numero de Documento del aportante: </label>
              <input
                id="identificacion"
                name="identificacion"
                onChange={(e)=>{handleIdentificacion(e)}}
                value={identificacion}
                placeholder="Escriba el numero de documento"
              />
            </div>
            <div>
              <label htmlFor="tipoCotizante">Tipo de Cotizante Actual: </label>
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
            <div>
              <label htmlFor="fechaVinculacion">Nueva fecha de Vinculacion: </label>
              <input
                type="date"
                id="fechaVinculacion"
                name="fechaVinculacion"
                onChange={(e)=>{handleFechaVinculacion(e)}}
                value={fechaVinculacion}
              />
            </div>
            <div>
              <label htmlFor="actividadEconomica">Nueva Actividad Economica CIIU del afiliado: </label>
              <input
                id="actividadEconomica"
                name="actividadEconomica"
                onChange={(e)=>{handleActividadEconomica(e)}}
                value={actividadEconomica}
                placeholder="Escriba el codigo CIIU"
              />
            </div>
            <div>
              <label htmlFor="tipoNuevoCotizante">Nuevo tipo de Cotizante: </label>
              <select
                id="tipoNuevoCotizante"
                name="tipoNuevoCotizante"
                onChange={(e)=>{handleTipoNuevoCotizante(e)}}
                value={tipoNuevoCotizante}
              >
                <option value="">Seleccione el tipo de Cotizante:</option>
                <TipoCotizante />
              </select>
            </div>
          </fieldset>
        </>
    )
}

export default N10;