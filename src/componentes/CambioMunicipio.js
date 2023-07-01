import React from "react";
import { useState, useEffect } from "react";
import { handleMunicipio2 } from '../funciones/Municipios';
import { handleDepartamento2 } from '../funciones/Departamentos';
import Departamentos from "./Departamentos";
import MunicipiosTolima from './MuicipiosTolima';
import MunicipiosMeta from './MuicipiosMeta';
import IPS568 from "./Ips/IPS568";
import IPS66001 from "./Ips/IPS66001";
import IPS318 from "./Ips/IPS318";
import IPS440 from "./Ips/IPS440";
import IPS456 from "./Ips/IPS456";
import IPS572 from "./Ips/IPS572";
import IPS594 from "./Ips/IPS594";
import IPS001 from "./Ips/IPS001";
import IPS168 from "./Ips/IPS168";
import IPS217 from "./Ips/IPS217";
import IPS483 from "./Ips/IPS483";
import IPS504 from "./Ips/IPS504";
import IPS555 from "./Ips/IPS555";
import IPS616 from "./Ips/IPS616";
import IPS675 from "./Ips/IPS675";
import IPS585 from "./Ips/IPS585";
import IPS671 from "./Ips/IPS671";
import IPS067 from "./Ips/IPS067";
import IPS563 from "./Ips/IPS563";
import MunicipiosRisaralda from "./MuicipiosRisaralda";

const CambioMunicipio = ({ setLinea })=>{
    const [departamento, setDepartamento] = useState("");
    const [municipio, setMunicipio] = useState("");
    const [centroSalud, setCentroSalud] = useState("");

    const [departamento2, setDepartamento2] = useState("");
    const [municipio2, setMunicipio2] = useState("");

    const handleCentroSalud = (e) => {
      setCentroSalud(e.target.value);
    }

    useEffect(()=>{
      setLinea(prevlinea => [
        {
          ...prevlinea[0],
          L_tpNovedad: "N04",
          N_V1: departamento,
          O_V2: municipio,
          P_V3: "",
          Q_V4: "",
          R_V5: "",
          S_V6: "",
          T_V7: ""
        },
        {
        ...prevlinea[1],
          L_tpNovedad: "N25",
          N_V1: centroSalud,
          O_V2: "",
          P_V3: "",
          Q_V4: "",
          R_V5: "",
          S_V6: "",
          T_V7: "",
          J_departamento: departamento2,
          K_municipio: municipio2
        }

      ]);
    }, [departamento,municipio,centroSalud,municipio2,departamento2,setLinea]);

    
    return(
        <>
          <fieldset>
            <legend align="right">Novedad: N04</legend>
            <div className="mx-4 my-1">
              <label htmlFor="departamentoNuevo">Nuevo Departamento: </label>
              <select
                id="departamentoNuevo"
                name="departamentoNuevo"
                onChange={(e)=>handleDepartamento2(e, setDepartamento, setDepartamento2)}
                value={departamento2}
              >
                <option value="">Seleccione un departamento</option>
                <Departamentos />
              </select>
            </div>
            <div className="mx-4 my-1">
              <label htmlFor="municipioNuevo">Nuevo Municipio: </label>
              <select
                id="municipioNuevo"
                name="municipioNuevo"
                onChange={(e)=>{handleMunicipio2(e, setMunicipio, setMunicipio2)}}
                value={municipio2}
              >
                <option value="">Seleccione un municipio</option>
                {
                  departamento === "73" ? (
                    <MunicipiosTolima />
                  ) : departamento === "50" ? (
                    <MunicipiosMeta />
                  ) : departamento === "66" ? (
                    <MunicipiosRisaralda />
                  ) : "" // Retornar un valor por defecto si no se cumple ninguna condición
                }
              </select>
            </div>
          </fieldset>
          <fieldset>
            <legend align="right">Novedad: N25</legend>
            <div className="mx-4 my-1">
              <label htmlFor="centrosalud">Centro de Salud: </label>
              <select
                id="centrosalud"
                name="centrosalud"
                onChange={(e)=>handleCentroSalud(e)}
                value={centroSalud}
              >
                <option value="">Seleccione un centro de salud</option>
                {
                  municipio2 === "568" ? (
                    <IPS568 />
                  ) :municipio2 === "001" && departamento2 === "66" ? (
                    <IPS66001 />
                  ) :municipio2 === "318" ? (
                    <IPS318 />
                  ) :municipio2 === "440" ? (
                    <IPS440 />
                  ) :municipio2 === "456" ? (
                    <IPS456 />
                  ) :municipio2 === "572" ? (
                    <IPS572 />
                  ) :municipio2 === "594" ? (
                    <IPS594 />
                  ) :municipio2 === "001" ? (
                    <IPS001 />
                  ) :municipio2 === "168" ? (
                    <IPS168 />
                  ) :municipio2 === "217" ? (
                    <IPS217 />
                  ) :municipio2 === "483" ? (
                    <IPS483 />
                  ) :municipio2 === "504" ? (
                    <IPS504 />
                  ) :municipio2 === "555" ? (
                    <IPS555 />
                  ) :municipio2 === "616" ? (
                    <IPS616 />
                  ) :municipio2 === "675" ? (
                    <IPS675 />
                  ) :municipio2 === "585" ? (
                    <IPS585 />
                  ) :municipio2 === "585" ? (
                    <IPS671 />
                  ) :municipio2 === "671" ? (
                    <IPS067 />
                  ) :municipio2 === "563" ? (
                    <IPS563 />
                  ) :municipio2 === "067" ? (
                    <IPS067 />
                  ) : ""
                }
              </select>
            </div>
          </fieldset>
        </>
    )
}

export default CambioMunicipio;