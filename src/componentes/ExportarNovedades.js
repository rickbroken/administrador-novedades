import React, { useCallback, useEffect, useRef, useState } from "react";
import "../estilos-css/ExportarNovedades.css";
import Papa from 'papaparse';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import moment from 'moment';
import { Helmet } from "react-helmet";
import BotonCerrarSesion from "./BotonCerrarSesion";
import { useAuth } from "../contextos/useAuth";
import useObtenerLineas from './../hooks/ObtenerLineas';

//Desactivar advertencias en consola de momentJs
moment.suppressDeprecationWarnings = true;

const ExportarNovedades = ()=>{
	//const [datosExport, setDatosExport] = useState({});
	//const [datosTXT, setDatosTXT] = useState("");
	//const [datosEXCEL, setDatosEXCEL] = useState("");


	//const {usuario} = useAuth();

	const {lineas, setFechaInicioUnix, setfechaFinUnix, setRegimen, setCodigoMunicipios, codigoMunicipios} = useObtenerLineas();




	const [fechaInicio, setFechaInicio] = useState('');
	const [horaInicio, setHoraInicio] = useState('');
	const [fechaInicioTotal, setFechaInicioTotal] = useState('');
	const [fechaFin, setFechaFin] = useState('');
	const [horaFin, setHoraFin] = useState('');
	const [fechaFinTotal, setFechaFinTotal] = useState('');
	const [entidad, setEntidad] = useState('');
	//const [isPuertoGaitan, setIsPuertoGaitan] = useState('');
	//const [isPereira, setIsPereira] = useState('');
	//const [isGuatica, setIsGuatica] = useState('');
	//const [isMarsella, setIsMarsella] = useState('');
	//const [isMistrato, setIsMistrato] = useState('');
	//const [isPuebloRico, setIsPuebloRico] = useState('');
	//const [isQuinchia, setIsQuinchia] = useState('');
	//const [isIbague, setIsIbague] = useState('');
	//const [isChaparral, setIsChaparral] = useState('');
	//const [isCoyaima, setIsCoyaima] = useState('');
	//const [isNatagaima, setIsNatagaima] = useState('');
	//const [isOrtega, setIsOrtega] = useState('');
	//const [isPlanadas, setIsPlanadas] = useState('');
	//const [isRioBlanco, setIsRioBlanco] = useState('');
	//const [isSanAntonio, setIsSanAntonio] = useState('');
	//const [isPurificacion, setIsPurificacion] = useState('');
	//const [isSaldana, setIsSaldana] = useState('');
	//const [isAtaco, setIsAtaco] = useState('');
	//const [isPrado, setIsPrado] = useState('');

	useEffect(()=>{
		setFechaInicioUnix(fechaInicioTotal);
		setfechaFinUnix(fechaFinTotal);
	},[fechaFin,fechaInicio,fechaFinTotal,fechaInicioTotal])

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
	const handleSetEntidad = (e)=>{
		setEntidad(e.target.value);
		setRegimen(e.target.value);
	}

	// funcion para actualizar el valor de los checkbox de los municipios
	//const handleIsMunicipio = (e,codigo,set,estado)=>{
	//	if(estado === codigo){
	//		set("");
	//	} else if (estado === ""){
	//		set(e.target.value);
	//	} 
	//}
	useEffect(()=>{
		setCodigoMunicipios([
			{ name: '568', checked: false },
			{ name: '66001', checked: false },
			{ name: '318', checked: false },
			{ name: '440', checked: false },
			{ name: '456', checked: false },
			{ name: '572', checked: false },
			{ name: '594', checked: false },
			{ name: '001', checked: false },
			{ name: '168', checked: false },
			{ name: '217', checked: false },
			{ name: '483', checked: false },
			{ name: '504', checked: false },
			{ name: '555', checked: false },
			{ name: '616', checked: false },
			{ name: '675', checked: false },
			{ name: '585', checked: false },
			{ name: '671', checked: false },
			{ name: '067', checked: false },
			{ name: '563', checked: false },
		]);
	},[])
	
  const handleCheckboxMunicipio = (e) => {
    const { value, checked } = e.target;
    setCodigoMunicipios((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.name === value ? { ...checkbox, checked } : checkbox
      )
    );
  };

	
	//Cada vez que se actualize el estado se concatena la fecha con la hora en un estado
	useEffect(()=>{
		setFechaInicioTotal(`${fechaInicio} ${horaInicio}:00`);
		setFechaFinTotal(`${fechaFin} ${horaFin}:00`);
	}, [fechaInicio,horaInicio,fechaFin,horaFin]);


	//useEffect(()=>{
	//		setDatosExport(
	//			{
	//				fechaInicioTotal: fechaInicioTotal,
	//				fechaFinTotal: fechaFinTotal,
	//				entidad: entidad,
	//				isPuertoGaitan: isPuertoGaitan,
	//				isPereira: isPereira,
	//				isGuatica: isGuatica,
	//				isMarsella: isMarsella,
	//				isMistrato: isMistrato,
	//				isPuebloRico: isPuebloRico,
	//				isQuinchia: isQuinchia,
	//				isIbague: isIbague,
	//				isChaparral: isChaparral,
	//				isCoyaima: isCoyaima,
	//				isNatagaima: isNatagaima,
	//				isOrtega: isOrtega,
	//				isPlanadas: isPlanadas,
	//				isRioBlanco: isRioBlanco,
	//				isSanAntonio: isSanAntonio,
	//				isPurificacion: isPurificacion,
	//				isSaldana: isSaldana,
	//				isAtaco: isAtaco,
	//				isPrado: isPrado,
	//				idUsuario: usuario.uid
	//			}
	//		);
	//},[
	//	fechaInicioTotal,fechaFinTotal,
	//	entidad,isPuertoGaitan,isPereira,
	//	isGuatica,isMarsella,isMistrato,
	//	isPuebloRico,isQuinchia,isIbague,
	//	isChaparral,isCoyaima,isNatagaima,
	//	isOrtega,isPlanadas,isRioBlanco,
	//	isSanAntonio,isPurificacion,isSaldana,
	//	isAtaco,isPrado,usuario.uid
	//]);


	//Damos formato a la fecha presente, el valor varia dependiendo el dia actual
  //Para pasarselo a el nombre del archivo .txt
  const fechaHoySinFormato = moment();
  const fechHoyArchivo = fechaHoySinFormato.format('DDMMYYYY');


  //Definimos el nombre de el archivo .cvs que se exporta
  const fileNameTXT = `NS${entidad}${fechHoyArchivo}.txt`;
  const fileNameEXCEL = `NS${entidad}${fechHoyArchivo}.xlsx`;

	
	//Agregamos un consecutivo ascendente a la respuesta de la API
	const addConsecutivoToObjArray = (objArray) => {
		let consecutivo = 1;
		const newObjArray = objArray.map(obj => {
			return {
				consecutivo: consecutivo++,
				...obj
			};
		});
		return newObjArray;
	}


	//convertirmos un arreglo a un cvs o txt pasandole como parametro el nombre y el estado.
	const convertToCSV = (objArray, fileName) => {
		const csv = Papa.unparse({
			data: objArray,
			header: false
		});
		// Eliminar el encabezado del CSV
		const csvWithoutHeader = csv.substring(csv.indexOf('\n') + 1);
		//pasar las a que formato se va a exportar el txt
		const blob = new Blob([csvWithoutHeader], { type: 'text/csv;charset=ANSI;' });
		saveAs(blob, fileName, { encoding: 'ANSI' });
	
		return csv;
	}



	//Tres funciones creadas para comvertir un arreglo con objetos dentro a XLSX con
	//una libreria de npm "XLSX".
	function convertToSheet(data) {
		const sheet = XLSX.utils.json_to_sheet(data);
		return sheet;
	}
	
	function exportToXLSX(sheet, filename) {
		const wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, sheet, 'Sheet1');
		XLSX.writeFile(wb, filename);
	}

	const handleExport = useCallback((nombreArchivo, datos) => {
		const data = datos;
		const sheet2 = addConsecutivoToObjArray(data);
		const sheet = convertToSheet(sheet2);
		exportToXLSX(sheet, nombreArchivo);
	}, []);


	//Funcion creada para comunicarse con la API y traer la informacion de las novedades
  	//const importarNovevadesAPI = (setName)=>{
	//	fetch('https://rickbroken.com/api/leer_datos_novedades.php', {
	//		method: 'POST',
	//		headers: {
	//		'Content-Type': 'application/json'
	//		},
	//		cors: false,
	//		body: JSON.stringify(datosExport)
	//	})
	//	.then(response => response.json())
	//	.then(datosExport => setName(datosExport))
	//	.catch(error => console.error(error));
	//}


	//Funcion que al hacer submit hace consulta a la API para recibir los datos
	const handleSubmit = (e)=>{
		e.preventDefault(e);
	}
	//Funciones creadas para el onClick de los botones de descarga
	const descargarTXT = ()=>{
		if(lineas.length === 0){
			alert('No hay datos registrados con las condiciones que seleccionaste')
		} else {
			//Ordenamos de la A a la Z las propiedades de los objetos dentro del array que se recibe de ObtenerLineas.js
			const ordered = lineas.map(({A_id,Z_fechaEnvio,Y_fechaUnix,U_idUsuario,	...rest}) => {
				return Object.keys(rest).sort().reduce((r, k) => (r[k] = rest[k], r), {});
			});
	
			//llamamos a la funcion que convierte el array en un archivo CSV y a su vez agregamos un indice por cada linea
			convertToCSV(addConsecutivoToObjArray(ordered), fileNameTXT);
	
			//Funcion para exportar las novedades de la API
			//importarNovevadesAPI(setDatosTXT);
		}

	}


	const descargarEXCEL = ()=>{
		if(lineas.length === 0){
			alert('No hay datos registrados con las condiciones que seleccionaste')
		} else {
			const ordered = lineas.map(({A_id,Z_fechaEnvio,Y_fechaUnix,U_idUsuario,	...rest}) => {
				return Object.keys(rest).sort().reduce((r, k) => (r[k] = rest[k], r), {});
			});
	
			handleExport(fileNameEXCEL, ordered);
		}
		//importarNovevadesAPI(setDatosEXCEL);
	}


	
	//Se recibe el estado "datos" que dentro tiene la respuesta de la API, con la 
	//informacion requerida, apenas se haga un cambio de estados se descargara
	//useEffect(()=>{
	//	if(datosTXT !== ""){
	//		convertToCSV(addConsecutivoToObjArray(lineas.sort()), fileNameTXT);
	//	}
	//},[datosTXT,fileNameTXT]);
	//useEffect(()=>{
	//	if(datosEXCEL !== ""){
	//		handleExport(fileNameEXCEL);
	//	}
	//},[datosEXCEL,fileNameEXCEL,handleExport]);
	


	return(
		<>
			<Helmet>
				<title>Exportar Novedades</title>
			</Helmet>
			<form onSubmit={(e)=>handleSubmit(e)} className="relative">
				<BotonCerrarSesion />
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
							min="00:00" 
							max="24:00"
							onChange={(e)=>handleSetHoraFin(e)}
						/>
					</div>
				</div>

				<hr className="hrExportarNovedades"/>

				<div>
								<label htmlFor="entidad">Regimen: </label>
								<select
									id="entidad"
									name="entidad"
									onChange={(e)=>{handleSetEntidad(e)}}
									value={entidad}
								>
									<option value="">Seleccione el regimen:</option>
					<option value="EPSI06">Subsidiado</option>
					<option value="EPSIC6">Contributivo</option>
								</select>
							</div>


				<div className="contenedor-checkbox">
					<label>Seleccionar municipio:</label>
					<div>
						<label htmlFor="puerto_gaitan">PUERTO GAITAN</label>
						<input  
							onChange={(e)=>handleCheckboxMunicipio(e)}
							type="checkbox" id="puerto_gaitan" value="568" />
					</div>
					<div>
						<label htmlFor="pereira">PEREIRA</label>
						<input 
							onChange={(e)=>handleCheckboxMunicipio(e)}
							type="checkbox" id="pereira" value="66001" />
					</div>

					<div>
						<label htmlFor="guatica">GUATICA</label>
						<input 
							onChange={(e)=>handleCheckboxMunicipio(e)}
							type="checkbox" id="guatica" value="318" />
					</div>
					<div>
						<label htmlFor="marsella">MARSELLA</label>
						<input 
							onChange={(e)=>handleCheckboxMunicipio(e)}
							type="checkbox" id="marsella" value="440"/>
					</div>
					<div>
						<label htmlFor="mistrato">MISTRATO</label>
						<input 
							onChange={(e)=>handleCheckboxMunicipio(e)}
							type="checkbox" id="mistrato" value="456"/>
					</div>
					<div>
						<label htmlFor="pueblo_rico">PUEBLO RICO</label>
						<input 
							onChange={(e)=>handleCheckboxMunicipio(e)}
							type="checkbox" id="pueblo_rico" value="572"/>
					</div>
					<div>
						<label htmlFor="quinchia">QUINCHIA</label>
						<input 
							onChange={(e)=>handleCheckboxMunicipio(e)}
							type="checkbox" id="quinchia" value="594"/>
					</div>
					<div>
						<label htmlFor="ibague">IBAGUE</label>
						<input 
							onChange={(e)=>handleCheckboxMunicipio(e)}
							type="checkbox" id="ibague" value="001"/>
					</div>
					<div>
						<label htmlFor="chaparral">CHAPARRAL</label>
						<input 
							onChange={(e)=>handleCheckboxMunicipio(e)}
							type="checkbox" id="chaparral" value="168"/>
					</div>
					<div>
						<label htmlFor="coyaima">COYAIMA</label>
						<input 
							onChange={(e)=>handleCheckboxMunicipio(e)}
							type="checkbox" id="coyaima" value="217"/>
					</div>
					<div>
						<label htmlFor="natagaima">NATAGAIMA</label>
						<input 
							onChange={(e)=>handleCheckboxMunicipio(e)}
							type="checkbox" id="natagaima" value="483"/>
					</div>
					<div>
						<label htmlFor="ortega">ORTEGA</label>
						<input 
							onChange={(e)=>handleCheckboxMunicipio(e)}
							type="checkbox" id="ortega" value="504"/>
					</div>
					<div>
						<label htmlFor="planadas">PLANADAS</label>
						<input 
							onChange={(e)=>handleCheckboxMunicipio(e)}
							type="checkbox" id="planadas" value="555"/>
					</div>
					<div>
						<label htmlFor="rioblanco">RIOBLANCO</label>
						<input 
							onChange={(e)=>handleCheckboxMunicipio(e)}
							type="checkbox" id="rioblanco" value="616"/>
					</div>
					<div>
						<label htmlFor="san_antonio">SAN ANTONIO</label>
						<input 
							onChange={(e)=>handleCheckboxMunicipio(e)}
							type="checkbox" id="san_antonio" value="675"/>
					</div>
					<div>
						<label htmlFor="purificacion">PURIFICACION</label>
						<input 
							onChange={(e)=>handleCheckboxMunicipio(e)}
								type="checkbox" id="purificacion" value="585"/>
					</div>
					<div>
						<label htmlFor="saldana">SALDAÑA</label>
						<input 
							onChange={(e)=>handleCheckboxMunicipio(e)}
							type="checkbox" id="saldana" value="671"/>
					</div>
					<div>
						<label htmlFor="ataco">ATACO</label>
						<input 
							onChange={(e)=>handleCheckboxMunicipio(e)}
							type="checkbox" id="ataco" value="067"/>
					</div>
					<div>
						<label htmlFor="prado">PRADO</label>
						<input 
							onChange={(e)=>handleCheckboxMunicipio(e)}
							type="checkbox" id="prado" value="563"/>
					</div>
				</div>
				{/*
				<pre>{JSON.stringify(datosExport, null, 2)}</pre>
				*/}

				<button type="" onClick={()=>descargarTXT()}>Descargar .txt</button>
				<button className="btn-descargarEXCEL" onClick={()=>descargarEXCEL()}>Descargar en Excel</button>
			</form>
		</>
	);
}

export default ExportarNovedades;