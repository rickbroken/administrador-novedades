import React, { useState, useEffect } from 'react';
import BotonCerrarSesion from './BotonCerrarSesion';
import { Icon } from '@iconify/react';
import { Helmet } from 'react-helmet';
import ObtenerLineasNovedades from '../hooks/ObtenerLineasNovedades';


const Novedades = () => {
	const [fechaInicio, setFechaInicio] = useState('');
	const [fechaFin, setFechaFin] = useState('');
	const [entidad, setEntidad] = useState('');

	const {lineas, setfechaFinUnix, setFechaInicioUnix, setRegimen, ObtenerLinasNS} = ObtenerLineasNovedades();

	useEffect(()=>{
		setFechaInicioUnix(`${fechaInicio} 00:00:00`);
		setfechaFinUnix(`${fechaFin} 00:00:00`);
		setRegimen(entidad);
	}, [fechaInicio,fechaFin,setEntidad,entidad,setFechaFin,setFechaInicio]);

	const handleSetFechaInicio = (e) => {
		setFechaInicio(e.target.value);
	}

	const handleSubmit = () => {
		ObtenerLinasNS();
	}

	useEffect(()=>{
		console.log(lineas);
	},[lineas])

	const handleSetFechaFin = (e)=>{
		setFechaFin(e.target.value);
	}

	const handleSetEntidad = (e)=>{
		setEntidad(e.target.value);
	}


  return (
  <>
    <Helmet>
    <title>Procesar novedades</title>
    </Helmet>
		<form className='relative w-[95%] max-w-none'>
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
		

			<table className=''>
				<thead>
					<tr>
						<th>N°</th>
						<th>EPS</th>
						<th>TP</th>
						<th>Documento</th>
						<th>1 Apellido</th>
						<th>2 Apellido</th>
						<th>1 Nombre</th>
						<th>2 Nombre</th>
						<th>Fech Nacimiento</th>
						<th>DP</th>
						<th>MP</th>
						<th>NOV</th>
						<th>Fech NOV</th>
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
					{ lineas.length !== 0 ?
						<>
							{lineas.map((linea, i)=>{
								return <tr>
									<td>{i + 1}</td>
									<td>{linea.B_entidad}</td>
									<td>{linea.C_tipoDoc}</td>
									<td>{linea.D_identificacion}</td>
									<td>{linea.E_priApellido}</td>
									<td>{linea.F_segApellido}</td>
									<td>{linea.G_priNombre}</td>
									<td>{linea.H_segNombre}</td>
									<td>{linea.I_fechaNacimiento}</td>
									<td>{linea.J_departamento}</td>
									<td>{linea.K_municipio}</td>
									<td>{linea.L_tpNovedad}</td>
									<td>{linea.M_fechaNovedad}</td>
									<td>{linea.N_V1}</td>
									<td>{linea.O_V2}</td>
									<td>{linea.P_V3}</td>
									<td>{linea.Q_V4}</td>
									<td>{linea.R_V5}</td>
									<td>{linea.S_V6}</td>
									<td>{linea.T_V7}</td>
									<td><Icon icon="lucide:file-edit" color="green" width="22" /></td>
									<td><Icon icon="tabler:trash-x-filled" color="red" width="22" /></td>
								</tr>
							})}
						</>
						
						: false
					}
				</tbody>
			</table>
		</form>
  </>
  );
}
 
export default Novedades;