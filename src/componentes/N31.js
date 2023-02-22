import React from "react";
import { useState, useEffect } from "react";
import TipoGrupoPoblacional from './TipoGrupoPoblacional';
import TipoPoblacionEspecial from './TipoPoblacionEspecial';
import TipoNivelSisben from './TipoNivelSisben';


const N31 = ({ setLinea })=>{

    const [grupoPoblacional, setGrupoPoblacional] = useState("");
    const [subGrupoSisben, setSubGrupoSisben] = useState("");
    const [tipoPoblacionEspecial, setTipoPoblacionEspecial] = useState("");
    const [tipoNivelSisben, setTipoNivelSisben] = useState("");



    const handleGrupoPoblacional= (e)=>{
      const value = e.target.value.toUpperCase();
      setGrupoPoblacional(value);
    }
    const handleSubGrupoSisben= (e)=>{
      const value = e.target.value.toUpperCase();
      setSubGrupoSisben(value);
    }
    const handleTipoPoblacionEspecial= (e)=>{
      const value = e.target.value.toUpperCase();
      setTipoPoblacionEspecial(value);
    }
    const handleTipoNivelSisben= (e)=>{
      const value = e.target.value.toUpperCase();
      setTipoNivelSisben(value);
    }

    useEffect(()=>{
      setLinea(prevlinea => [
        {
          ...prevlinea[0],
          L_tpNovedad: "N31",
          N_V1: grupoPoblacional,
          O_V2: subGrupoSisben,
          P_V3: tipoPoblacionEspecial,
          Q_V4: tipoNivelSisben,
          R_V5: "",
          S_V6: "",
          T_V7: ""
        }
      ]);
    }, [grupoPoblacional,subGrupoSisben,tipoPoblacionEspecial,tipoNivelSisben,setLinea]);
    

    
    return(
        <> 
          <fieldset>
            <legend align="right">Novedad: N31</legend>
            <div>
              <label htmlFor="grupoPoblacional">Tipo de Metodologia Grupo Poblacional: </label>
              <select
                id="grupoPoblacional"
                name="grupoPoblacional"
                onChange={(e)=>{handleGrupoPoblacional(e)}}
                value={grupoPoblacional}
              >
                <option value="">Seleccione una opcion:</option>
                <TipoGrupoPoblacional />
              </select>
            </div>

            <div>
              <label htmlFor="subGrupoSisben">Escriba el sub gupo del SISBEN: </label>
              <input
                type="text"
                id="subGrupoSisben"
                name="subGrupoSisben"
                onChange={(e)=>{handleSubGrupoSisben(e)}}
                value={subGrupoSisben}
              />
            </div>

            <div>
              <label htmlFor="tipoPoblacionEspecial">Tipo de Poblacion Espacial </label>
              <select
                id="tipoPoblacionEspecial"
                name="tipoPoblacionEspecial"
                onChange={(e)=>{handleTipoPoblacionEspecial(e)}}
                value={tipoPoblacionEspecial}
              >
                <option value="">Seleccione una opcion:</option>
                <TipoPoblacionEspecial />
              </select>
            </div>
            <div>
              <label htmlFor="tipoNivelSisben">Nivel del SISBEN:</label>
              <select
                id="tipoNivelSisben"
                name="tipoNivelSisben"
                onChange={(e)=>{handleTipoNivelSisben(e)}}
                value={tipoNivelSisben}
              >
                <option value="">Seleccione una opcion:</option>
                <TipoNivelSisben />
              </select>
            </div>
          </fieldset>
        </>
    )
}

export default N31;