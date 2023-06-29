import {useEffect, useState} from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useAuth } from '../contextos/useAuth';
import moment from 'moment';




const useObtenerGastos = () => {
    const [lineas, setLineas] = useState([]);
    const [fechaInicioUnix, setFechaInicioUnix] = useState('');
    const [fechaFinUnix, setfechaFinUnix] = useState('');
    const {usuario} = useAuth();


    useEffect(()=>{
        const fechaInicio = moment(fechaInicioUnix).unix();
    
        const fechaFin = moment(fechaFinUnix).unix();
    
    
        const consulta = query(
            collection(db, 'AllLineas'),
            where('U_idUsuario', '==', usuario.uid),
            where("Y_fechaUnix", ">=", fechaInicio),
            where("Y_fechaUnix", "<=", fechaFin),
            orderBy('Y_fechaUnix', 'desc')
        );
    
        const unsuscribe = onSnapshot(consulta, (snapshot) => {
            setLineas(snapshot.docs.map((linea)=>{
                return linea.data();
            }));
        });
        return unsuscribe;
    },[setLineas,fechaInicioUnix,fechaFinUnix, usuario.uid])
        

    

    return {lineas,setFechaInicioUnix,setfechaFinUnix,setLineas};
}
 
export default useObtenerGastos;