import React from 'react';
import { useState, useEffect } from "react";
//import Papa from 'papaparse';
//import { saveAs } from 'file-saver';
import moment from 'moment';
import { handleMunicipio2 } from '../funciones/Municipios.js';
import { handleDepartamento2 } from '../funciones/Departamentos.js';
import CambioMunicipio from '../componentes/CambioMunicipio';
import ActualizacionDeCNRC from '../componentes/ActualizacionDeCNRC';
import MunicipiosTolima from '../componentes/MuicipiosTolima';
import MunicipiosMeta from '../componentes/MuicipiosMeta';
import Departamentos from '../componentes/Departamentos';
import TiposDocumentos from '../componentes/TiposDocumentos';
import N01 from '../componentes/N01';
import N02 from '../componentes/N02';
import N03 from '../componentes/N03';
import N04 from '../componentes/N04';
import N05 from '../componentes/N05';
import N06 from '../componentes/N06';
import N07 from '../componentes/N07';
import N08 from '../componentes/N08';
import N09 from '../componentes/N09';
import N10 from '../componentes/N10';
import N11 from '../componentes/N11';
import N12 from '../componentes/N12';
import N13 from '../componentes/N13';
import N14 from '../componentes/N14';
import N17 from '../componentes/N17';
import N19 from '../componentes/N19';
import N21 from '../componentes/N21';
import N25 from '../componentes/N25';
import N31 from '../componentes/N31';
import N32 from '../componentes/N32';
import N33 from '../componentes/N33';
import N35 from '../componentes/N35';
import N36 from '../componentes/N36';
import N37 from '../componentes/N37';
import N38 from '../componentes/N38';
import N39 from '../componentes/N39';
//import cors from 'cors';
import Confirmacion from './Confirmacion.js';
import InputOption from './InputOption';
import { Helmet } from 'react-helmet';
import BotonCerrarSesion from './BotonCerrarSesion.jsx';
import { useAuth } from '../contextos/useAuth.js';
import agregarLineas from '../firebase/agregarLineas.js';

//Desactivar advertencias en consola de momentJs
moment.suppressDeprecationWarnings = true;


