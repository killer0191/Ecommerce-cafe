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
    public class FavoritoRepository : IGlobalRepository<Favorito>
    {
        private EcommerceCafeContext _context;
        public FavoritoRepository(EcommerceCafeContext ecommerceCafeContext)
        {
            _context = ecommerceCafeContext;
        }
        public async Task<bool> Actualizar(Favorito entity)
        {
            _context.Favoritos.Update(entity);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Eliminar(int id)
        {
            Favorito favorito = _context.Favoritos.FirstOrDefault(f => f.IdFavorito == id);
            _context.Remove(favorito);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Insertar(Favorito entity)
        {
            _context.Favoritos.Add(entity);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<Favorito> ObtenerById(int id)
        {
            Favorito fav = _context.Favoritos.FirstOrDefault(f => f.IdFavorito == id);
            return fav;
        }

        public async Task<List<Favorito>> ObtenerTodos()
        {
            List<Favorito> favs = _context.Favoritos.ToList();
            return favs;
        }
    }
}
