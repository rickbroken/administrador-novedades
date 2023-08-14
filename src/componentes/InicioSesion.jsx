import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import {auth} from './../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contextos/useAuth';


const InicioSesion = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const {usuario} = useAuth();


	useEffect(()=>{
		if(usuario){
			navigate('/');
		}
	},[usuario,navigate]);


	const handleSubmit = async(e) => {
		e.preventDefault();
		const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
		if(!expresionRegular.test(email)){
			alert('Ingresa un correo valido');
			return;
		} else if(email === '' || password === ''){
			alert('Completa todos los campos requeridos')
		} else {
			try {
				await signInWithEmailAndPassword(auth, email, password);

				navigate('/');
			} catch (error) {
				console.log('Error al intentar iniciar sesion');

				switch (error.code) {
					case 'auth/wrong-password':
						alert('Contraseña incorrecta');
						break;
	
					case 'auth/user-not-found':
						alert('La cuenta ingresada, no existe :(');
						break;
	
					default:
						alert('Hubo algun error al intentar iniciar sesion :(');
						break;
				}
			}
		}
	}


  return ( 
    <div className='h-full w-full flex items-center'>
			<Helmet>
				<title>Iniciar sesion</title>
			</Helmet>

				<form onSubmit={handleSubmit} className='w-[290px] rounded-md shadow-md mx-auto flex flex-col justify-center items-center'>
					<p className='text-lg font-sans font-bold text-gray-700'>Inicio de Sesion</p>
					<p className='text-lg font-sans text-gray-700'>Administrador Novedades BDUA</p>

					<input
						className='w-10/12 my-2 border-[#7d77e9] focus:outline-none' 
						type="email" 
						name="email" 
						id="" 
						placeholder='Ingrese su email'
						value={email}
						onChange={(e)=>setEmail(e.target.value)}
					/>
					<input 
						className='w-10/12 my-2 border-[#7d77e9] focus:outline-none' 
						type="password" 
						name="password" 
						id="" 
						placeholder='Contraseña'
						value={password}
						onChange={(e)=>setPassword(e.target.value)}
					/>

					<button type='submit' className='w-10/12 bg-[#6c63ff]'>Ingresar</button>
				</form>
    </div>
   );
}
 
export default InicioSesion;