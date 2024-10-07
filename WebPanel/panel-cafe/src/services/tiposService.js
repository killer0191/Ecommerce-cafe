import { API_BASE_URL } from '../config/apiConfig';

export const getData = async (endpoint) => {
    try {
      const response = await fetch(endpoint);
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
  export const GetTipos = async ()=>{
    const response = await fetch(`${API_BASE_URL}/TipoProducto/ObtenerTiposProductos`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let data = await response.json();
    console.log(JSON.stringify(data));
    return data;
  }
  
  export const DeleteTipos = async ({id})=>{
    const response = await fetch(`${API_BASE_URL}/TipoProducto/EliminarTipoProducto/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    return response;
  };

  export const InsertNewTipos = async (adminData) => {
    let auxJson = JSON.stringify(adminData);
    console.log(auxJson);
    console.log(adminData);
    const response = await fetch(`${API_BASE_URL}/TipoProducto/AgregarTipoProducto`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: auxJson, // Envía el objeto directamente
    });
  
    return response;
  };

  export const EditOldTipos = async (adminData) => {
    let auxJson = JSON.stringify(adminData);
    console.log(auxJson);
    console.log(adminData);
    const response = await fetch(`${API_BASE_URL}/TipoProducto/ActualizarTipoProducto`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: auxJson, // Envía el objeto directamente
    });
  
    return response;
  };
  