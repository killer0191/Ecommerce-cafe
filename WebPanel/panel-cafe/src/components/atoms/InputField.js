import React, { useState } from "react";
import IconViewP from "./IconViewPassword.js"; // Importamos el componente del ícono

const InputField = ({ type = "text", value, onChange, placeholder, requerid, name }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false); // Estado para controlar visibilidad

  // Alterna el tipo de input entre "password" y "text" solo si el input es de tipo password
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  // Determina el tipo de input basado en el estado de visibilidad y el tipo proporcionado
  const getInputType = () => {
    if (type === "password") {
      return isPasswordVisible ? "text" : "password";
    }
    return type; // Si no es password, retorna el tipo que se pasó
  };

  return (
    <div className="input-container">
      <input
        type={getInputType()} // Determina el tipo según el estado y el tipo prop
        value={value}
        onChange={(e) => onChange(e)} // Asegúrate de propagar el evento onChange
        placeholder={placeholder}
        className="input-field"
        required={requerid}
        name={name} // Incluye el atributo name
      />
      {/* Solo mostramos el botón de visibilidad si el tipo es password */}
      {type === "password" && (
        <IconViewP
          isPasswordVisible={isPasswordVisible}
          toggleVisibility={togglePasswordVisibility}
        />
      )}
    </div>
  );
};

export default InputField;
