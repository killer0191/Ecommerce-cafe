using Ecommerce_Cafe.DATA.Interfaces;
using Ecommerce_Cafe.DATA.Repositories;
using Ecommercer_Cafe.Entitys;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce_Cafe.Business.Services
{
    public class ProductoService
    {
        private readonly IGlobalRepository<Producto> _productoRepository;
        public ProductoService(IGlobalRepository<Producto> productoRepository)
        {
            _productoRepository = productoRepository;
        }

        public async Task<List<Producto>> GetProductos()
        {
            try
            {
                var response = await _productoRepository.ObtenerTodos();
                return response;
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return new List<Producto>();
            }
        }
        public async Task<Producto> GetProductoById(int id)
        {
            try
            {
                var response = await _productoRepository.ObtenerById(id);
                return response;
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return new Producto();
            }
        }
        public async Task<bool> InsertarProducto(Producto producto)
        {
            try
            {
                var response = await _productoRepository.Insertar(producto);
                return response;
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
        public async Task<bool> ActualizarProducto(Producto producto)
        {
            try
            {
                var response = await _productoRepository.Actualizar(producto);
                return response;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
        public async Task<bool> EliminarProducto(int id)
        {
            try
            {
                var response = await _productoRepository.Eliminar(id);
                return response;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
        public async Task<bool> ActualizarCantidad(int id, int cant)
        {
            try
            {
                var response = await GetProductoById(id);
                response.Stock = response.Stock - cant;

                var resp = await _productoRepository.Actualizar(response);
                return resp;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
    }
}
