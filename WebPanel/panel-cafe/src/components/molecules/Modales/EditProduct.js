import React, { useState } from "react";
import Swal from 'sweetalert2';
import InputField from '../../atoms/InputField';
import Button from '../../atoms/Button';
import { EditOldProduct } from "../../../services/prodcutoService";

const EditProduct =({onSuccess,product}) =>{
    const [productData, setProductData] = useState({
        idProducto: product.idProducto,
        nombre: product.nombre,
        descripcion: product.descripcion,
        precio: product.precio,
        stock: product.stock,
        idTipoProducto: product.idTipoProducto
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
          setProductData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        
      };
    
      const handleSubmit = async () => {
        const result = await Swal.fire({
          title: "¿Editar producto?",
          text: "¿Estás seguro de que deseas editar este producto?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Editar",
          cancelButtonText: "Cancelar",
        });
      
        if (result.isConfirmed) {
          try {
            const response = await EditOldProduct(productData);
      
            if (response.ok) {
              Swal.fire({
                title: "Guardado",
                text: "El producto ha sido editado con éxito.",
                icon: "success",
              });
      
              // Aquí llamas a la función de éxito
              onSuccess();
              
              // Recargar la vista
              window.location.reload(); // Esto refresca la página
            } else {
              Swal.fire({
                title: "Error",
                text: `Hubo un problema al editar el producto: ${response.statusText}`,
                icon: "error",
              });
            }
          } catch (error) {
            Swal.fire({
              title: "Error",
              text: `Hubo un problema al editar el producto: ${error.message}`,
              icon: "error",
            });
          }
        }
      };
      
      return (
        <div>
          <h2>Editar producto</h2>
          <form>
            <InputField
              type="hidden"
              value={productData.idProducto}
              onChange={handleInputChange}
              placeholder="ID producto"
              name="idProducto"
              required={true}
            />
            <InputField
              type="text"
              value={productData.nombre}
              onChange={handleInputChange}
              placeholder="Nombre"
              name="nombre"
              required
            />
              <InputField
              type="text"
              value={productData.descripcion}
              onChange={handleInputChange}
              placeholder="Descripcion"
              name="descripcion"
              required
            />
            <InputField
              type="text"
              value={productData.precio}
              onChange={handleInputChange}
              placeholder="Precio"
              name="precio"
              required
            />
            <InputField
              type="text"
              value={productData.stock}
              onChange={handleInputChange}
              placeholder="Inventario"
              name="stock"
              required
            />
            <InputField
              type="text"
              value={productData.idTipoProducto}
              onChange={handleInputChange}
              placeholder="Tipo de producto"
              name="idTipoProducto"
              required
            />
            <Button text="Guardar" className="button-confirm" onClick={handleSubmit} />
          </form>
        </div>
      );
};

export default EditProduct;