using Ecommerce_Cafe.DATA.DataContext;
using Ecommerce_Cafe.DATA.Interfaces;
using Ecommercer_Cafe.Entitys;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce_Cafe.DATA.Repositories
{
    public class ProductoRepository : IGlobalRepository<Producto>
    {
        EcommerceCafeContext _context;
        public ProductoRepository(EcommerceCafeContext ecommerceCafeContext)
        {
            _context = ecommerceCafeContext;
        }
        public async Task<bool> Actualizar(Producto entity)
        {
            try
            {
                _context.Productos.Update(entity);
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
                Producto producto = _context.Productos.FirstOrDefault(a => a.IdProducto == id);
                _context.Productos.Remove(producto);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }

        public async Task<bool> Insertar(Producto entity)
        {
            try
            {
                _context.Productos.Add(entity);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }

        public async Task<Producto> ObtenerById(int id)
        {
            Producto producto = _context.Productos.FirstOrDefault(a => a.IdProducto == id);
            return producto;
        }

        public async Task<List<Producto>> ObtenerTodos()
        {
            List<Producto> productos = _context.Productos.ToList();
            return productos;
        }
    }
}
