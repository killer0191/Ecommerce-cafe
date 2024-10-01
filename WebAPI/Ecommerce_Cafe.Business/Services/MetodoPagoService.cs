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
   
    public class MetodoPagoService
    {
        private readonly IGlobalRepository<MetodoPago> _metodoPagoRepository;
        public MetodoPagoService(IGlobalRepository<MetodoPago> metodoPagoRepository)
        {
            _metodoPagoRepository = metodoPagoRepository;
        }

        public async Task<List<MetodoPago>> GetMetodoPagos()
        {
            try
            {
                var response = await _metodoPagoRepository.ObtenerTodos();
                return response;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return new List<MetodoPago>();
            }
        }
        public async Task<MetodoPago> GetMetodoPagoById(int id)
        {
            try
            {
                var response = await _metodoPagoRepository.ObtenerById(id);
                return response;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return new MetodoPago();
            }
        }
        public async Task<bool> EliminarMetodoPago(int id)
        {
            try
            {
                var resp = await _metodoPagoRepository.Eliminar(id);
                return resp;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
        public async Task<bool> InsertMetodoPago(MetodoPago metodoPago)
        {
            try
            {
                var response = await _metodoPagoRepository.Insertar(metodoPago);
                return response;
            }catch(Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
        public async Task<bool> ActualizarMetodoPago(MetodoPago metodoPago)
        {
            try
            {
                var response = await _metodoPagoRepository.Actualizar(metodoPago);
                return response;
            }catch(Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
    }
}
