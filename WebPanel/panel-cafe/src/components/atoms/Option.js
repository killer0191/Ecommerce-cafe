import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Para redirigir al usuario
import AlertLoad from '../atoms/AlertLoad'; // Asegúrate de que tengas el componente AlertLoad para la alerta de carga

const Option = ({ Label, refrs }) => {
  const [loading, setLoading] = useState(false); // Estado para manejar la alerta de carga
  const navigate = useNavigate(); // Hook para la redirección

  const handleClick = (event) => {
    event.preventDefault(); // Evita la redirección inmediata al hacer clic en el enlace

    // Iniciar el estado de carga para mostrar la alerta
    setLoading(true);
    
    // Simula el procesamiento antes de redirigir
    setTimeout(() => {
      setLoading(false); // Oculta la alerta de carga
      navigate(refrs); // Redirige a la nueva página después del tiempo
    }, 1500); // Temporizador de 1.5 segundos antes de la redirección
  };

  return (
    <>
      {/* Mostrar la alerta de carga si `loading` es true */}
      {loading && <AlertLoad label="Procesando, por favor espere..." />}
      
      <li>
        <a href={refrs} onClick={handleClick}>{Label}</a>
      </li>
    </>
  );
};

export default Option;
