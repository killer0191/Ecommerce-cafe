import React from "react";
import Visibility from '@mui/icons-material/Visibility';  // Importa el icono de "ver"
import VisibilityOff from '@mui/icons-material/VisibilityOff'; // Importa el icono de "ocultar"

const IconViewP = ({ isPasswordVisible, toggleVisibility }) => (
  <button 
    type="button" 
    className="button" 
    onClick={toggleVisibility} // Llamamos a la función para alternar la visibilidad
  >
    {isPasswordVisible ? <VisibilityOff /> : <Visibility />} {/* Cambia el ícono */}
  </button>
);

export default IconViewP;
