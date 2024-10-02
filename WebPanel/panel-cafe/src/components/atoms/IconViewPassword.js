import React from "react";
//import { FaEye, FaEyeSlash } from "react-icons/fa"; // Ejemplo usando react-icons

const IconViewP = ({ isPasswordVisible, toggleVisibility }) => (
  <button 
    type="button" 
    className="button" 
    onClick={toggleVisibility} // Llamamos a la función para alternar la visibilidad
  >
    {isPasswordVisible ? <a /> : <a />} {/* Cambia el ícono */}
    {/*isPasswordVisible ? <FaEyeSlash /> : <FaEye />*/} {/* Cambia el ícono */}
  </button>
);

export default IconViewP;
