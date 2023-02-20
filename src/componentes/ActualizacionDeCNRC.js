import React from "react";
import { useState, useEffect } from "react";

const ActualizacionDeCNRC = ({ setLinea })=>{
    const [tipoDocumento, setTipoDocumento] = useState("");
    const [identificacion, setIdentificacion] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [tipoCausal, setTipoCausal] = useState("");
    const [priNombree, setPriNombre] = useState("");
    const [segNombree, setSegNombre] = useState("");
    const [priApellidoo, setPriApellido] = useState("");
    const [segApellidoo, setSegApellido] = useState("");



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
      setPriNombre(e.target.value);
    }
    const handleSegNombre= (e)=>{
      setSegNombre(e.target.value);
    }
    const handlePriApellido= (e)=>{
      setPriApellido(e.target.value);
    }
    const handleSegApellido= (e)=>{
      setSegApellido(e.target.value);
    }

    useEffect(()=>{
      setLinea(prevlinea => [
        {
          ...prevlinea[0],
          L_tpNovedad: "N1",
          N_V1: tipoDocumento,
          O_V2: identificacion,
          P_V3: fechaNacimiento,
          Q_V4: tipoCausal,
          R_V5: "",
          S_V6: "",
          T_V7: ""
        },
        {
          ...prevlinea[1],
          L_tpNovedad: "N2",
          N_V1: priNombree,
          O_V2: segNombree,
          P_V3: "",
          Q_V4: "",
          R_V5: "",
          S_V6: "",
          T_V7: ""
        },
        {
          ...prevlinea[2],
          L_tpNovedad: "N3",
          N_V1: priApellidoo,
          O_V2: segApellidoo,
          P_V3: "",
          Q_V4: "",
          R_V5: "",
          S_V6: "",
          T_V7: "",
          G_priNombre: priNombree,
          H_segNombre: segNombree
        }
      ]);
    }, [tipoDocumento,identificacion,fechaNacimiento,tipoCausal,priNombree,segNombree,priApellidoo,segApellidoo]);
    
    return(
        <>
          <div>
          <hr/>
            <label htmlFor="tipoDocumento">Tipo de documento: </label>
            <select
              id="tipoDocumento"
              name="tipoDocumento"
              onChange={(e)=>{handleTipoDocumento(e)}}
              value={tipoDocumento}
            >
              <option value="">Seleccione el tipo de documento:</option>
              <option value="CN">CN</option>
              <option value="RC">RC</option>
              <option value="TI">TI</option>
              <option value="CC">CC</option>
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
          <div>
            <label htmlFor="priNombre">Primer Nombre: </label>
            <input
              id="priNombre"
              name="priNombre"
              onChange={(e)=>{handlePriNombre(e)}}
              value={priNombree}
              placeholder="Escriba el primer Nombre"
            />
          </div>
          <div>
            <label htmlFor="segNombre">Segundo Nombre:: </label>
            <input
              id="segNombre"
              name="segNombre"
              onChange={(e)=>{handleSegNombre(e)}}
              value={segNombree}
              placeholder="Escriba el segundo nombre"
            />
          </div>
          <div>
            <label htmlFor="priApellido">Primer Apellido: </label>
            <input
              id="priApellido"
              name="priApellido"
              onChange={(e)=>{handlePriApellido(e)}}
              value={priApellidoo}
              placeholder="Escriba el primer apellido"
            />
          </div>
          <div>
            <label htmlFor="segApellido">Segundo Apellido: </label>
            <input
              id="segApellido"
              name="segApellido"
              onChange={(e)=>{handleSegApellido(e)}}
              value={segApellidoo}
              placeholder="Escriba el segundo apellido"
            />
          </div>
        </>
    )
}

export default ActualizacionDeCNRC;