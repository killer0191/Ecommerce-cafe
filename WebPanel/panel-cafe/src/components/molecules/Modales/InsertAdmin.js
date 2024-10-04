import React, { useState } from "react";
import Swal from 'sweetalert2';
import InputField from '../../atoms/InputField';
import Button from '../../atoms/Button';
import { InsertNewAdmin } from '../../../services/administradorService';

const InsertAdmin = ({ onSuccess }) => {
  const [adminData, setAdminData] = useState({
    idAdministrador: 0,
    sesion: true,
    idPersona: 0,
    idPersonaNavigation: {
      idPersona: 0,
      nombre: "",
      apellido: "",
      correo: "",
      contraseña: "",
    },
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
      title: "¿Guardar nuevo administrador?",
      text: "¿Estás seguro de que deseas guardar este administrador?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
    });
  
    if (result.isConfirmed) {
      try {
        const response = await InsertNewAdmin(adminData);
  
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
      <h2>Insertar Administrador</h2>
      <form>
        <InputField
          type="number"
          value={adminData.idAdministrador}
          onChange={handleInputChange}
          placeholder="ID Administrador"
          name="idAdministrador"
          required={true}
        />
        <InputField
          type="text"
          value={adminData.idPersonaNavigation.nombre}
          onChange={handleInputChange}
          placeholder="Nombre"
          name="idPersona.nombre"
          required
        />
        <InputField
          type="text"
          value={adminData.idPersonaNavigation.apellido}
          onChange={handleInputChange}
          placeholder="Apellido"
          name="idPersona.apellido"
          required
        />
        <InputField
          type="email"
          value={adminData.idPersonaNavigation.correo}
          onChange={handleInputChange}
          placeholder="Correo"
          name="idPersona.correo"
          required
        />
        <InputField
          type="password"
          value={adminData.idPersonaNavigation.contraseña}
          onChange={handleInputChange}
          placeholder="Contraseña"
          name="idPersona.contraseña"
          required
        />
        <Button text="Guardar" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default InsertAdmin;
