import React, { useEffect, useState } from 'react';
import './App.css';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import ProcesarNovedades from './componentes/ProcesarNovedades';
import ExportarNovedades from './componentes/ExportarNovedades';
import moment from 'moment';
import frasesFamosas from './frases/frases';
import { Helmet } from 'react-helmet';
import InicioSesion from './componentes/InicioSesion';
import RutaPrivada from './componentes/RutaPrivada';


function App() {
  //Estados para dinamisar las clases de el header
  const [procesarNovedades, setProcesarNovedades] = useState('head-inactivo');
  const [exportarNovedades, setExportarNovedades] = useState('head-inactivo');
  const location = useLocation();


  

  //funcion de click con el evento para saber que clase tiene donde se clikea
  //y cambiar dinamicamente el estado si esta activo o no
  const verificar = (e)=>{
    if(e.target.className === "head-home head-inactivo"){
      setExportarNovedades('head-inactivo');
      setProcesarNovedades('head-activo');
    } else if (e.target.className === "head-home exportar head-inactivo"){
      setExportarNovedades('head-activo');
      setProcesarNovedades('head-inactivo');
    }
  }

  
  useEffect(()=>{
    if(location.pathname === "/"){
      setExportarNovedades('head-inactivo');
      setProcesarNovedades('head-activo');
    } else if(location.pathname === "/exportar"){
      setExportarNovedades('head-activo');
      setProcesarNovedades('head-inactivo');
    } else if(location.pathname === "/"){
      setExportarNovedades('head-inactivo');
      setProcesarNovedades('head-activo');
    }
  },[procesarNovedades,exportarNovedades,location.pathname]);

  const fechaHoy = moment();
  const diaDelAnio = fechaHoy.dayOfYear();

  const [frase, setFrase] = useState('');
  const [autor, setAutor] = useState('');
  


  useEffect(() => {
    frasesFamosas.map((fraseFamosa, i) => {
      if (i === diaDelAnio) {
        setFrase(fraseFamosa.frase);
        setAutor(fraseFamosa.autor);
      }
      return null;
    });
  }, [frase,autor,diaDelAnio]);

  return (
    <>
      <Helmet>
        <title>Administrador de novedades</title>
      </Helmet>
      {/* MOSTRAR CONTENEDOR DE FRASES
        location.pathname !== '/iniciar-sesion' ?
          <div className='contenedor-frase'>
            <p className='frase'>"{frase}"</p>
            <p className='autor'>{autor}</p>
          </div>
          : false
      */}
      <div className='container'>
        <nav>
          {
            location.pathname !== '/iniciar-sesion'  ? <><NavLink onClick={(e)=>verificar(e)} to="/" className={`left-4 head-home ${procesarNovedades}`}>Procesar Novedades</NavLink>
            <NavLink onClick={(e)=>verificar(e)} to='/exportar' className={`head-home exportar ${exportarNovedades}`}>Exportar Novedades</NavLink></> : false
          }
          
        </nav>
        <Routes>
          <Route path="/iniciar-sesion" element={<InicioSesion />}/>
          

          <Route path="*" element={
            <RutaPrivada>
              <ProcesarNovedades />
            </RutaPrivada>
          }/>

          <Route path="/" element={
            <RutaPrivada>
              <ProcesarNovedades />
            </RutaPrivada>
          }/>


          <Route path="/exportar" element={
            <RutaPrivada>
              <ExportarNovedades />
            </RutaPrivada>
          }/>
        </Routes>
        
      </div>
    </>
  );
}


export default App;
