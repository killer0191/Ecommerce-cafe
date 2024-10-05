import React, { useState, useEffect } from "react";
import { GetProductDatos } from "../../services/prodcutoService";
import ComplementTable from "../organisms/ComplementTable";
import handleAddAdmin from '../molecules/Modales/InsertAdmin';
import ProductoTable from "../organisms/ProductoTable";

const ProductoPanel = () => {
    const [cedls, setCedls] = useState([]);
  
    const fetchAdminDatos = async () => { // Define esta función aquí
      const data = await GetProductDatos();
      setCedls(data);
    };
  
    useEffect(() => {
      fetchAdminDatos(); // Carga los datos al montar el componente
    }, []);
  
    const handleInsertSuccess = () => {
      fetchAdminDatos(); // Volver a obtener los datos actualizados
    };
  
    const handleDeleteAdmin = (id) => {
      setCedls(prevCedls => prevCedls.filter(admin => admin.idProducto !== id));
    };
  
    let columns = ['ID', 'Nombre', 'Descripcion', 'Precio', 'Inventario', 'Tipo de producto', 'Opciones'];
  
    return (
      <div>
        <ComplementTable button="Agregar producto" onAddAdmin={handleAddAdmin} modalType="Products" />
        <ProductoTable celdas={cedls} encabezados={columns} onDeleteAdmin={handleDeleteAdmin} />
      </div>
    );
  };
  
export default ProductoPanel;
