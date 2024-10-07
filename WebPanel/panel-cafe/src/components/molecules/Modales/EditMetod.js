import React, { useState } from "react";
import Swal from 'sweetalert2';
import InputField from '../../atoms/InputField';
import Button from '../../atoms/Button';
import { EditOldMetodo } from "../../../services/metodoService";

const EditMetodo = ({ onSuccess, metodo }) => {
  const [adminData, setAdminData] = useState({
    idMetodoPago: metodo.idMetodoPago,
    nombre: metodo.nombre
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
      title: "¿Editar nuevo metodo de pago?",
      text: "¿Estás seguro de que deseas editar este metodo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
    });
  
    if (result.isConfirmed) {
      try {
        const response = await EditOldMetodo(adminData);
  
        if (response.ok) {
          Swal.fire({
            title: "Guardado",
            text: "El método de pago ha sido editado con éxito.",
            icon: "success",
          });
  
          // Aquí llamas a la función de éxito
          onSuccess();
          
          // Recargar la vista
          window.location.reload(); // Esto refresca la página
        } else {
          Swal.fire({
            title: "Error",
            text: `Hubo un problema al editar el método de pago: ${response.statusText}`,
            icon: "error",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: `Hubo un problema al editar el método de pago: ${error.message}`,
          icon: "error",
        });
      }
    }
  };
  
  return (
    <div>
      <h2>Editar Metodo de pago</h2>
      <form>
        <InputField
          type="number"
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

export default EditMetodo;
