import React from "react";
import { useState, useEffect } from "react";
import moment from 'moment';



const ActualizacionDeCNRC = ({ setLinea })=>{

    const [tipoDocumento, setTipoDocumento] = useState("");
    const [identificacion, setIdentificacion] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [tipoCausal, setTipoCausal] = useState("");
    const [priNombre, setPriNombre] = useState("");
    const [segNombre, setSegNombre] = useState("");
    const [priApellido, setPriApellido] = useState("");
    const [segApellido, setSegApellido] = useState("");

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
    const handlePriNombre= (e)=>{
      const value = e.target.value.toUpperCase();
      setPriNombre(value);
    }
    const handleSegNombre= (e)=>{
      const value = e.target.value.toUpperCase();
      setSegNombre(value);
    }
    const handlePriApellido= (e)=>{
      const value = e.target.value.toUpperCase();
      setPriApellido(value);
    }
    const handleSegApellido= (e)=>{
      const value = e.target.value.toUpperCase();
      setSegApellido(value);
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
        },
        {
          ...prevlinea[1],
          L_tpNovedad: "N02",
          N_V1: priNombre,
          O_V2: segNombre,
          P_V3: "",
          Q_V4: "",
          R_V5: "",
          S_V6: "",
          T_V7: "",
          C_tipoDoc: tipoDocumento,
          D_identificacion: identificacion
        },
        {
          ...prevlinea[2],
          L_tpNovedad: "N03",
          N_V1: priApellido,
          O_V2: segApellido,
          P_V3: "",
          Q_V4: "",
          R_V5: "",
          S_V6: "",
          T_V7: "",
          C_tipoDoc: tipoDocumento,
          D_identificacion: identificacion,
          G_priNombre: priNombre,
          H_segNombre: segNombre
        }
      ]);
    }, [tipoDocumento,identificacion,fecha,tipoCausal,priNombre,segNombre,priApellido,segApellido,setLinea]);
    

    
    return(
        <> 
          <fieldset>
            <legend align="right">Novedad: N01</legend>
            <div className="mx-4 my-1">
              <label htmlFor="tipoDocumento">Tipo de documento: </label>
              <select
                id="tipoDocumento"
                name="tipoDocumento"
                onChange={(e)=>{handleTipoDocumento(e)}}
                value={tipoDocumento}
              >
                <option value="RC">RC</option>
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
              <label htmlFor="fechaNacimiento">Fecha de Nacimiento: </label>
              <input
                type="date"
                id="fechaNacimiento"
                name="fechaNacimiento"
                onChange={(e)=>{handleFechaNacimiento(e)}}
                value={fechaNacimiento}
              />
            </div>
            <div className="mx-4 my-1">
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
          <fieldset>
            <legend align="right">Novedad: N02</legend>
            <div className="mx-4 my-1">
              <label htmlFor="priNombre">Primer Nombre: </label>
              <input
                id="priNombre"
                name="priNombre"
                onChange={(e)=>{handlePriNombre(e)}}
                value={priNombre}
                placeholder="Escriba el primer Nombre"
              />
            </div>
            <div className="mx-4 my-1">
              <label htmlFor="segNombre">Segundo Nombre:: </label>
              <input
                id="segNombre"
                name="segNombre"
                onChange={(e)=>{handleSegNombre(e)}}
                value={segNombre}
                placeholder="Escriba el segundo nombre"
              />
            </div>
          </fieldset>
          <fieldset>
            <legend align="right">Novedad: N03</legend>
            <div className="mx-4 my-1">
              <label htmlFor="priApellido">Primer Apellido: </label>
              <input
                id="priApellido"
                name="priApellido"
                onChange={(e)=>{handlePriApellido(e)}}
                value={priApellido}
                placeholder="Escriba el primer apellido"
              />
            </div>
            <div className="mx-4 my-1">
              <label htmlFor="segApellido">Segundo Apellido: </label>
              <input
                id="segApellido"
                name="segApellido"
                onChange={(e)=>{handleSegApellido(e)}}
                value={segApellido}
                placeholder="Escriba el segundo apellido"
              />
            </div>
          </fieldset>
        </>
    )
}

export default ActualizacionDeCNRC;