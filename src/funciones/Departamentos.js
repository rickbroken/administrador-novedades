export const handleDepartamento2 = (e, setDepartamento, setDepartamento2) => {
    setDepartamento2(e.target.value);
    if(e.target.value === "Meta"){
      setDepartamento('50');
    } else if(e.target.value === "Tolima"){
      setDepartamento('73')
    }
};