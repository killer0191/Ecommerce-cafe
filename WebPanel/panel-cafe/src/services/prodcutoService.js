import { API_BASE_URL } from '../config/apiConfig';
import { GetTipos } from './tiposService';
  
  export const GetProductos= async ()=>{
    const response = await fetch(`${API_BASE_URL}/Producto/ObtenerProductos`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let data = await response.json();
    console.log(JSON.stringify(data));
    return data;
  }
  
  export const DeleteProduct = async ({id})=>{
    const response = await fetch(`${API_BASE_URL}/Producto/EliminarProducto/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    return response;
  };

  export const GetProductDatos = async () => {
    let products = await GetProductos();
    let typeProducts = await GetTipos();
    
    // Verifica si 'admins' es un array antes de mapear
    if (!Array.isArray(products)) {
      console.error("admins no es un array:", products);
      return [];
    }
  
    // Combinar ambos arrays
    const productsWithTypes = products.map(product => {
      // Encontrar la persona correspondiente a través de idPersona
      const Type = typeProducts.find(p => p.idTipoProducto === product.idTipoProducto);
  
      // Si se encuentra la persona, combinar ambos objetos
      if (Type) {
        return {
          ...product,
          tipoProducto: Type.nombre,
        };
      }
      return product; // Si no se encuentra, devolver solo el admin
    });
  
    return productsWithTypes;
  };

  export const InsertNewProduct = async (adminData) => {
    let auxJson = JSON.stringify(adminData);
    console.log(auxJson);
    console.log(adminData);
    const response = await fetch(`${API_BASE_URL}/Producto/AgregarProducto`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: auxJson, // Envía el objeto directamente
    });
  
    return response;
  };