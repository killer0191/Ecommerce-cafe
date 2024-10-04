import { API_BASE_URL } from '../config/apiConfig';
import { GetPersonas } from './personaService';

export const getData = async (endpoint) => {
    try {
      const response = await fetch(endpoint);
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
  export const GetUsuarios = async ()=>{
    const response = await fetch(`${API_BASE_URL}/Usuario/ObtenerUsuarios`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let data = await response.json();
    console.log(data);
    return data;
  }

  export const GetUserDatos = async () => {
    // Asegúrate de que estas funciones devuelven un array
    let admins = await GetUsuarios(); // Asegúrate de que esta función es asíncrona
    let persons = await GetPersonas(); // Asegúrate de que esta función es asíncrona
    
    // Verifica si 'admins' es un array antes de mapear
    if (!Array.isArray(admins)) {
      console.error("admins no es un array:", admins);
      return [];
    }
  
    // Combinar ambos arrays
    const administradoresConPersonas = admins.map(admin => {
      // Encontrar la persona correspondiente a través de idPersona
      const persona = persons.find(p => p.idPersona === admin.idPersona);
  
      // Si se encuentra la persona, combinar ambos objetos
      if (persona) {
        return {
          ...admin,
          nombre: persona.nombre,
          apellido: persona.apellido,
          correo: persona.correo,
          numero: admin.numero,
          contraseña: persona.contraseña
        };
      }
      
      return admin; // Si no se encuentra, devolver solo el admin
    });
    
    return administradoresConPersonas;
  };
  
  export const DeleteUser = async ({id})=>{
    const response = await fetch(`${API_BASE_URL}/Usuario/EliminarUsuario/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    return response;
  };

  export const InsertNewUser = async (adminData) => {
    let auxJson = JSON.stringify(adminData);
    console.log(auxJson);
    console.log(adminData);
    const response = await fetch(`${API_BASE_URL}/Usuario/AgregarUsuario`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: auxJson, // Envía el objeto directamente
    });
  
    return response;
  };
  