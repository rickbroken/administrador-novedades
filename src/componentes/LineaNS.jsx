import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import VentanaConfirmar from './VentanaConfirmar';


const LineaNS = ({id,consecutivo,entidad,tipoDoc,identificacion,priApellido,segApellido,priNombre,segNombre,fechaNacimiento,departamento,municipio,tpNovedad,fechaNovedad,V1,V2,V3,V4,V5,V6,V7}) => {
	const [editandoLinea, setEditandoLinea] = useState(false);
	const [mostrarVentana, setMostrarVentana] = useState(false)

	const [Nuevo_entidad,setNuevo_entidad] =useState(entidad);
	const [Nuevo_tipoDoc,setNuevo_tipoDoc] =useState(tipoDoc);
	const [Nuevo_identificacion,setNuevo_identificacion] =useState(identificacion);
	const [Nuevo_priApellido,setNuevo_priApellido] =useState(priApellido);
	const [Nuevo_segApellido,setNuevo_segApellido] =useState(segApellido);
	const [Nuevo_priNombre,setNuevo_priNombre] =useState(priNombre);
	const [Nuevo_segNombre,setNuevo_segNombre] =useState(segNombre);
	const [Nuevo_fechaNacimiento,setNuevo_fechaNacimiento] =useState(fechaNacimiento);
	const [Nuevo_departamento,setNuevo_departamento] =useState(departamento);
	const [Nuevo_municipio,setNuevo_municipio] =useState(municipio);
	const [Nuevo_tpNovedad,setNuevo_tpNovedad] =useState(tpNovedad);
	const [Nuevo_fechaNovedad,setNuevo_fechaNovedad] =useState(fechaNovedad);
	const [Nuevo_V1,setNuevo_V1] =useState(V1);
	const [Nuevo_V2,setNuevo_V2] =useState(V2);
	const [Nuevo_V3,setNuevo_V3] =useState(V3);
	const [Nuevo_V4,setNuevo_V4] =useState(V4);
	const [Nuevo_V5,setNuevo_V5] =useState(V5);
	const [Nuevo_V6,setNuevo_V6] =useState(V6);
	const [Nuevo_V7,setNuevo_V7] =useState(V7);

	const handleActualizar = async() => {
		try {
			await updateDoc(doc(db, 'AllLineas', id), {
				B_entidad: Nuevo_entidad,
				C_tipoDoc: Nuevo_tipoDoc,
				D_identificacion: Nuevo_identificacion,
				E_priApellido: Nuevo_priApellido,
				F_segApellido: Nuevo_segApellido,
				G_priNombre: Nuevo_priNombre,
				H_segNombre: Nuevo_segNombre,
				I_fechaNacimiento: Nuevo_fechaNacimiento,
				J_departamento: Nuevo_departamento,
				K_municipio: Nuevo_municipio,
				L_tpNovedad: Nuevo_tpNovedad,
				M_fechaNovedad: Nuevo_fechaNovedad,
				N_V1: Nuevo_V1,
				O_V2: Nuevo_V2,
				P_V3: Nuevo_V3,
				Q_V4: Nuevo_V4,
				R_V5: Nuevo_V5,
				S_V6: Nuevo_V6,
				T_V7: Nuevo_V7,
			})
		} catch (error) {
			console.log(error);
		}

		setEditandoLinea(false);
	}

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
	{editandoLinea ?
		<tr>
			<td>{consecutivo}</td>
			<td><input type="text" className='text-center border-[1px] border-green-600 h-10' value={Nuevo_entidad} onChange={(e)=>setNuevo_entidad(e.target.value.toUpperCase())}/></td>
			<td><input type="text" className='text-center border-[1px] border-green-600 h-10' value={Nuevo_tipoDoc} onChange={(e)=>setNuevo_tipoDoc(e.target.value.toUpperCase())}/></td>
			<td><input type="text" className='text-center border-[1px] border-green-600 h-10' value={Nuevo_identificacion} onChange={(e)=>setNuevo_identificacion(e.target.value.toUpperCase())}/></td>
			<td><input type="text" className='text-center border-[1px] border-green-600 h-10' value={Nuevo_priApellido} onChange={(e)=>setNuevo_priApellido(e.target.value.toUpperCase())}/></td>
			<td><input type="text" className='text-center border-[1px] border-green-600 h-10' value={Nuevo_segApellido} onChange={(e)=>setNuevo_segApellido(e.target.value.toUpperCase())}/></td>
			<td><input type="text" className='text-center border-[1px] border-green-600 h-10' value={Nuevo_priNombre} onChange={(e)=>setNuevo_priNombre(e.target.value.toUpperCase())}/></td>
			<td><input type="text" className='text-center border-[1px] border-green-600 h-10' value={Nuevo_segNombre} onChange={(e)=>setNuevo_segNombre(e.target.value.toUpperCase())}/></td>
			<td><input type="text" className='text-center border-[1px] border-green-600 h-10' value={Nuevo_fechaNacimiento} onChange={(e)=>setNuevo_fechaNacimiento(e.target.value.toUpperCase())}/></td>
			<td><input type="text" className='text-center border-[1px] border-green-600 h-10' value={Nuevo_departamento} onChange={(e)=>setNuevo_departamento(e.target.value.toUpperCase())}/></td>
			<td><input type="text" className='text-center border-[1px] border-green-600 h-10' value={Nuevo_municipio} onChange={(e)=>setNuevo_municipio(e.target.value.toUpperCase())}/></td>
			<td><input type="text" className='text-center border-[1px] border-green-600 h-10' value={Nuevo_tpNovedad} onChange={(e)=>setNuevo_tpNovedad(e.target.value.toUpperCase())}/></td>
			<td><input type="text" className='text-center border-[1px] border-green-600 h-10' value={Nuevo_fechaNovedad} onChange={(e)=>setNuevo_fechaNovedad(e.target.value.toUpperCase())}/></td>
			<td><input type="text" className='text-center border-[1px] border-green-600 h-10' value={Nuevo_V1} onChange={(e)=>setNuevo_V1(e.target.value.toUpperCase())}/></td>
			<td><input type="text" className='text-center border-[1px] border-green-600 h-10' value={Nuevo_V2} onChange={(e)=>setNuevo_V2(e.target.value.toUpperCase())}/></td>
			<td><input type="text" className='text-center border-[1px] border-green-600 h-10' value={Nuevo_V3} onChange={(e)=>setNuevo_V3(e.target.value.toUpperCase())}/></td>
			<td><input type="text" className='text-center border-[1px] border-green-600 h-10' value={Nuevo_V4} onChange={(e)=>setNuevo_V4(e.target.value.toUpperCase())}/></td>
			<td><input type="text" className='text-center border-[1px] border-green-600 h-10' value={Nuevo_V5} onChange={(e)=>setNuevo_V5(e.target.value.toUpperCase())}/></td>
			<td><input type="text" className='text-center border-[1px] border-green-600 h-10' value={Nuevo_V6} onChange={(e)=>setNuevo_V6(e.target.value.toUpperCase())}/></td>
			<td><input type="text" className='text-center border-[1px] border-green-600 h-10' value={Nuevo_V7} onChange={(e)=>setNuevo_V7(e.target.value.toUpperCase())}/></td>
			<td><Icon icon="icon-park-twotone:check-one" onClick={handleActualizar} color="green" width="23" /></td>
			<td><Icon icon="line-md:cancel-twotone" onClick={()=>setEditandoLinea(false)} color="red" width="23" /></td>
		</tr>
		:
		<tr>
			<td>{consecutivo}</td>
			<td>{entidad}</td>
			<td>{tipoDoc}</td>
			<td>{identificacion}</td>
			<td>{priApellido}</td>
			<td>{segApellido}</td>
			<td>{priNombre}</td>
			<td>{segNombre}</td>
			<td>{fechaNacimiento}</td>
			<td>{departamento}</td>
			<td>{municipio}</td>
			<td>{tpNovedad}</td>
			<td>{fechaNovedad}</td>
			<td>{V1}</td>
			<td>{V2}</td>
			<td>{V3}</td>
			<td>{V4}</td>
			<td>{V5}</td>
			<td>{V6}</td>
			<td>{V7}</td>
			<td><Icon icon="lucide:file-edit" onClick={()=>setEditandoLinea(!editandoLinea)} color="green" width="22" /></td>
			<td><Icon icon="tabler:trash-x-filled" onClick={()=>setMostrarVentana(true)} color="red" width="22" /></td>
		</tr>
	}
  </>
  );
}
 
export default LineaNS;