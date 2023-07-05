import React from 'react';

const VentanaConfirmar = ({id,ventanaConfirmar,setMostrarVentana}) => {
    return (
    <div className='fixed w-screen h-screen bg-[#0000001a] top-0 left-0 z-20 flex items-center justify-center'>
        <div className='fixed w-96 h-48 bg-white rounded-xl flex flex-col justify-center items-center'>
            <p className='text-xl'>¿Seguro de elimiar este elemento?</p>
            <div>
                <button type='button' className='w-auto px-6 py-3 mx-2 bg-red-600' onClick={()=>ventanaConfirmar(id)}>Eliminar</button>
                <button type='button' className='w-auto px-6 py-3 mx-2 bg-[#6c63ff]' onClick={()=>setMostrarVentana(false)}>Cancelar</button>
            </div>
        </div>
    </div>
    );
}
 
export default VentanaConfirmar;