import { useState} from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useAuth } from '../contextos/useAuth';
import moment from 'moment';




const useObtenerLineasNovedades = () => {
    const [lineas, setLineas] = useState([]);
    const [fechaInicioUnix, setFechaInicioUnix] = useState('');
    const [fechaFinUnix, setfechaFinUnix] = useState('');
    const [regimen, setRegimen] = useState('');
    const {usuario} = useAuth();


    const ObtenerLinasNS = ()=>{
        const fechaInicio = moment(fechaInicioUnix).unix();
        const fechaFin = moment(fechaFinUnix).unix();

        //Ejecutamos el codigo solo cuando se actualize el estado de codigoMunicipios y se puedan iterar
        const consulta = query(
            collection(db, 'AllLineas'),
            where('U_idUsuario', '==', usuario.uid),
            where("Y_fechaUnix", ">=", fechaInicio),
            where("Y_fechaUnix", "<=", fechaFin),
            where("B_entidad", "==", regimen),
            orderBy('Y_fechaUnix', 'asc')
        );
                
        const unsuscribe = onSnapshot(consulta, (snapshot) => {
            //unimos el arreglo de objetos que ya teniamos en lineas y le agregamos los nuevos objetos del array nuevoObjeto
            setLineas(snapshot.docs.map(linea => {
                return {...linea.data(), id: linea.id};
            }));
        });

        return unsuscribe;  
                    
               
    }
        

    //console.log(novedadesN04N25);
    //console.log(lineas);

    return {lineas,setFechaInicioUnix,setfechaFinUnix,setLineas,setRegimen,ObtenerLinasNS};
}
 
export default useObtenerLineasNovedades;