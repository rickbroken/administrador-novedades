import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const VentanaEditar = ({setVentanaEditar,id,entidad,tipoDoc,identificacion,priApellido,segApellido,priNombre,segNombre,fechaNacimiento,departamento,municipio,tpNovedad,fechaNovedad,V1,V2,V3,V4,V5,V6,V7}) => {

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
        setVentanaEditar(false);
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
            alert('Hubo un error al intentar editar la novedad :(');
		}
	}


    return (
    <div className='fixed w-screen h-screen bg-[#00000038] top-0 left-0 z-20 flex items-center justify-center'>
        <div className='fixed w-[500px] py-8 h-auto bg-white rounded-xl flex flex-col justify-center items-center'>
            <Icon 
                className='absolute top-4 right-4 cursor-pointer' 
                icon="fluent-emoji-high-contrast:cross-mark" 
                color="gray" 
                width="20" 
                onClick={()=>setVentanaEditar(false)}
            />
            <p className='text-xl font-bold pb-4'>Editar Novedad</p>
            <div className='flex w-11/12 flex-wrap flex-row'>
                <input type="text" className='mx-1 text-center w-2/12' placeholder='Cod EPS' value={Nuevo_entidad} onChange={(e)=>setNuevo_entidad(e.target.value.toUpperCase())} />
                <input type="text" className='mx-1 text-center w-2/12' placeholder='Tp Documento' value={Nuevo_tipoDoc} onChange={(e)=>setNuevo_tipoDoc(e.target.value.toUpperCase())} />
                <input type="text" className='mx-1 text-center w-[62%]' placeholder='Documento' value={Nuevo_identificacion} onChange={(e)=>setNuevo_identificacion(e.target.value.toUpperCase())} />
                <input type="text" className='m-1 text-center w-auto' placeholder='Primer apellido' value={Nuevo_priApellido} onChange={(e)=>setNuevo_priApellido(e.target.value.toUpperCase())} />
                <input type="text" className='m-1 text-center w-[35%]' placeholder='Segundo apellido' value={Nuevo_segApellido} onChange={(e)=>setNuevo_segApellido(e.target.value.toUpperCase())} />
                <input type="text" className='m-1 text-center w-auto' placeholder='Primer nombre' value={Nuevo_priNombre} onChange={(e)=>setNuevo_priNombre(e.target.value.toUpperCase())} />
                <input type="text" className='m-1 text-center w-auto' placeholder='Segundo nombre' value={Nuevo_segNombre} onChange={(e)=>setNuevo_segNombre(e.target.value.toUpperCase())} />
                <input type="text" className='m-1 text-center w-[35%]' placeholder='Fecha nacimiento' value={Nuevo_fechaNacimiento} onChange={(e)=>setNuevo_fechaNacimiento(e.target.value.toUpperCase())} />
                <input type="text" className='m-1 text-center w-auto' placeholder='Cod Departamento' value={Nuevo_departamento} onChange={(e)=>setNuevo_departamento(e.target.value.toUpperCase())} />
                <input type="text" className='m-1 text-center w-auto' placeholder='Cod Municipio' value={Nuevo_municipio} onChange={(e)=>setNuevo_municipio(e.target.value.toUpperCase())} />
                <input type="text" className='m-1 text-center w-[35%]' placeholder='Tp Novedad' value={Nuevo_tpNovedad} onChange={(e)=>setNuevo_tpNovedad(e.target.value.toUpperCase())} />
                <input type="text" className='m-1 text-center w-auto' placeholder='Fecha Novedad' value={Nuevo_fechaNovedad} onChange={(e)=>setNuevo_fechaNovedad(e.target.value.toUpperCase())} />
                <input type="text" className='m-1 border-violet-400 text-center w-auto' placeholder='Valor 1' value={Nuevo_V1} onChange={(e)=>setNuevo_V1(e.target.value.toUpperCase())} />
                <input type="text" className='m-1 border-violet-400 text-center w-[35%]' placeholder='Valor 2' value={Nuevo_V2} onChange={(e)=>setNuevo_V2(e.target.value.toUpperCase())} />
                <input type="text" className='m-1 border-violet-400 text-center w-auto' placeholder='Valor 3' value={Nuevo_V3} onChange={(e)=>setNuevo_V3(e.target.value.toUpperCase())} />
                <input type="text" className='m-1 border-violet-400 text-center w-auto' placeholder='Valor 4' value={Nuevo_V4} onChange={(e)=>setNuevo_V4(e.target.value.toUpperCase())} />
                <input type="text" className='m-1 border-violet-400 text-center w-[35%]' placeholder='Valor 5' value={Nuevo_V5} onChange={(e)=>setNuevo_V5(e.target.value.toUpperCase())} />
                <input type="text" className='m-1 border-violet-400 text-center w-auto' placeholder='Valor 6' value={Nuevo_V6} onChange={(e)=>setNuevo_V6(e.target.value.toUpperCase())} />
                <input type="text" className='m-1 border-violet-400 text-center w-auto' placeholder='Valor 7' value={Nuevo_V7} onChange={(e)=>setNuevo_V7(e.target.value.toUpperCase())} />
            </div>
            <div className='flex w-full justify-center mt-6'>
                <button 
                    type='button' 
                    className='bg-[#2cbd68] my-0 hover:bg-[#229954] w-4/12 py-3' 
                    onClick={handleActualizar}
                >
                    Guardar cambios
                </button>
                
                <button
                    type='button' 
                    className='w-4/12 px-6 py-3 my-0 mx-2 bg-red-500 hover:bg-[#99222c]'
                    onClick={()=>setVentanaEditar(false)}
                >
                    Cancelar
                </button>
            </div>
        </div>
    </div>
    );
}
 
export default VentanaEditar;