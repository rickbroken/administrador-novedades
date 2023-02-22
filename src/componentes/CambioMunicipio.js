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
          J_departamento: departamento,
          K_municipio: municipio
        }

      ]);
    }, [departamento,municipio,centroSalud]);
    
    return(
        <>
          <fieldset>
            <legend align="right">Novedad: N04</legend>
            <div>
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
            <div>
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
                  ) : "" // Retornar un valor por defecto si no se cumple ninguna condición
                }
              </select>
            </div>
          </fieldset>
          <fieldset>
            <legend align="right">Novedad: N25</legend>
            <div>
              <label htmlFor="centrosalud">Centro de Salud: </label>
              <select
                id="centrosalud"
                name="centrosalud"
                onChange={(e)=>handleCentroSalud(e)}
                value={centroSalud}
              >
                <option value="">Seleccione un centro de salud</option>
                {
                  municipio2 === "Puerto Gaitan" ? (
                    <IPS568 />
                  ) :municipio2 === "Pereira" ? (
                    <IPS66001 />
                  ) :municipio2 === "Guatica" ? (
                    <IPS318 />
                  ) :municipio2 === "Marsella" ? (
                    <IPS440 />
                  ) :municipio2 === "Mistrato" ? (
                    <IPS456 />
                  ) :municipio2 === "Pueblo Rico" ? (
                    <IPS572 />
                  ) :municipio2 === "Quinchia" ? (
                    <IPS594 />
                  ) :municipio2 === "Ibague" ? (
                    <IPS001 />
                  ) :municipio2 === "Chaparral" ? (
                    <IPS168 />
                  ) :municipio2 === "Coyaima" ? (
                    <IPS217 />
                  ) :municipio2 === "Natagaima" ? (
                    <IPS483 />
                  ) :municipio2 === "Ortega" ? (
                    <IPS504 />
                  ) :municipio2 === "Planadas" ? (
                    <IPS555 />
                  ) :municipio2 === "Rioblanco" ? (
                    <IPS616 />
                  ) :municipio2 === "San Antonio" ? (
                    <IPS675 />
                  ) :municipio2 === "Purificacion" ? (
                    <IPS585 />
                  ) :municipio2 === "Saldaña" ? (
                    <IPS671 />
                  ) :municipio2 === "Ataco" ? (
                    <IPS067 />
                  ) :municipio2 === "Prado" ? (
                    <IPS563 />
                  ) : ""
                }
              </select>
            </div>
          </fieldset>
        </>
    )
}

export default CambioMunicipio;