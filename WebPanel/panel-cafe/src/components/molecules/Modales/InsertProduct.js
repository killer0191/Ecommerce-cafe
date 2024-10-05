import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import InputField from '../../atoms/InputField';
import Button from '../../atoms/Button';
import { InsertNewProduct } from "../../../services/prodcutoService";
import SelectForms from "../../organisms/SelectForms";
import { GetTipos } from "../../../services/tiposService";

const InsertProduct = ({ onSuccess }) => {
  const [adminData, setAdminData] = useState({
    idProducto: 0,
    nombre: "",
    descripcion: "",
    precio: 0,
    stock: 0,
    idTipoProducto: 0 // Inicializamos con una cadena vacía para permitir selección manual
  });

  const [listTipos, setListTipos] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e) => {
    setAdminData((prevData) => ({
      ...prevData,
      idTipoProducto: e.target.value // Actualiza con el valor seleccionado
    }));
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

  useEffect(() => {
    const fetchTipos = async () => {
      const response = await GetTipos();
      console.log(response);
      const tipos = response.map(tipo => ({
        id: tipo.idTipoProducto,
        text: tipo.nombre
      }));
      console.log(tipos);
      setListTipos(tipos);
    };

    fetchTipos();
  }, []);

  return (
    <div>
      <h2>Insertar producto</h2>
      <form>
        <InputField
          type="hidden"
          value={adminData.idProducto}
          onChange={handleInputChange}
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
          placeholder="Inventario"
          name="stock"
          required
        />
        <SelectForms 
          label="Tipo producto" 
          list={listTipos} 
          name="idTipoProducto" 
          value={adminData.idTipoProducto} // Asigna el valor desde el estado
          onChange={handleSelectChange} // Asigna el cambio de valor
        />
        <Button text="Guardar" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default InsertProduct;
