import React, { useState } from "react";
import Swal from 'sweetalert2';
import InputField from '../../atoms/InputField';
import Button from '../../atoms/Button';
import { InsertNewProduct } from "../../../services/prodcutoService";

const InsertProduct = ({ onSuccess }) => {
  const [adminData, setAdminData] = useState({
    idProducto: 0,
    nombre: "",
    descripcion: "",
    precio: 0,
    stock: 0,
    idTipoProducto: 0
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
      title: "¿Guardar nuevo producto?",
      text: "¿Estás seguro de que deseas guardar este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
    });
  
    if (result.isConfirmed) {
      try {
        const response = await InsertNewProduct(adminData);
  
        if (response.ok) {
          Swal.fire({
            title: "Guardado",
            text: "El producto ha sido guardado con éxito.",
            icon: "success",
          });
  
          // Recargar la vista
          window.location.reload(); // Esto refresca la página
        } else {
          Swal.fire({
            title: "Error",
            text: `Hubo un problema al guardar el producto: ${response.statusText}`,
            icon: "error",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: `Hubo un problema al guardar el producto: ${error.message}`,
          icon: "error",
        });
      }
    }
  };
  
  
  
  


  return (
    <div>
      <h2>Insertar producto</h2>
      <form>
        <InputField
          type="hidden"
          value={adminData.idProducto}
          onChange={handleInputChange}
          placeholder=""
          name="idProducto"
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
        <InputField
          type="text"
          value={adminData.descripcion}
          onChange={handleInputChange}
          placeholder="Descripción"
          name="descripcion"
          required
        />
        <InputField
          type="number"
          value={adminData.precio}
          onChange={handleInputChange}
          placeholder="Precio"
          name="precio"
          required
        />
        <InputField
          type="number"
          value={adminData.stock}
          onChange={handleInputChange}
          placeholder="0"
          name="stock"
          required
        />
          <InputField
          type="number"
          value={adminData.idTipoProducto}
          onChange={handleInputChange}
          placeholder="0"
          name="idTipoProducto"
          required
        />
        <Button text="Guardar" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default InsertProduct;
