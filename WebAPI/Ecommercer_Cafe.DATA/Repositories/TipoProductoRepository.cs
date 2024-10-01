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
    public class TipoProductoRepository : IGlobalRepository<TipoProducto>
    {
        EcommerceCafeContext _context;
        public TipoProductoRepository(EcommerceCafeContext ecommerceCafeContext)
        {
            _context = ecommerceCafeContext;
        }
        public async Task<bool> Actualizar(TipoProducto entity)
        {
            try
            {
                _context.TipoProductos.Update(entity);
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
                TipoProducto tipoProducto = _context.TipoProductos.FirstOrDefault(a => a.IdTipoProducto == id);
                _context.TipoProductos.Remove(tipoProducto);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }

        public async Task<bool> Insertar(TipoProducto entity)
        {
            try
            {
                _context.TipoProductos.Add(entity);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }

        public async Task<TipoProducto> ObtenerById(int id)
        {
            TipoProducto tipoProducto = _context.TipoProductos.FirstOrDefault(a => a.IdTipoProducto == id);
            return tipoProducto;
        }

        public async Task<List<TipoProducto>> ObtenerTodos()
        {
            List<TipoProducto> tipoProductos = _context.TipoProductos.ToList();
            return tipoProductos;
        }
    }
}
