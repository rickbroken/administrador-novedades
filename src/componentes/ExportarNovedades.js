import React, { useEffect, useState } from "react";
import "../estilos-css/ExportarNovedades.css";

const ExportarNovedades = ()=>{
	const [datosExport, setDatosExport] = useState([{}]);


	const [fechaInicio, setFechaInicio] = useState('');
	const [horaInicio, setHoraInicio] = useState('');
	const [fechaFin, setFechaFin] = useState('');
	const [horaFin, setHoraFin] = useState('');
	const [isPuertoGaitan, setIsPuertoGaitan] = useState('');
	//const [isPuertoGaitan, setIsPuertoGaitan] = useState('');

	const handleSetFechaInicio = (e) => {
		setFechaInicio(e.target.value);
	}
	const handleSetHoraInicio = (e) => {
		setHoraInicio(e.target.value);
	}

	const handleSetFechaFin = (e)=>{
		setFechaFin(e.target.value);
	}
	const handleSetHoraFin = (e)=>{
		setHoraFin(e.target.value);
	}
	const handleIsPuertoGaitan = (e)=>{
		if(isPuertoGaitan === "568"){
			setIsPuertoGaitan("");
		} else if (isPuertoGaitan === ""){
			setIsPuertoGaitan(e.target.value);
		}
	}

	useEffect(()=>{
			setDatosExport([
				{
					fechaInicio: fechaInicio,
					horaInicio: horaInicio,
					fechaFin: fechaFin,
					horaFin: horaFin,
					isPuertoGaitan: isPuertoGaitan
				}
			]);
	},[fechaInicio,fechaFin,horaInicio,horaFin,isPuertoGaitan]);


	const handleSubmit = (e)=>{
		e.preventDefault(e);
	}

	return(
		<>
		<form onSubmit={(e)=>handleSubmit(e)}>
			<div className="cont-inputs">
				<div>
					<label htmlFor="fechaFin">Fecha Inicio de exportacion:</label>
					<input
						id="fechaFin"
						type="date"
						onChange={(e)=>handleSetFechaInicio(e)}
						/>
				</div>
				<div>
					<label htmlFor="fechaFin">Desde las:</label>
					<input
						id="fechaFin"
						type="time" 
						min="00:00" 
						max="24:00" 
						step="600"
						onChange={(e)=>handleSetHoraInicio(e)}
					/>
				</div>
			</div>

			<hr className="hrExportarNovedades"/>

			<div className="cont-inputs">
				<div>
					<label htmlFor="fechaFin">Fecha fin de exportacion:</label>
					<input
						id="fechaFin"
						type="date"
						onChange={(e)=>handleSetFechaFin(e)}
						/>
				</div>
				<div>
					<label htmlFor="fechaFin">Hasta las::</label>
					<input
						id="fechaFin"
						type="time" 
						step="600"
						onChange={(e)=>handleSetHoraFin(e)}
					/>
				</div>
			</div>
			<div className="contenedor-checkbox">
				<label>Seleccionar municipio:</label>
				<div>
					<label htmlFor="puerto_gaitan">PUERTO GAITAN</label>
					<input  
          	onChange={(e)=>handleIsPuertoGaitan(e)}
						type="checkbox" id="puerto_gaitan" value="568"/>
				</div>
				<div>
					<label htmlFor="pereira">PEREIRA</label>
					<input 
						
						type="checkbox" id="pereira" value="001"/>
				</div>

				<div>
					<label htmlFor="guatica">GUATICA</label>
					<input type="checkbox" id="guatica" value="318"/>
				</div>
				<div>
					<label htmlFor="marsella">MARSELLA</label>
					<input type="checkbox" id="marsella" value="440"/>
				</div>
				<div>
					<label htmlFor="mistrato">MISTRATO</label>
					<input type="checkbox" id="mistrato" value="456"/>
				</div>
				<div>
					<label htmlFor="pueblo_rico">PUEBLO RICO</label>
					<input type="checkbox" id="pueblo_rico" value="572"/>
				</div>
				<div>
					<label htmlFor="quinchia">QUINCHIA</label>
					<input type="checkbox" id="quinchia" value="594"/>
				</div>
				<div>
					<label htmlFor="ibague">IBAGUE</label>
					<input type="checkbox" id="ibague" value="001"/>
				</div>

				<div>
					<label htmlFor="chaparral">CHAPARRAL</label>
					<input type="checkbox" id="chaparral" value="168"/>
				</div>
				<div>
					<label htmlFor="coyaima">COYAIMA</label>
					<input type="checkbox" id="coyaima" value="217"/>
				</div>
				<div>
					<label htmlFor="natagaima">NATAGAIMA</label>
					<input type="checkbox" id="natagaima" value="483"/>
				</div>
				<div>
					<label htmlFor="ortega">ORTEGA</label>
					<input type="checkbox" id="ortega" value="504"/>
				</div>
				<div>
					<label htmlFor="planadas">PLANADAS</label>
					<input type="checkbox" id="planadas" value="555"/>
				</div>
				<div>
					<label htmlFor="rioblanco">RIOBLANCO</label>
					<input type="checkbox" id="rioblanco" value="616"/>
				</div>
				<div>
					<label htmlFor="san_antonio">SAN ANTONIO</label>
					<input type="checkbox" id="san_antonio" value="675"/>
				</div>
				<div>
					<label htmlFor="purificacion">PURIFICACION</label>
					<input type="checkbox" id="purificacion" value="585"/>
				</div>
				<div>
					<label htmlFor="saldana">SALDAÑA</label>
					<input type="checkbox" id="saldana" value="671"/>
				</div>
				<div>
					<label htmlFor="ataco">ATACO</label>
					<input type="checkbox" id="ataco" value="067"/>
				</div>
				<div>
					<label htmlFor="prado">PRADO</label>
					<input type="checkbox" id="prado" value="563"/>
				</div>
			</div>
			{/*
			*/}
			<pre>{JSON.stringify(datosExport, null, 2)}</pre>

			<button type="submit">Descargar .txt</button>
		</form>
		</>
	);
}

export default ExportarNovedades;