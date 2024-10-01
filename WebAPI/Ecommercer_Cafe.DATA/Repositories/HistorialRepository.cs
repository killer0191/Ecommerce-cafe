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
    public class HistorialRepository : IGlobalRepository<Historial>
    {
        EcommerceCafeContext _context;
        public HistorialRepository(EcommerceCafeContext ecommerceCafeContext)
        {
            _context = ecommerceCafeContext;
        }

        public async Task<bool> Actualizar(Historial entity)
        {
            _context.Historials.Update(entity);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Eliminar(int id)
        {
            Historial admin = _context.Historials.FirstOrDefault(p => p.IdHistorial == id);
            _context.Historials.Remove(admin);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Insertar(Historial entity)
        {
            _context.Historials.Add(entity);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<Historial> ObtenerById(int id)
        {
            Historial historial = _context.Historials.FirstOrDefault(p => p.IdHistorial == id);
            return historial;
        }

        public async Task<List<Historial>> ObtenerTodos()
        {
            List<Historial> historials = _context.Historials.ToList();
            return historials;
        }
    }
}
