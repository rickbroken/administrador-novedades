import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';

const BotonCerrarSesion = () => {
    const navigate = useNavigate();

    const cerrarSesion = async() => {
        try {
            await signOut(auth);
            navigate('/iniciar-sesion')
        } catch (error) {
            console.log('Error al intentar cerrar sesion');
        }
    }
    return ( 
        <button onClick={()=>cerrarSesion()} className='w-32 px-1 py-02 absolute right-0 top-[-47px] bg-red-500 hover:bg-red-700'>
            Cerrar Sesion
        </button>
     );
}
 
export default BotonCerrarSesion;