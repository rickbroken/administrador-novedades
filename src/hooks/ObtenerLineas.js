import {useEffect, useState} from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useAuth } from '../contextos/useAuth';
import moment from 'moment';




const useObtenerGastos = () => {
    const [lineas, setLineas] = useState([]);
    const [fechaInicioUnix, setFechaInicioUnix] = useState('');
    const [fechaFinUnix, setfechaFinUnix] = useState('');
    const [regimen, setRegimen] = useState('');
    const {usuario} = useAuth();
    const [codigoMunicipios, setCodigoMunicipios] = useState([]);
    const [novedadesN04N25, setNovedadesN04N25] = useState([]);


    useEffect(()=>{
        const fechaInicio = moment(fechaInicioUnix).unix();
        const fechaFin = moment(fechaFinUnix).unix();

        //Ejecutamos el codigo solo cuando se actualize el estado de codigoMunicipios y se puedan iterar
        if(codigoMunicipios.length !== 0){
            //
            codigoMunicipios.map((codigo)=>{
                if(codigo.checked === true){

                    const consulta = query(
                        collection(db, 'AllLineas'),
                        where('U_idUsuario', '==', usuario.uid),
                        where("Y_fechaUnix", ">=", fechaInicio),
                        where("Y_fechaUnix", "<=", fechaFin),
                        where("B_entidad", "==", regimen),
                        where("J_departamento", "==", codigo.departamento),
                        where("K_municipio", "==", codigo.municipio),
                        orderBy('Y_fechaUnix', 'asc')
                    );
                
                    const unsuscribe = onSnapshot(consulta, (snapshot) => {
                        //Si el check de un municipio es treu, guardamos todas las lineas en un arreglo de objetos
                        const nuevoObjeto = snapshot.docs.map(linea => linea.data());
    
                        //unimos el arreglo de objetos que ya teniamos en lineas y le agregamos los nuevos objetos del array nuevoObjeto
                        setLineas(prev => [...prev, ...nuevoObjeto]);
                    });

                    return unsuscribe;  
                    
                } else {
                    setLineas([]);
                }
            });
        }

    },[setLineas,fechaInicioUnix,fechaFinUnix, usuario.uid,regimen,codigoMunicipios])
        

    //console.log(novedadesN04N25);
    //console.log(lineas);

    return {lineas,setFechaInicioUnix,setfechaFinUnix,setLineas,setRegimen,setCodigoMunicipios,codigoMunicipios};
}
 
export default useObtenerGastos;