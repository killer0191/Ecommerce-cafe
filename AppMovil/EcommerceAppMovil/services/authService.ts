// src/services/authService.ts
import {api} from '../config/apiConfig';

interface LoginData {
  correo: string;
  password: string;
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