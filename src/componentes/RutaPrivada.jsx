import { useEffect, useState } from "react";
import { useAuth } from "../contextos/useAuth";
import { useNavigate } from "react-router-dom";


const RutaPrivada = ({children}) => {
    const navigate = useNavigate();
    const {usuario} = useAuth();
    const [data, setData] = useState('');

    useEffect(()=>{
        if(usuario){
            setData(children);
        } else if(usuario === null || usuario === false){
            navigate('/iniciar-sesion');
        }
    },[usuario,navigate,children]);
    return data;
}
 
export default RutaPrivada;