using Ecommerce_Cafe.DATA.Interfaces;
using Ecommerce_Cafe.DATA.Repositories;
using Ecommercer_Cafe.Entitys;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce_Cafe.Business.Services
{
    public class CarritoService
    {
        private readonly IGlobalRepository<Carrito> _carritoRepository;
        private readonly HistorialService _historialService;
        private readonly ProductoService _productoService;
        public CarritoService(IGlobalRepository<Carrito> carritoRepository, HistorialService historialService, ProductoService productoService)
        {
            _carritoRepository = carritoRepository;
            _historialService = historialService;
            _productoService = productoService;
        }

        public async Task<List<Carrito>> GetCarritos()
        {
            try
            {
                var response = await _carritoRepository.ObtenerTodos();
                return response;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return new List<Carrito>();
            }
        }
        public async Task<Carrito> GetCarritoById(int id)
        {
            try
            {
                var response = await _carritoRepository.ObtenerById(id);
                return response;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return new Carrito();
            }
        }
        public async Task<List<Carrito>> GetCarritoByIdUsuario(int id)
        {
            try
            {
                var carritos = await GetCarritos();
                var carrito = carritos.Where(c => c.IdUsuario == id).ToList();
                return carrito;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return new List<Carrito>();
            }
        }
        public async Task<bool> EliminarCarrito(int id)
        {
            try
            {
                var response = await _carritoRepository.Eliminar(id);
                return response;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
        public async Task<bool> InsertarCarrito(Carrito carrito)
        {
            try
            {
                var response = await _carritoRepository.Insertar(carrito);
                return response;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
        public async Task<bool> ActualizarCarrito(Carrito carrito)
        {
            try
            {
                var response = await _carritoRepository.Actualizar(carrito);
                return response;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
        public async Task<bool> MoveToHistorialByIdUsuario(HistorialMetodoPago model)
        {
            try
            {
                int id = model.idUsuario;
                Historial auxHistorial = new Historial();
                Producto auxProducto = new Producto();                
                var response = await GetCarritoByIdUsuario(id);

                bool bandera = false;

                foreach (var item in response) {
                    //auxT = item. item.Cantidad
                    auxHistorial.IdUsuario = id;
                    auxHistorial.Cantidad = item.Cantidad;
                    auxHistorial.IdProducto = item.IdProducto;
                    auxProducto = await _productoService.GetProductoById(item.IdProducto);
                    auxHistorial.Total = auxProducto.Precio * item.Cantidad;
                    auxHistorial.IdMetodoPago = model.idMetodoPago;

                    bandera = await _historialService.InsertarHistorial(auxHistorial);
                }
                return bandera;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
    }
}
