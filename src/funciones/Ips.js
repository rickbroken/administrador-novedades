export const handleCentroSalud2 = (e, setCentroSalud, setCentroSalud2) => {
    setCentroSalud2(e.target.value);
    if(e.target.value === "Previs IPS"){
      setCentroSalud('50');
    } else if(e.target.value === "Matsuludani IPS"){
      setCentroSalud('73')
    }
};