import React from "react";
import '../estilos-css/Confirmacion.css'

const Confirmacion = ({ message, onAccept, onCancel }) => {
  return (
    <>
    <div className="fondo-confirmacion">
      <div className="confirmacion">
        <p>{message}</p>
        <div>
          <button onClick={onAccept}>Aceptar</button>
          <button onClick={onCancel} className="btn-cancelar">Cancelar</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Confirmacion;