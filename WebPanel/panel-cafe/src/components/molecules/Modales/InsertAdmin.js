import React, { useState } from "react";
import Swal from 'sweetalert2';
import InputField from '../../atoms/InputField'; // Importamos el componente InputField
import Button from '../../atoms/Button'; // Importamos el componente Button
import { InsertNewAdmin } from '../../../services/administradorService'; // Importamos la función

const InsertAdmin = ({ onSuccess }) => {
  const [adminData, setAdminData] = useState({
    idAdministrador: 0,
    sesion: true,
    idPersona: {
      idPersona: 0,
      nombre: "Hola",
      apellido: "",
      correo: "",
      contraseña: "",
    },
  });

  // Función para manejar los cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("idPersona.")) {
      const field = name.split(".")[1]; // Extraemos el nombre del campo (nombre, apellido, etc.)
      setAdminData((prevData) => ({
        ...prevData,
        idPersona: {
          ...prevData.idPersona,
          [field]: value, // Actualizamos solo el campo dentro de idPersona
        },
      }));
    } else {
      setAdminData((prevData) => ({
        ...prevData,
        [name]: value, // Actualizamos los campos de nivel superior (como idAdministrador)
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
        // Llamamos a la función InsertNewAdmin pasando los datos del nuevo admin
        const response = await InsertNewAdmin({ data: adminData });

        if (response.ok) {
          // Mostrar mensaje de éxito
          Swal.fire({
            title: "Guardado",
            text: "El administrador ha sido guardado con éxito.",
            icon: "success",
          });

          if (onSuccess) {
            onSuccess(adminData); // Llamamos a la función pasada por prop si la inserción fue exitosa
          }
        } else {
          // Si hay un error en el servidor
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
          type="text"
          value={adminData.idAdministrador}
          onChange={handleInputChange}
          placeholder="ID Administrador"
          name="idAdministrador"
          requerid
        />
        <InputField
          type="text"
          value={adminData.idPersona.nombre}
          onChange={handleInputChange}
          placeholder="Nombre"
          name="idPersona.nombre"
          requerid
        />
        <InputField
          type="text"
          value={adminData.idPersona.apellido}
          onChange={handleInputChange}
          placeholder="Apellido"
          name="idPersona.apellido"
          requerid
        />
        <InputField
          type="text"
          value={adminData.idPersona.correo}
          onChange={handleInputChange}
          placeholder="Correo"
          name="idPersona.correo"
          requerid
        />
        <InputField
          type="password"
          value={adminData.idPersona.contraseña}
          onChange={handleInputChange}
          placeholder="Contraseña"
          name="idPersona.contraseña"
          requerid
        />
        <Button text="Guardar" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default InsertAdmin;
