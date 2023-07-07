import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import VentanaConfirmar from './VentanaConfirmar';
import VentanaEditar from './VentanaEditar';


const LineaNS = ({id,consecutivo,entidad,tipoDoc,identificacion,priApellido,segApellido,priNombre,segNombre,fechaNacimiento,departamento,municipio,tpNovedad,fechaNovedad,V1,V2,V3,V4,V5,V6,V7}) => {
	const [mostrarVentana, setMostrarVentana] = useState(false)
	const [ventanaEditar, setVentanaEditar] = useState(false)


	const eliminarContacto = async (id) => {
		try {
			await deleteDoc(doc(db, 'AllLineas', id))
		} catch (error) {
			console.log(error);
		}
	}

	const ventanaConfirmar = (id) => {
		eliminarContacto(id)
		setMostrarVentana(false);
	}

  return (
  <>
	{mostrarVentana && 
		<VentanaConfirmar
			id={id}
			ventanaConfirmar={(id)=>ventanaConfirmar(id)}
			setMostrarVentana={()=>setMostrarVentana(false)}
		/>
	}
	{ventanaEditar &&
		<VentanaEditar 
			setVentanaEditar={setVentanaEditar}
			id={id}
			consecutivo={consecutivo}
			entidad={entidad}
			tipoDoc={tipoDoc}
			identificacion={identificacion}
			priApellido={priApellido}
			segApellido={segApellido}
			priNombre={priNombre}
			segNombre={segNombre}
			fechaNacimiento={fechaNacimiento}
			departamento={departamento}
			municipio={municipio}
			tpNovedad={tpNovedad}
			fechaNovedad={fechaNovedad}
			V1={V1}
			V2={V2}
			V3={V3}
			V4={V4}
			V5={V5}
			V6={V6}
			V7={V7}
		/>	
	}

	{
		<tr>
			<td>{consecutivo}</td>
			<td width={60}>{entidad}</td>
			<td width={50}>{tipoDoc}</td>
			<td>{identificacion}</td>
			<td>{priApellido}</td>
			<td>{segApellido}</td>
			<td>{priNombre}</td>
			<td>{segNombre}</td>
			<td>{fechaNacimiento}</td>
			<td width={30}>{departamento}</td>
			<td width={35}>{municipio}</td>
			<td width={40}>{tpNovedad}</td>
			<td>{fechaNovedad}</td>
			<td>{V1}</td>
			<td>{V2}</td>
			<td>{V3}</td>
			<td>{V4}</td>
			<td>{V5}</td>
			<td>{V6}</td>
			<td>{V7}</td>
			<td width={30}><Icon icon="lucide:file-edit" onClick={()=>setVentanaEditar(true)} color="green" width="22" /></td>
			<td width={30}><Icon icon="tabler:trash-x-filled" onClick={()=>setMostrarVentana(true)} color="red" width="22" /></td>
		</tr>
	}
  </>
  );
}
 
export default LineaNS;