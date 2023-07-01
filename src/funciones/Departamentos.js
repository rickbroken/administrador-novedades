export const handleDepartamento2 = (e, setDepartamento, setDepartamento2) => {
    setDepartamento2(e.target.value);
    if(e.target.value === "50"){
      setDepartamento('50');
    } else if(e.target.value === "73"){
      setDepartamento('73');
    } else if(e.target.value === "66"){
      setDepartamento('66');
    }
};