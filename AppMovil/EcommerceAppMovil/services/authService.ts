// src/services/authService.ts
import {api} from '../config/apiConfig';

interface LoginData {
  correo: string;
  password: string;
}

interface RegisterData {
  numero: string;
  idPersonaNavigation: {
    nombre: string;
    apellido: string;
    correo: string;
    contraseña: string;
  };
}

export const loginService = async (data: LoginData) => {
  try {
    const response = await api.post('/Usuario/Login', data);
    return response.data;
  } catch (error: any) {
    console.error('Error al intentar iniciar sesión:', error);
    throw new Error(error.response?.data?.message || 'Error en el inicio de sesión');
  }
};


export const registerService = async (data: RegisterData) => {
  // console.log(data);
  try {
    const response = await api.post('/Usuario/AgregarUsuario', data);
    return response.data;
  } catch (error: any) {
    console.error('Error al intentar registro: ', error);
    throw new Error(error.response?.data?.message || 'Error en el registro');
  }
};