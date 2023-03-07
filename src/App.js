import React, { useEffect, useState } from 'react';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import ProcesarNovedades from './componentes/ProcesarNovedades';
import ExportarNovedades from './componentes/ExportarNovedades';
import Error404 from './componentes/Error404';
import moment from 'moment';
import frasesFamosas from './frases/frases';


function App() {
  //Estados para dinamisar las clases de el header
  const [procesarNovedades, setProcesarNovedades] = useState('head-activo');
  const [exportarNovedades, setExportarNovedades] = useState('head-inactivo');

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
    if(window.location.pathname === "/administrador-novedades/"){
      setExportarNovedades('head-inactivo');
      setProcesarNovedades('head-activo');
    } else if(window.location.pathname === "/administrador-novedades/exportar"){
      setExportarNovedades('head-activo');
      setProcesarNovedades('head-inactivo');
    }
  },[]);

  const fechaHoy = moment();
  const diaDelAnio = fechaHoy.dayOfYear();

  const [frase, setFrase] = useState('');
  const [autor, setAutor] = useState('');

  console.log(diaDelAnio);

  useEffect(() => {
    frasesFamosas.map((fraseFamosa, i) => {
      if (i === diaDelAnio) {
        console.log(fraseFamosa.frase);
        setFrase(fraseFamosa.frase);
        setAutor(fraseFamosa.autor);
      }
    });
  }, []);

  return (
    <>
      <div className='contenedor-frase'>
        <p className='frase'>"{frase}"</p>
        <p className='autor'>{autor}</p>
      </div>
      <div className='container'>
        <nav>
          <NavLink onClick={(e)=>verificar(e)} to="/administrador-novedades/" className={`head-home ${procesarNovedades}`}>Procesar Novedades</NavLink>
          <NavLink onClick={(e)=>verificar(e)} to='/administrador-novedades/exportar' className={`head-home exportar ${exportarNovedades}`}>Exportar Novedades</NavLink>
        </nav>
        <Routes>
          <Route path="*" element={<Error404 />}/>
          <Route path="/administrador-novedades/" element={<ProcesarNovedades />}/>
          <Route path="/administrador-novedades/exportar" element={<ExportarNovedades />}/>
        </Routes>
        
      </div>
    </>
  );
}


export default App;
