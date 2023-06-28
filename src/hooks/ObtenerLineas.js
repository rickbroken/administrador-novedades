import {useState, useEffect} from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useAuth } from '../contextos/useAuth';
import moment from 'moment';




const useObtenerGastos = () => {
    const [lineas, setLineas] = useState([]);
    const [fechaInicioUnix, setFechaInicioUnix] = useState('');
    const [fechaFinUnix, setfechaFinUnix] = useState('');
    const {usuario} = useAuth()

    useEffect(()=>{
        setLineas([]);
    },[])
    const importarLineasFirebase = () => {
        console.log(moment(fechaInicioUnix).unix());
        const fechaInicio = moment(fechaInicioUnix).unix();
        //const fechaInicioUnix = fechaInicio.unix();
        const fechaFin = moment(fechaFinUnix).unix();
        //const fechaFinUnix = fechaFin.unix();

        //console.log(moment.unix(fechaInicioUnix).format('DD/MM/YYYY HH:mm:ss'));
        //console.log(moment.unix(1687990188).format('DD/MM/YYYY HH:mm:ss'));
        const consulta = query(
            collection(db, 'AllLineas'),
            where('U_idUsuario', '==', usuario.uid),
            where("Y_fechaUnix", ">=", fechaInicio),
            where("Y_fechaUnix", "<=", fechaFin),
            orderBy('Y_fechaUnix', 'desc')
        );

        const unsuscribe = onSnapshot(consulta, (snapshot) => {
            setLineas(snapshot.docs.map((linea)=>{
                return {...linea.data(), id: linea.id}
            }));
          });

        return unsuscribe;

    }

    console.log(lineas);

    return {lineas,setFechaInicioUnix,setfechaFinUnix,importarLineasFirebase};
}
 
export default useObtenerGastos;