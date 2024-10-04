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
  
  export const GetMetodos = async ()=>{
    const response = await fetch(`${API_BASE_URL}/MetodoPago/ObtenerMetodosDePago`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let data = await response.json();
    console.log(JSON.stringify(data));
    return data;
  }
  
  export const DeleteMetodo = async ({id})=>{
    const response = await fetch(`${API_BASE_URL}/MetodoPago/EliminarMetodoPago/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    return response;
  };

  export const InsertNewMetodo = async (adminData) => {
    let auxJson = JSON.stringify(adminData);
    console.log(auxJson);
    console.log(adminData);
    const response = await fetch(`${API_BASE_URL}/MetodoPago/AgregarMetodoPago`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: auxJson, // Envía el objeto directamente
    });
  
    return response;
  };
  