import React from "react";

const TipoAfiliado = ()=>{
  return (
		<>
			<option value="C">Cotizante</option>
			<option value="F">Cabeza de familia</option>
			<option value="B">Beneficiario o asegurado</option>
			<option value="A">Adicional</option>
			<option value="T">Titular segun corresponda</option>
			<option value="S">Titular principal "Asegurado"</option>
		</>
	);
}

export default TipoAfiliado;