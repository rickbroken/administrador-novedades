import React, { useEffect, useState } from "react";
import "../estilos-css/ExportarNovedades.css";
import Papa from 'papaparse';
import { saveAs } from 'file-saver';
import moment from 'moment';

//Desactivar advertencias en consola de momentJs
moment.suppressDeprecationWarnings = true;

const ExportarNovedades = ()=>{
	const [datosExport, setDatosExport] = useState({});
	const [datos, setDatos] = useState("");


	const [fechaInicio, setFechaInicio] = useState('');
	const [horaInicio, setHoraInicio] = useState('');
	const [fechaInicioTotal, setFechaInicioTotal] = useState('');
	const [fechaFin, setFechaFin] = useState('');
	const [horaFin, setHoraFin] = useState('');
	const [fechaFinTotal, setFechaFinTotal] = useState('');
	const [isPuertoGaitan, setIsPuertoGaitan] = useState('');
	const [isPereira, setIsPereira] = useState('');
	const [isGuatica, setIsGuatica] = useState('');
	const [isMarsella, setIsMarsella] = useState('');
	const [isMistrato, setIsMistrato] = useState('');
	const [isPuebloRico, setIsPuebloRico] = useState('');
	const [isQuinchia, setIsQuinchia] = useState('');
	const [isIbague, setIsIbague] = useState('');
	const [isChaparral, setIsChaparral] = useState('');
	const [isCoyaima, setIsCoyaima] = useState('');
	const [isNatagaima, setIsNatagaima] = useState('');
	const [isOrtega, setIsOrtega] = useState('');
	const [isPlanadas, setIsPlanadas] = useState('');
	const [isRioBlanco, setIsRioBlanco] = useState('');
	const [isSanAntonio, setIsSanAntonio] = useState('');
	const [isPurificacion, setIsPurificacion] = useState('');
	const [isSaldana, setIsSaldana] = useState('');
	const [isAtaco, setIsAtaco] = useState('');
	const [isPrado, setIsPrado] = useState('');

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
	const handleIsMunicipio = (e,codigo,set,estado)=>{
		if(estado === codigo){
			set("");
		} else if (estado === ""){
			set(e.target.value);
		} 
	}
	
	useEffect(()=>{
		setFechaInicioTotal(`${fechaInicio} ${horaInicio}:00`);
		setFechaFinTotal(`${fechaFin} ${horaFin}:00`);
	}, [fechaInicio,horaInicio,fechaFin,horaFin]);


	useEffect(()=>{
			setDatosExport(
				{
					fechaInicioTotal: fechaInicioTotal,
					fechaFinTotal: fechaFinTotal,
					isPuertoGaitan: isPuertoGaitan,
					isPereira: isPereira,
					isGuatica: isGuatica,
					isMarsella: isMarsella,
					isMistrato: isMistrato,
					isPuebloRico: isPuebloRico,
					isQuinchia: isQuinchia,
					isIbague: isIbague,
					isChaparral: isChaparral,
					isCoyaima: isCoyaima,
					isNatagaima: isNatagaima,
					isOrtega: isOrtega,
					isPlanadas: isPlanadas,
					isRioBlanco: isRioBlanco,
					isSanAntonio: isSanAntonio,
					isPurificacion: isPurificacion,
					isSaldana: isSaldana,
					isAtaco: isAtaco,
					isPrado: isPrado
				}
			);
	},[
		fechaInicio,fechaFin,horaInicio,
		horaFin,isPuertoGaitan,isPereira,
		isGuatica,isMarsella,isMistrato,
		isPuebloRico,isQuinchia,isIbague,
		isChaparral,isCoyaima,isNatagaima,
		isOrtega,isPlanadas,isRioBlanco,
		isSanAntonio,isPurificacion,isSaldana,
		isAtaco,isPrado
	]);


	  //Damos formato a la fecha presente, el valor varia dependiendo el dia actual
  //Para pasarselo a el nombre del archivo .txt
  const fechaHoySinFormato = moment();
  const fechHoyArchivo = fechaHoySinFormato.format('DDMMYYYY');


  //Definimos el nombre de el archivo .cvs que se exporta
  const fileName = `NSREGIMEN${fechHoyArchivo}.txt`;

	function convertToCSV(objArray, fileName) {
    const csv = Papa.unparse({
      data: objArray,
      header: false
    });
  
    // Eliminar el encabezado del CSV
    const csvWithoutHeader = csv.substring(csv.indexOf('\n') + 1);
  
    const blob = new Blob([csvWithoutHeader], { type: 'text/csv;charset=ANSI;' });
    saveAs(blob, fileName);
  
    return csv;
  }

	const handleSubmit = (e)=>{
		e.preventDefault(e);

		fetch('https://rickbroken.com/api/leer_datos_novedades.php', {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
		},
			body: JSON.stringify(datosExport)
		})
		.then(response => response.json())
		.then(datosExport => setDatos(datosExport))
		.catch(error => console.error(error));
	}
	
	useEffect(()=>{
		if(datos !== ""){
			convertToCSV(datos, fileName);
		}
	},[datos]);

	return(
		<>
		<form onSubmit={(e)=>handleSubmit(e)}>
			<div className="cont-inputs">
				<div>
					<label htmlFor="fechaInicio">Fecha Inicio de exportacion:</label>
					<input
						id="fechaInicio"
						type="date"
						onChange={(e)=>handleSetFechaInicio(e)}
						/>
				</div>
				<div>
					<label htmlFor="horaInicio">Desde las:</label>
					<input
						id="horaInicio"
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
					<label htmlFor="horaFin">Hasta las::</label>
					<input
						id="horaFin"
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
          				onChange={(e)=>handleIsMunicipio(e,"568",setIsPuertoGaitan,isPuertoGaitan)}
						type="checkbox" id="puerto_gaitan" value="568" />
				</div>
				<div>
					<label htmlFor="pereira">PEREIRA</label>
					<input 
          				onChange={(e)=>handleIsMunicipio(e,"001",setIsPereira,isPereira)}
						type="checkbox" id="pereira" value="001" />
				</div>

				<div>
					<label htmlFor="guatica">GUATICA</label>
					<input 
          				onChange={(e)=>handleIsMunicipio(e,"318",setIsGuatica,isGuatica)}
						type="checkbox" id="guatica" value="318" />
				</div>
				<div>
					<label htmlFor="marsella">MARSELLA</label>
					<input 
          				onChange={(e)=>handleIsMunicipio(e,"440",setIsMarsella,isMarsella)}
						type="checkbox" id="marsella" value="440"/>
				</div>
				<div>
					<label htmlFor="mistrato">MISTRATO</label>
					<input 
          				onChange={(e)=>handleIsMunicipio(e,"456",setIsMistrato,isMistrato)}
						type="checkbox" id="mistrato" value="456"/>
				</div>
				<div>
					<label htmlFor="pueblo_rico">PUEBLO RICO</label>
					<input 
          				onChange={(e)=>handleIsMunicipio(e,"572",setIsPuebloRico,isPuebloRico)}
						type="checkbox" id="pueblo_rico" value="572"/>
				</div>
				<div>
					<label htmlFor="quinchia">QUINCHIA</label>
					<input 
          				onChange={(e)=>handleIsMunicipio(e,"594",setIsQuinchia,isQuinchia)}
						type="checkbox" id="quinchia" value="594"/>
				</div>
				<div>
					<label htmlFor="ibague">IBAGUE</label>
					<input 
          				onChange={(e)=>handleIsMunicipio(e,"001",setIsIbague,isIbague)}
						type="checkbox" id="ibague" value="001"/>
				</div>
				<div>
					<label htmlFor="chaparral">CHAPARRAL</label>
					<input 
          				onChange={(e)=>handleIsMunicipio(e,"168",setIsChaparral,isChaparral)}
						type="checkbox" id="chaparral" value="168"/>
				</div>
				<div>
					<label htmlFor="coyaima">COYAIMA</label>
					<input 
          				onChange={(e)=>handleIsMunicipio(e,"217",setIsCoyaima,isCoyaima)}
						type="checkbox" id="coyaima" value="217"/>
				</div>
				<div>
					<label htmlFor="natagaima">NATAGAIMA</label>
					<input 
          				onChange={(e)=>handleIsMunicipio(e,"483",setIsNatagaima,isNatagaima)}
						type="checkbox" id="natagaima" value="483"/>
				</div>
				<div>
					<label htmlFor="ortega">ORTEGA</label>
					<input 
          				onChange={(e)=>handleIsMunicipio(e,"504",setIsOrtega,isOrtega)}
						type="checkbox" id="ortega" value="504"/>
				</div>
				<div>
					<label htmlFor="planadas">PLANADAS</label>
					<input 
          				onChange={(e)=>handleIsMunicipio(e,"555",setIsPlanadas,isPlanadas)}
						type="checkbox" id="planadas" value="555"/>
				</div>
				<div>
					<label htmlFor="rioblanco">RIOBLANCO</label>
					<input 
          				onChange={(e)=>handleIsMunicipio(e,"616",setIsRioBlanco,isRioBlanco)}
						type="checkbox" id="rioblanco" value="616"/>
				</div>
				<div>
					<label htmlFor="san_antonio">SAN ANTONIO</label>
					<input 
          				onChange={(e)=>handleIsMunicipio(e,"675",setIsSanAntonio,isSanAntonio)}
						type="checkbox" id="san_antonio" value="675"/>
				</div>
				<div>
					<label htmlFor="purificacion">PURIFICACION</label>
					<input 
          				onChange={(e)=>handleIsMunicipio(e,"585",setIsPurificacion,isPurificacion)}
						  type="checkbox" id="purificacion" value="585"/>
				</div>
				<div>
					<label htmlFor="saldana">SALDAÑA</label>
					<input 
          				onChange={(e)=>handleIsMunicipio(e,"671",setIsSaldana,isSaldana)}
						type="checkbox" id="saldana" value="671"/>
				</div>
				<div>
					<label htmlFor="ataco">ATACO</label>
					<input 
          				onChange={(e)=>handleIsMunicipio(e,"067",setIsAtaco,isAtaco)}
						type="checkbox" id="ataco" value="067"/>
				</div>
				<div>
					<label htmlFor="prado">PRADO</label>
					<input 
          				onChange={(e)=>handleIsMunicipio(e,"555",setIsPrado,isPrado)}
						type="checkbox" id="prado" value="555"/>
				</div>
			</div>
			{/*
			*/}
			<pre>{JSON.stringify(datos, null, 2)}</pre>

			<button type="submit">Descargar .txt</button>
		</form>
		</>
	);
}

export default ExportarNovedades;