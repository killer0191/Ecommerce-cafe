import { API_BASE_URL } from '../config/apiConfig';
  
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
  