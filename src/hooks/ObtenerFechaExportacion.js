import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useAuth } from "../contextos/useAuth";

const ObtenerFechaExportacion = () => {
  const {usuario} = useAuth();

  const [fechaExportacion, setFechaExportacion] = useState('');

  useEffect(()=>{
    const consulta = query(
      collection(db, 'HistorialExportacion'),
      where('idUsuario', '==', usuario.uid),
      orderBy('fechaExportacion', 'desc')
    );

    const unsuscribe = onSnapshot(consulta, (snapshot)=>{
      setFechaExportacion(snapshot.docs.map(fecha => fecha.data())[0]);
    });

    return unsuscribe;
  },[])
  

  return fechaExportacion;
}
 
export default ObtenerFechaExportacion;