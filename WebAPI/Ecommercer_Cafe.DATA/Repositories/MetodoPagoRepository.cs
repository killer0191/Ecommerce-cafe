using Ecommerce_Cafe.DATA.DataContext;
using Ecommerce_Cafe.DATA.Interfaces;
using Ecommercer_Cafe.Entitys;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce_Cafe.DATA.Repositories
{
    public class MetodoPagoRepository : IGlobalRepository<MetodoPago>
    {
        private readonly EcommerceCafeContext _context;
        public MetodoPagoRepository(EcommerceCafeContext ecommerceCafeContext) 
        {
            _context = ecommerceCafeContext;
        }

        public async Task<bool> Actualizar(MetodoPago entity)
        {
            try
            {
                _context.MetodoPagos.Update(entity);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }

        public async Task<bool> Eliminar(int id)
        {
            try
            {
                MetodoPago metodoPago = _context.MetodoPagos.FirstOrDefault(a => a.IdMetodoPago == id);
                _context.MetodoPagos.Remove(metodoPago);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }

        public async Task<bool> Insertar(MetodoPago entity)
        {
            try
            {
                _context.MetodoPagos.Add(entity);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }

        public async Task<MetodoPago> ObtenerById(int id)
        {
            MetodoPago admin = _context.MetodoPagos.FirstOrDefault(a => a.IdMetodoPago == id);
            return admin;
        }

        public async Task<List<MetodoPago>> ObtenerTodos()
        {
            List<MetodoPago> metodoPagos = _context.MetodoPagos.ToList();
            return metodoPagos;
        }

    }
}
