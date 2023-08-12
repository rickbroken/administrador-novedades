import React, { useCallback, useEffect, useState } from "react";
import "../estilos-css/ExportarNovedades.css";
import Papa from 'papaparse';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import moment from 'moment';
import { Helmet } from "react-helmet";
import BotonCerrarSesion from "./BotonCerrarSesion";
import { useAuth } from "../contextos/useAuth";
import useObtenerLineas from '../hooks/ObtenerLineas';
import agregarHistorial from "../firebase/agregarHistorial";
import ObtenerFechaExportacion from "../hooks/ObtenerFechaExportacion";

//Desactivar advertencias en consola de momentJs
moment.suppressDeprecationWarnings = true;

const ExportarNovedades = ()=>{
	//const [datosExport, setDatosExport] = useState({});
	//const [datosTXT, setDatosTXT] = useState("");
	//const [datosEXCEL, setDatosEXCEL] = useState("");

  const {fechaExportacion} = ObtenerFechaExportacion();

	const {usuario} = useAuth();

	const {lineas, setFechaInicioUnix, setfechaFinUnix, setRegimen, setCodigoMunicipios, codigoMunicipios} = useObtenerLineas();

  const fechaHoy = moment();
  const fechaUnix = fechaHoy.unix();

	const [fechaInicio, setFechaInicio] = useState('');
	const [horaInicio, setHoraInicio] = useState('');
	const [fechaInicioTotal, setFechaInicioTotal] = useState('');
	const [fechaFin, setFechaFin] = useState('');
	const [horaFin, setHoraFin] = useState('');
	const [fechaFinTotal, setFechaFinTotal] = useState('');
	const [entidad, setEntidad] = useState('');

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


	useEffect(()=>{
		setCodigoMunicipios([
			{ municipio: '568', departamento: '50',checked: true },
			{ municipio: '001', departamento: '66',checked: true },
			{ municipio: '318', departamento: '66',checked: true },
			{ municipio: '440', departamento: '66',checked: true },
			{ municipio: '456', departamento: '66',checked: true },
			{ municipio: '572', departamento: '66',checked: true },
			{ municipio: '594', departamento: '66',checked: true },
			{ municipio: '001', departamento: '73',checked: true },
			{ municipio: '168', departamento: '73',checked: true },
			{ municipio: '217', departamento: '73',checked: true },
			{ municipio: '483', departamento: '73',checked: true },
			{ municipio: '504', departamento: '73',checked: true },
			{ municipio: '555', departamento: '73',checked: true },
			{ municipio: '616', departamento: '73',checked: true },
			{ municipio: '675', departamento: '73',checked: true },
			{ municipio: '585', departamento: '73',checked: true },
			{ municipio: '671', departamento: '73',checked: true },
			{ municipio: '067', departamento: '73',checked: true },
			{ municipio: '563', departamento: '73',checked: true },
		]);
	},[])
	


	
	//Cada vez que se actualize el estado se concatena la fecha con la hora en un estado
	useEffect(()=>{
		setFechaInicioTotal(`${fechaInicio} ${horaInicio}:00`);
		setFechaFinTotal(`${fechaFin} ${horaFin}:00`);
	}, [fechaInicio,horaInicio,fechaFin,horaFin]);



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


	//Funcion que al hacer submit hace consulta a la API para recibir los datos
	const handleSubmit = (e)=>{
		e.preventDefault(e);
	}


	//Funciones creadas para el onClick de los botones de descarga
	const descargarTXT = ()=>{
		if(lineas.length === 0){
			alert('No hay datos registrados con las condiciones que seleccionaste')
		} else {
      //Agregamos fecha de exportaciona  una collection
      agregarHistorial(fechaUnix,usuario.uid);

			//Ordenamos las lineas de menor fecha a mayor fecha en la cual se realizo la novedad
			const LineasOrdenadasPorTiempo = lineas.sort((a, b) => a.Y_fechaUnix - b.Y_fechaUnix);
			
			//Ordenamos de la A a la Z las propiedades de los objetos dentro del array que se recibe de ObtenerLineas.js
			const ordered = LineasOrdenadasPorTiempo.map(({ A_id, Z_fechaEnvio, Y_fechaUnix, U_idUsuario, ...rest }) => {
				const orderedObj = {};
				Object.keys(rest)
				  .sort()
				  .forEach((key) => {
					orderedObj[key] = rest[key];
				  });
				return {...orderedObj};
			  });

			console.log(ordered);
	
			//llamamos a la funcion que convierte el array en un archivo CSV y a su vez agregamos un indice por cada linea
			convertToCSV(addConsecutivoToObjArray(ordered), fileNameTXT);

		}

	}


	const descargarEXCEL = ()=>{
		if(lineas.length === 0){
			alert('No hay datos registrados con las condiciones que seleccionaste')
		} else {
      //Agregamos fecha de exportaciona  una collection
      agregarHistorial(fechaUnix,usuario.uid);

			const LineasOrdenadasPorTiempo = lineas.sort((a, b) => a.Y_fechaUnix - b.Y_fechaUnix);

			const ordered = LineasOrdenadasPorTiempo.map(({ A_id, Z_fechaEnvio, Y_fechaUnix, U_idUsuario, ...rest }) => {
				const orderedObj = {};
				Object.keys(rest)
				  .sort()
				  .forEach((key) => {
					orderedObj[key] = rest[key];
				  });
				return {...orderedObj};
			  });
	
			handleExport(fileNameEXCEL, ordered);
		}
	}


	return(
		<>
			<Helmet>
				<title>Exportar Novedades</title>
			</Helmet>
			<form onSubmit={(e)=>handleSubmit(e)} className="relative">
				<BotonCerrarSesion />
        <p><span className="font-bold">Fecha ultima exportacion:</span> {fechaExportacion !== undefined && moment.unix(fechaExportacion).format('DD/MM/YYYY hh:mm:ss a')}</p>
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