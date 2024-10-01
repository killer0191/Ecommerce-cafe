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
    public class HistorialService
    {
        private readonly IGlobalRepository<Historial> _historialRepository;
        private readonly ProductoService _productoService;
        public HistorialService(IGlobalRepository<Historial> historialRepository, ProductoService productoService)
        {
            _historialRepository = historialRepository;
            _productoService = productoService;
        }

        public async Task<List<Historial>> GetHistoriales()
        {
            try
            {
                var response = await _historialRepository.ObtenerTodos();
                return response;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return new List<Historial>();
            }
        }
        public async Task<List<Historial>> GetHistorialByIdUser(int id)
        {
            try
            {
                var response = await GetHistoriales();
                var his = response.Where(h => h.IdUsuario == id).ToList();
                return his;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return new List<Historial>();
            }
        }
        public async Task<Historial> GetHistorialById(int id)
        {
            try
            {
                var response = await _historialRepository.ObtenerById(id);
                return response;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return new Historial();
            }
        }
        public async Task<bool> EliminarHistorial(int id)
        {
            try
            {
                var response = await _historialRepository.Eliminar(id);
                return response;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
        //Falta insertar
        public async Task<bool> InsertarHistorial(Historial historial)
        {
            try
            {
                var response = await _historialRepository.Insertar(historial);
                if (response)
                {
                    var prod = await _productoService.ActualizarCantidad(historial.IdProducto, historial.Cantidad);
                    return prod;
                }

                return false;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
    }
}
