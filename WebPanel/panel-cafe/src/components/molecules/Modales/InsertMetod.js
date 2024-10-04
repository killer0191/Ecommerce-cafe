import React, { useState } from "react";
import Swal from 'sweetalert2';
import InputField from '../../atoms/InputField';
import Button from '../../atoms/Button';
import { InsertNewMetodo } from "../../../services/metodoService";

const InsertMetodo = ({ onSuccess }) => {
  const [adminData, setAdminData] = useState({
    idMetodoPago: 0,
    nombre: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("idPersona.")) {
      const field = name.split(".")[1];
      setAdminData((prevData) => ({
        ...prevData,
        idPersonaNavigation: {
          ...prevData.idPersonaNavigation,
          [field]: value,
        },
      }));
    } else {
      setAdminData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async () => {
    const result = await Swal.fire({
      title: "¿Guardar nuevo metodo de pago?",
      text: "¿Estás seguro de que deseas guardar este metodo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
    });
  
    if (result.isConfirmed) {
      try {
        const response = await InsertNewMetodo(adminData);
  
        if (response.ok) {
          Swal.fire({
            title: "Guardado",
            text: "El administrador ha sido guardado con éxito.",
            icon: "success",
          });
  
          // Recargar la vista
          window.location.reload(); // Esto refresca la página
        } else {
          Swal.fire({
            title: "Error",
            text: `Hubo un problema al guardar el administrador: ${response.statusText}`,
            icon: "error",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: `Hubo un problema al guardar el administrador: ${error.message}`,
          icon: "error",
        });
      }
    }
  };
  
  
  
  


  return (
    <div>
      <h2>Insertar Metodo de pago</h2>
      <form>
        <InputField
          type="hidden"
          value={adminData.idMetodoPago}
          onChange={handleInputChange}
          placeholder="ID Administrador"
          name="idMetodoPago"
          required={true}
        />
        <InputField
          type="text"
          value={adminData.nombre}
          onChange={handleInputChange}
          placeholder="Nombre"
          name="nombre"
          required
        />

        
        <Button text="Guardar" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default InsertMetodo;
