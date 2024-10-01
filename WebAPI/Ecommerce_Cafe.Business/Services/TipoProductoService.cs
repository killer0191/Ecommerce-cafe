using Ecommerce_Cafe.DATA.Interfaces;
using Ecommerce_Cafe.DATA.Repositories;
using Ecommercer_Cafe.Entitys;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce_Cafe.Business.Services
{
    public class TipoProductoService
    {
        private readonly IGlobalRepository<TipoProducto> _tipoProductoRepository;
        public TipoProductoService(IGlobalRepository<TipoProducto> tipoProductoRepository)
        {
            _tipoProductoRepository = tipoProductoRepository;
        }

        public async Task<List<TipoProducto>> GetTipoProductos()
        {
            try
            {
                var response = await _tipoProductoRepository.ObtenerTodos();
                return response;
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return new List<TipoProducto>();
            }
        }
        public async Task<TipoProducto> GetTipoProducto(int id)
        {
            try
            {
                var response = await _tipoProductoRepository.ObtenerById(id);
                return response;
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return new TipoProducto();
            }
        }
        public async Task<bool> EliminarTipoProducto(int id)
        {
            try
            {
                var response = await _tipoProductoRepository.Eliminar(id);
                return response;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
        public async Task<bool> InsertarTipoProducto(TipoProducto tipoProducto)
        {
            try
            {
                var response = await _tipoProductoRepository.Insertar(tipoProducto);
                return response;
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
        public async Task<bool> ActualizarTipoProducto(TipoProducto tipoProducto)
        {
            try
            {
                var response = await _tipoProductoRepository.Actualizar(tipoProducto);
                return response;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
    }
}
