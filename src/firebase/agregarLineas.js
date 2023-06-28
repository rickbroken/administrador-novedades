import { collection, addDoc } from "firebase/firestore";
import {db} from './firebaseConfig';

const agregarLineas = (lineas) => {
    //console.log(await linea);
    lineas.map((linea)=>(
        addDoc(collection(db, "AllLineas"),linea)
    ));
}
 
export default agregarLineas;