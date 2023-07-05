import React, { useState, useEffect } from 'react';
import BotonCerrarSesion from './BotonCerrarSesion';
import { Helmet } from 'react-helmet';
import ObtenerLineasNovedades from '../hooks/ObtenerLineasNovedades';
import LineaNS from './LineaNS';
import { Icon } from '@iconify/react';


const Novedades = () => {
	const [fechaInicio, setFechaInicio] = useState('');
	const [fechaFin, setFechaFin] = useState('');
	const [entidad, setEntidad] = useState('');

	const {lineas, setfechaFinUnix, setFechaInicioUnix, setRegimen, ObtenerLinasNS,mostrarCargando,setMostrarCargando} = ObtenerLineasNovedades();

	useEffect(()=>{
		setFechaInicioUnix(`${fechaInicio} 00:00:00`);
		setfechaFinUnix(`${fechaFin} 23:59:59`);
		setRegimen(entidad);
	}, [fechaInicio,fechaFin,setEntidad,entidad,setFechaFin,setFechaInicio]);


	const handleSetFechaInicio = (e) => {
		setFechaInicio(e.target.value);
	}

	const handleSetFechaFin = (e)=>{
		setFechaFin(e.target.value);
	}
	
	const handleSetEntidad = (e)=>{
		setEntidad(e.target.value);
	}
	
	const handleSubmit = () => {
		if(fechaInicio === ''){
			alert('Ingrese una fecha valida de inicio');
			return;
		} else if(fechaFin === '') {
			alert('Ingrese una fecha valida de Fin')
			return;
		} else if(entidad === '') {
			alert('Seleccione un regimen')
			return;
		} else {
			setMostrarCargando(true);
			ObtenerLinasNS();
		}
	}
	


  return (
  <>
    <Helmet>
    <title>Procesar novedades</title>
    </Helmet>
		<form className='relative w-[95%] max-w-none box-border pb-14'>
  		<BotonCerrarSesion />
			 <div className="flex items-end">
				<div className='w-56 mx-2'>
					<label htmlFor="fechaInicio">Fecha Inicio de exportacion:</label>
					<input
						id="fechaInicio"
						type="date"
						onChange={(e)=>handleSetFechaInicio(e)}
						/>
				</div>

				<div className='w-56 mx-2'>
					<label htmlFor="fechaFin">Fecha fin de exportacion:</label>
					<input
						id="fechaFin"
						type="date"
						onChange={(e)=>handleSetFechaFin(e)}
						/>
				</div>
				<div className='mx-2'> 
					<label htmlFor="entidad">Regimen: </label>
					<select
						className='h-[36px]'
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
				<button type='button' onClick={handleSubmit} className='bg-[#6c63ff] w-auto px-8 m-0 h-12'>Buscar</button>
			</div>
		

			<table>
				<thead>
					<tr>
						<th>N°</th>
						<th>EPS</th>
						<th>TP</th>
						<th>Documento</th>
						<th>1 Ape</th>
						<th>2 Ape</th>
						<th>1 Nom</th>
						<th>2 Nom</th>
						<th>Fec Nac</th>
						<th>DP</th>
						<th>MP</th>
						<th>NOV</th>
						<th>Fec NOV</th>
						<th>V1</th>
						<th>V2</th>
						<th>V3</th>
						<th>V4</th>
						<th>V5</th>
						<th>V6</th>
						<th>V7</th>
						<th>Editar</th>
						<th>Borrar</th>
					</tr>
				</thead>
					
				<tbody>
					{ lineas.length !== 0 &&
						lineas.map((linea, i)=>(
							<LineaNS 
								consecutivo={i + 1}
								key={linea.id}
								id={linea.id}
								entidad={linea.B_entidad}
								tipoDoc={linea.C_tipoDoc}
								identificacion={linea.D_identificacion}
								priApellido={linea.E_priApellido}
								segApellido={linea.F_segApellido}
								priNombre={linea.G_priNombre}
								segNombre={linea.H_segNombre}
								fechaNacimiento={linea.I_fechaNacimiento}
								departamento={linea.J_departamento}
								municipio={linea.K_municipio}
								tpNovedad={linea.L_tpNovedad}
								fechaNovedad={linea.M_fechaNovedad}
								V1={linea.N_V1}
								V2={linea.O_V2}
								V3={linea.P_V3}
								V4={linea.Q_V4}
								V5={linea.R_V5}
								V6={linea.S_V6}
								V7={linea.T_V7}
							/>
						))
					}
				</tbody>
			</table>
			<div className='w-full flex justify-center h-8'>
				{mostrarCargando &&
					lineas.length === 0 &&
						<Icon className='animate-spin' icon="eos-icons:loading" color="#6964cf" width="40" />
				}
			</div>
		</form>
  </>
  );
}
 
export default Novedades;