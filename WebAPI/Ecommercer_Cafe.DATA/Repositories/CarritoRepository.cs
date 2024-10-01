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
    public class CarritoRepository : IGlobalRepository<Carrito>
    {
        private EcommerceCafeContext _context;
        public CarritoRepository(EcommerceCafeContext ecommerceCafeContext)
        {
            _context = ecommerceCafeContext;
        }

        public async Task<bool> Actualizar(Carrito entity)
        {
            _context.Carritos.Update(entity);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Eliminar(int id)
        {
            Carrito admin = _context.Carritos.FirstOrDefault(p => p.IdCarrito == id);
            _context.Carritos.Remove(admin);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Insertar(Carrito entity)
        {
            _context.Carritos.Add(entity);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<Carrito> ObtenerById(int id)
        {
            Carrito carrito = _context.Carritos.FirstOrDefault(p => p.IdCarrito == id);
            return carrito;
        }

        public async Task<List<Carrito>> ObtenerTodos()
        {
            List<Carrito> carritos = _context.Carritos.ToList();
            return carritos;
        }
    }
}