function ProcesarNovedades() {
  //definimos el estado de linea que a su vez se guarda en un array-
  //dentro los objetos
  const [linea, setLinea] = useState([{}]);

  const {usuario} = useAuth();

  
  //Organizar las columnas de los objetos de linea, alfabeticamente
  const LineaOrganizada = linea.map(obj =>
    Object.fromEntries(Object.entries(obj).sort())
  );
  
  
  
  //Definimos los estados que se guardaran en en el estado de linea
  const [regimenAfiliado, setRegimenAfiliado] = useState("");
  const [fechaNovedad, setFechaNovedad] = useState("");
  const [tipoNovedad, setTipoNovedad] = useState("");
  const [tipoDoc, setTipoDoc] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [priNombre, setPriNombre] = useState("");
  const [segNombre, setSegNombre] = useState("");
  const [priApellido, setPriApellido] = useState("");
  const [segApellido, setSegApellido] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [municipio, setMunicipio] = useState("");
  
  
  //Damos formato a la fecha presente, el valor varia dependiendo el dia actual
  //Para pasarselo a el nombre del archivo .txt
  const fechaHoySinFormato = moment();
  const fechaState = fechaHoySinFormato.format('YYYY-MM-DD HH:mm:ss');
  //const fechHoyArchivo = fechaHoySinFormato.format('DDMMYYYY');
  const [fechaEnvio, setFechaEnvio] = useState("");


  //Definimos el nombre de el archivo .cvs que se exporta
  //const fileName = `NS${regimenAfiliado}${fechHoyArchivo}.txt`;



  //Definimos los estados para los departamento y municipios para-
  //compararlos y transformar de str a codigo de depart y municipio
  const [departamento2, setDepartamento2] = useState("");
  const [municipio2, setMunicipio2] = useState("");
  
  
  //Formateamos el valor por defecto de el input date, a DD/MM/YYYY
  const [fecha, setFecha] = useState();
  const fechaSinUnix = moment();
  const [fechaNovedadFormateada, setFechaNovedadFormateada] = useState();

  useEffect(()=>{
    //Fecha formato para fecha nacimiento
    const fecha = fechaNacimiento; //Varia el nombre del state segun el estado del componente
    const fechaMoment = moment(fecha);
    const fechaFormateada = fechaMoment.format("DD/MM/YYYY");
    setFecha(fechaFormateada);
    //Fecha formato para dia de novedad
    const fecha2 = fechaNovedad; //Varia el nombre del state segun el estado del componente
    const fechaMoment2 = moment(fecha2);
    const fechaFormateada2 = fechaMoment2.format("DD/MM/YYYY");
    setFechaNovedadFormateada(fechaFormateada2);
  },[fechaNacimiento,fechaNovedad,setFecha,setFechaNovedadFormateada]);


  //Definimos las funciones que cambiaran el estado de los inputs
  const handleTipoDoc= (e)=>{
    setTipoDoc(e.target.value);
  }
  const handleValidacionCN = () => {
      if(tipoNovedad === "Actualizacion de CN a RC"){
        if(identificacion.length === 14 || identificacion.length === 9 || identificacion.length === 0){
          //console.log('Total: ' + identificacion.length);
          setTipoDoc('CN');
        } else {
          alert('El tipo de Documento tiene que tener 14 o 9 digitos');
        }
      }
  }
  const handleIdentificacion= (e)=>{
    const numericValue = e.target.value.replace(/\D/g, '');
    setIdentificacion(numericValue);
  }

  //Ingresar por default 'HIJO DE' si se selecciona la opcion "Actualizacion de CN a RC"
  useEffect(()=>{
    if(tipoNovedad === "Actualizacion de CN a RC"){
      setPriNombre('HIJO DE');
    }
  },[tipoNovedad]);


  const handlePriNombre= (e)=>{
    const value = e.target.value.toUpperCase();
    setPriNombre(value);
  }
  const handleSegNombre= (e)=>{
    const value = e.target.value.toUpperCase();
    setSegNombre(value);
  }
  const handlePriApellido= (e)=>{
    const value = e.target.value.toUpperCase();
    setPriApellido(value);
  }
  const handleSegApellido= (e)=>{
    const value = e.target.value.toUpperCase();
    setSegApellido(value);
  }
  const handleFechaNovedad= (e)=>{
    setFechaNovedad(e.target.value);
  }
  
  const handleFechaNacimiento= (e)=>{
    setFechaNacimiento(e.target.value);
  }

  const handleRegimenAfiliado = (e) => {
    setRegimenAfiliado(e.target.value);
  }

  
  //Funcion para limpiar el formulario
  const resetearFormulario = () => {
    setLinea([{}]);
    setTipoDoc("")
    setIdentificacion("");
    setPriNombre("");
    setSegNombre("");
    setPriApellido("");
    setSegApellido("");
    setFechaNacimiento("");
    setDepartamento("");
    setMunicipio("");
    setRegimenAfiliado("");
    setDepartamento2("");
    setMunicipio2("");
    setFechaNovedad("");
  }



  //Al cambiar el estado del input option de "tipo novedad", se resetean lo demas estados
  const handleTipoNovedad = (e)=>{
    setTipoNovedad(e.target.value);
    resetearFormulario();
  }

  useEffect(()=>{
    setLinea(linea => {
      return linea.map(obj => ({
        ...obj,
        U_idUsuario: usuario.uid
      }));
    });
  },[usuario,regimenAfiliado,tipoDoc, identificacion, priApellido, segApellido, fecha,fechaNovedadFormateada,fechaEnvio])

 
  useEffect(() => {
    setLinea(linea => {
      return linea.map(obj => ({
        ...obj,
        A_id: 'false',
        B_entidad: regimenAfiliado,
        D_identificacion: identificacion,
        E_priApellido: priApellido,
        F_segApellido: segApellido,
        I_fechaNacimiento: fecha,
        M_fechaNovedad: fechaNovedadFormateada,
        Y_fechaUnix: fechaSinUnix.unix(),
      }));
    });
  }, [regimenAfiliado,tipoDoc, identificacion, priApellido, segApellido, fecha,fechaNovedadFormateada,fechaSinUnix]);

  useEffect(() => {
    setLinea(linea => {
      return linea.map(obj => ({
        ...obj,
        Z_fechaEnvio: fechaEnvio
      }));
    });
  }, [fechaEnvio]);

  useEffect(() => {
    setLinea(linea => {
      return linea.map(obj => ({
        ...obj,
        C_tipoDoc: tipoDoc,
        G_priNombre: priNombre,
        H_segNombre: segNombre
      }));
    });
  }, [tipoDoc,priNombre, segNombre]);


  useEffect(() => {
    setLinea(linea => {
      return linea.map(obj => ({
        ...obj,
        J_departamento: departamento,
        K_municipio: municipio
      }));
    });
  }, [departamento, municipio]);

  
  
  const enviarNovedades = () => {
    console.log(LineaOrganizada.length);
    agregarLineas(LineaOrganizada);
    fetch('https://rickbroken.com/api/insertar_lineas.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      cors: true,
      body: JSON.stringify(LineaOrganizada)
    })
    .then(response => response.json())
    .then(LineaOrganizada => console.log(LineaOrganizada))
    .catch(error => console.error(error));
  }


  //Estado para mostrar el mensaje de confirmacion de envio, esta en false = oculto
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

  //Boton aceptar y acciones que se hacen al enviar el formulario
  const handleAceptar = ()=>{
    enviarNovedades();
    //console.log(linea);
    setTipoNovedad('');
    resetearFormulario();
    setMostrarConfirmacion(false);
  }
  //cambia el estado de mensaje confirmacion a false = oculto
  const handleCancelar = ()=>{
    setMostrarConfirmacion(false);
  }
  
  //activa el mensaje de confirmacion true = visible
  const handleSubmit = () => {
    if(tipoNovedad === 'Actualizacion de CN a RC'){
      //console.log(LineaOrganizada[2].priApellido);
      if(linea[2].N_V1 === ''){
        console.log(linea[2].N_V1);
        linea.pop();
        console.log(linea);
      }
    }
    setFechaEnvio(fechaState);
    setMostrarConfirmacion(true);
  };



  //Se establese estdo para mantener activo el input de TipoDoc,PriNombre,SegNombre
  const [inputEstado, setInputEstado] = useState(false)
  //Funcion que cambia el estado cada vez que el estado de Municipio cambia
  //ya que municipio es el ultimo input para diligenciar
  const inputTipoDoc = document.getElementById('tpIdentificacion');
  const inputDepartamento = document.getElementById('departamento');
  const inputMunicipio = document.getElementById('municipio');

  //Funcion para inabilitar los inputs cuando se finaliza primer etapa de formulario
  const desactivarInput = () => {
    setInputEstado('disabled');
    inputTipoDoc.setAttribute('disabled','');
    inputDepartamento.setAttribute('disabled','');
    inputMunicipio.setAttribute('disabled','');
  }

  //Se establese que al cargar la app los inputs nuevamente esten habilidatos
  useEffect(()=>{
    if(inputEstado === 'disabled'){
      if(inputTipoDoc.hasAttribute('disabled')){
        setInputEstado(false);
        inputTipoDoc.removeAttribute('disabled');
        inputDepartamento.removeAttribute('disabled');
        inputMunicipio.removeAttribute('disabled');
      }
    }
  },[inputDepartamento,inputEstado,inputTipoDoc,inputMunicipio])
  

  const handleHoy = () => {
    const fechaHoy = fechaHoySinFormato.format('YYYY-MM-DD');
    setFechaNovedad(fechaHoy);
  }

  return (
    <>
      <Helmet>
        <title>Procesar novedades</title>
      </Helmet>
      <form className='relative'>
        <BotonCerrarSesion />
      <div>
          <label htmlFor="tipoNovedad">Novedad a realizar: </label>
          <select
            id="tipoNovedad"
            name="tipoNovedad"
            onChange={(e)=>{handleTipoNovedad(e)}}
            value={tipoNovedad}
          >
            <InputOption value="">Seleccione el tipo de novedad:</InputOption>
            <InputOption value="Cambio de DP y MP">Cambio de Departamento y Municipio "N04-N25"</InputOption>
            <InputOption value="Actualizacion de CN a RC">Actualizacion de CN a RC "N01-N02-N03"</InputOption>
            <InputOption value="N01">N01 - Actualizacion de documento</InputOption>
            <InputOption value="N02">N02 - Actualizacion de Nombres</InputOption>
            <InputOption value="N03">N03 - Actualizacion de Apellidos</InputOption>
            <InputOption value="N04">N04 - Actualizacion de Municipio o departamento</InputOption>
            <InputOption value="N05">N05 - Actualizacion de segundo cotz a cotizante principal</InputOption>
            <InputOption value="N06">N06 - Adicion de relacion con un aporte o react. en la misma entidad</InputOption>
            <InputOption value="N07">N07 - Inclucion de adiliado a un group familiar, camvio de condicion de beneficiario</InputOption>
            <InputOption value="N08">N08 - Actualizacion de beneficiario a otro tipo de beneficiario o cot principal</InputOption>
            <InputOption value="N09">N09 - Retiro por Muerte</InputOption>
            <InputOption value="N10">N10 - Actualizacion de relacion laboral</InputOption>
            <InputOption value="N11">N11 - Finalizacion de relacion con un aporte</InputOption>
            <InputOption value="N12">N12 - Condicion de discapacidad</InputOption>
            <InputOption value="N13">N13 - Novedad de retiro en BDUA</InputOption>
            <InputOption value="N14">N14 - Estado de Afiliacion</InputOption>
            <InputOption value="N17">N17 - Cambiar tipo sexo del afiliado</InputOption>
            <InputOption value="N19">N19 - Cambiar zona del afiliado</InputOption>
            <InputOption value="N21">N21 - Tipo de poblacion especial</InputOption>
            <InputOption value="N25">N25 - Cambio de IPS Primaria</InputOption>
            <InputOption value="N31">N31 - Reactivacion del cabeza de familia en la misma EPS</InputOption>
            <InputOption value="N32">N32 - Conformación grupo familiar en régimen subsidiado, activación de beneficiarios y add</InputOption>
            <InputOption value="N33">N33 - Novedad de retiro retroactiva en la misma entidad</InputOption>
            <InputOption value="N35">N35 - Actualización o corrección fecha de afiliación</InputOption>
            <InputOption value="N36">N36 - Cambio de Beneficiario o Adicional a Cabeza de familia</InputOption>
            <InputOption value="N37">N37 - Novedad de Etnia</InputOption>
            <InputOption value="N38">N38 - Comunidad indígena o nombre del resguardo</InputOption>
            <InputOption value="N39">N39 - Condicion de portabilidad del afiliado</InputOption>
          </select>
          <hr/>
        </div>
        <div>
          <label htmlFor="regimenAfiliado">Regimen del afiliado: </label>
          <select
            id="regimenAfiliado"
            name="regimenAfiliado"
            onChange={(e)=>handleRegimenAfiliado(e)}
            value={regimenAfiliado}
          >
            <option value="">Seleccione un regimen</option>
            <option value="EPSI06">Subsidiado</option>
            <option value="EPSIC6">Contributivo</option>
          </select>
        </div>
        <div>
          <label htmlFor="fechaNovedad">Fecha de Novedad: </label>
          <div className='flex items-center'>
            <input
              className='w-10/12'
              type="date"
              id="fechaNovedad"
              name="fechaNovedad"
              onChange={(e)=>{handleFechaNovedad(e)}}
              value={fechaNovedad}
            />
            <button 
              type='button' 
              className='m-0 mx-1 w-2/12 py-[8px] bg-[#6c63ff] rounded-md text-white'
              onClick={()=>handleHoy()}
              >Hoy</button>
          </div>
        </div>
        <div>
          <label htmlFor="tpIdentificacion">Tipo de documento: </label>
          <select
            id="tpIdentificacion"
            name="tpIdentificacion"
            onChange={(e)=>{handleTipoDoc(e)}}
            value={tipoDoc}
            >
              {
                tipoNovedad === "Actualizacion de CN a RC" ? (
                    <option value="CN">CN</option>
                ) : 
                <>
                  <option value="">Seleccione el tipo de documento:</option>
                  <TiposDocumentos />
                </>
              }
          </select>
        </div>
        <div>
          <label htmlFor="identificacion">Identificación: </label>
          <input
            type="text"
            id="identificacion"
            name="identificacion"
            onChange={(e)=>{handleIdentificacion(e)}}
            value={identificacion}
            readOnly={inputEstado}
            onBlur={tipoNovedad === "Actualizacion de CN a RC" ? handleValidacionCN : undefined}
          />
        </div>
        <div>
          <label htmlFor="pri_apellido">Primer Apellido: </label>
          <input
            type="text"
            id="pri_apellido"
            name="pri_apellido"
            onChange={(e)=>{handlePriApellido(e)}}
            value={priApellido}
          />
        </div>
        <div>
          <label htmlFor="seg_apellido">Segundo Apellido: </label>
          <input
            type="text"
            id="seg_apellido"
            name="seg_apellido"
            onChange={(e)=>{handleSegApellido(e)}}
            value={segApellido}
          />
        </div>
        <div>
          <label htmlFor="pri_nombre">Primer Nombre: </label>
          <input
            type="text"
            id="pri_nombre"
            name="pri_nombre"
            onChange={(e)=>{handlePriNombre(e)}}
            value={priNombre}
            readOnly={inputEstado}
          />
        </div>
        <div>
          <label htmlFor="seg_nombre">Segundo Nombre: </label>
          <input
            type="text"
            id="seg_nombre"
            name="seg_nombre"
            onChange={(e)=>{handleSegNombre(e)}}
            value={segNombre}
            readOnly={inputEstado}
          />
        </div>
        <div>
          <label htmlFor="fecha_nacimiento">Fecha de Nacimiento: </label>
          <input
            type="date"
            id="fecha_nacimiento"
            name="fecha_nacimiento"
            onChange={(e)=>{handleFechaNacimiento(e)}}
            value={fechaNacimiento}
          />
        </div>
        <div>
          <label htmlFor="departamento">Departamento: </label>
          <select
            id="departamento"
            name="departamento"
            onChange={(e)=>handleDepartamento2(e, setDepartamento, setDepartamento2)}
            value={departamento2}
          >
            <option value="">Seleccione un departamento</option>
            <Departamentos />
          </select>
        </div>
        <div>
          <label htmlFor="municipio">Municipio: </label>
          <select
            id="municipio"
            name="municipio"
            onChange={(e)=>{handleMunicipio2(e, setMunicipio, setMunicipio2)}}
            onBlur={()=>{desactivarInput()}}
            value={municipio2}
          >
            <option value="">Seleccione un municipio</option>
          {
            departamento === "73" ? (
              <MunicipiosTolima />
            ) : departamento === "50" ? (
              <MunicipiosMeta />
            ) : "" // Retornar un valor por defecto si no se cumple ninguna condición
          }
          </select>
        </div>
        
        {
          tipoNovedad === "Cambio de DP y MP" ? (
            <CambioMunicipio setLinea={setLinea} />
          ) : tipoNovedad === "N01" ? (
            <N01 setLinea={setLinea} />
          ) : tipoNovedad === "Actualizacion de CN a RC" ? (
            <ActualizacionDeCNRC setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N02" ? (
            <N02 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N03" ? (
            <N03 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N09" ? (
            <N09 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N05" ? (
            <N05 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N04" ? (
            <N04 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N06" ? (
            <N06 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N07" ? (
            <N07 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N08" ? (
            <N08 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N10" ? (
            <N10 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N11" ? (
            <N11 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N12" ? (
            <N12 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N13" ? (
            <N13 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N14" ? (
            <N14 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N17" ? (
            <N17 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N19" ? (
            <N19 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N21" ? (
            <N21 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N25" ? (
            <N25 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N31" ? (
            <N31 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N32" ? (
            <N32 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N33" ? (
            <N33 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N35" ? (
            <N35 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N36" ? (
            <N36 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N37" ? (
            <N37 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N38" ? (
            <N38 setLinea={setLinea} linea={linea} />
          ) : tipoNovedad === "N39" ? (
            <N39 setLinea={setLinea} linea={linea} />
          ) : "" // Retornar un valor por defecto si no se cumple ninguna condición
        }
        
      
        
        {/*
          <pre>{JSON.stringify(LineaOrganizada, null, 2)}</pre>
      */}

        <button className='bg-[#2ecc71] hover:bg-[#219953]' type="button" onClick={()=>handleSubmit()}>Enviar</button>
        <button className='bg-[#ff212c] hover:bg-[#b91820]' type="reset" onClick={()=>{
            setTipoNovedad('');
            resetearFormulario();
          }}
          >
            Limpiar Formulario
        </button>
      </form>

      {
        mostrarConfirmacion && (
          <Confirmacion
            message="¿Estás seguro de que quieres hacer esto?"
            onAccept={handleAceptar}
            onCancel={handleCancelar}
          />
        )
      }
    </>
  );
}


export default ProcesarNovedades;
