import { API_BASE_URL } from '../config/apiConfig';
import { GetProductos } from './prodcutoService';
import { GetUserDatos } from './usuarioService';
import { GetPersonas } from './personaService'; // Asumiendo que tienes esta función
import { GetMetodos } from './metodoService';

export const GetHistorial = async () => {
  const response = await fetch(`${API_BASE_URL}/Historial/ObtenerHistoriales`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let data = await response.json();
  console.log(JSON.stringify(data));
  return data;
};

export const GetHistorialDatos = async () => {
  // Obtener los datos de las diferentes entidades
  let historials = await GetHistorial(); // Asegúrate de que esta función es asíncrona
  let products = await GetProductos(); // Asegúrate de que esta función es asíncrona
  let users = await GetUserDatos(); // Asegúrate de que esta función es asíncrona
  let persons = await GetPersonas(); // Asegúrate de que esta función es asíncrona
  let metodos = await GetMetodos();

  // Verifica si 'historials' es un array antes de mapear
  if (!Array.isArray(historials)) {
    console.error("historials no es un array:", historials);
    return [];
  }

  // Combinar ambos arrays
  const historialsWithDetails = historials.map(histo => {
    // Buscar el producto correspondiente en la lista de productos
    const producto = products.find(prod => prod.idProducto === histo.idProducto);

    const metodo = metodos.find(met => met.idMetodoPago === histo.idMetodoPago);
    // Buscar el usuario correspondiente en la lista de usuarios
    const user = users.find(usr => usr.idUsuario === histo.idUsuario);

    // Buscar la persona correspondiente en la lista de personas usando el idPersona de user
    const persona = persons.find(person => person.idPersona === user?.idPersona);

    // Construir el objeto final con los datos combinados
    return {
      idHistorial: histo.idHistorial,
      cantidad: histo.cantidad,
      total: histo.total,
      metodoPago: metodo.nombre,
      producto: producto ? {
        idProducto: producto.idProducto,
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        precio: producto.precio
      } : null,
      usuario: user ? {
        idUsuario: user.idUsuario,
        numero: user.numero,
        persona: persona ? {
          nombre: persona.nombre,
          apellido: persona.apellido,
          correo: persona.correo
        } : null
      } : null
    };
  });
  
  return historialsWithDetails;
};
