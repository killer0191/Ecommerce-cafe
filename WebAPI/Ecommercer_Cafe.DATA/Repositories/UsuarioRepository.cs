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
    public class UsuarioRepository : IGlobalRepository<Usuario>
    {
        EcommerceCafeContext _context;
        public UsuarioRepository(EcommerceCafeContext ecommerceCafeContext)
        {
            _context = ecommerceCafeContext;
        }
        public async Task<bool> Actualizar(Usuario entity)
        {
            try
            {
                _context.Usuarios.Update(entity);
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
                Usuario user = _context.Usuarios.FirstOrDefault(a => a.IdUsuario == id);
                _context.Usuarios.Remove(user);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }

        public async Task<bool> Insertar(Usuario entity)
        {
            try
            {
                _context.Usuarios.Add(entity);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }

        public async Task<Usuario> ObtenerById(int id)
        {
            Usuario user = _context.Usuarios.FirstOrDefault(a => a.IdUsuario == id);
            return user;
        }

        public async Task<List<Usuario>> ObtenerTodos()
        {
            List<Usuario> usuarios = _context.Usuarios.ToList();
            return usuarios;
        }
    }
}
