import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const agregarHistorial = (fecha,idUsuario) => {
  addDoc(collection(db, 'HistorialExportacion'), {fechaExportacion: fecha, idUsuario: idUsuario});
}
 
export default agregarHistorial;