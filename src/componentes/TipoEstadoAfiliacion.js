import React from "react";

const TipoEstadoAfiliacion = ()=>{
  return (
		<>
      <option value="RE">RE - Retirado</option>
      <option value="SM">SM - Suspencion por mora</option>
      <option value="PL">PL - Proteccion Laboral</option>
      <option value="SD">SD - Suspencion por falta de documentos</option>
      <option value="AE">AE - Activo por Emergencia</option>
		</>
	);
}

export default TipoEstadoAfiliacion;