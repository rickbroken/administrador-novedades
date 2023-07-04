import React, { useState, useEffect } from 'react';
import BotonCerrarSesion from './BotonCerrarSesion';
import { Icon } from '@iconify/react';
import { Helmet } from 'react-helmet';

const Novedades = () => {
	const [fechaInicio, setFechaInicio] = useState('');
	const [fechaFin, setFechaFin] = useState('');
	const [fechaInicioTotal, setFechaInicioTotal] = useState('');
	const [fechaFinTotal, setFechaFinTotal] = useState('');
	const [entidad, setEntidad] = useState('');



	useEffect(()=>{
		setFechaInicioTotal(`${fechaInicio}`);
		setFechaFinTotal(`${fechaFin}`);
		console.log(fechaInicioTotal);
		console.log(fechaFinTotal);
	}, [fechaInicio,fechaFin]);

	const handleSetFechaInicio = (e) => {
		setFechaInicio(e.target.value);
		
	}

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
				<button type='button' className='bg-[#6c63ff] w-auto px-8 m-0 h-12'>Buscar</button>
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
					<tr>
						<td>1</td>
						<td>EPSI06</td>
						<td>RC</td>
						<td>1124840108</td>
						<td>LEON</td>
						<td>AMAYA</td>
						<td>JAROL</td>
						<td>ESNEIDER</td>
						<td>15/06/2023</td>
						<td>50</td>
						<td>568</td>
						<td>N03</td>
						<td>20/06/2023</td>
						<td>FRANCO</td>
						<td>LEON</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td><Icon icon="lucide:file-edit" color="green" width="22" /></td>
						<td><Icon icon="tabler:trash-x-filled" color="red" width="22" /></td>
					</tr>
					<tr>
						<td>1</td>
						<td>EPSI06</td>
						<td>RC</td>
						<td>1124840108</td>
						<td>LEON</td>
						<td>AMAYA</td>
						<td>JAROL</td>
						<td>ESNEIDER</td>
						<td>15/06/2023</td>
						<td>50</td>
						<td>568</td>
						<td>N03</td>
						<td>20/06/2023</td>
						<td>FRANCO</td>
						<td>LEON</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td><Icon icon="lucide:file-edit" color="green" width="22" /></td>
						<td><Icon icon="tabler:trash-x-filled" color="red" width="22" /></td>
					</tr>
					
				</tbody>
			</table>
		</form>
  </>
  );
}
 
export default Novedades;