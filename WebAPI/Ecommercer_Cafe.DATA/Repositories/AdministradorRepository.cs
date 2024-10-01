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
    public class AdministradorRepository : IGlobalRepository<Administrador>
    {
        private EcommerceCafeContext _context;
        public AdministradorRepository(EcommerceCafeContext ecommerceCafeContext)
        {
            _context = ecommerceCafeContext;
        }
        public async Task<bool> Actualizar(Administrador entity)
        {
            try
            {
                _context.Administradors.Update(entity);
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
                Administrador admin = _context.Administradors.FirstOrDefault(a => a.IdAdministrador == id);
                _context.Administradors.Remove(admin);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }

        public async Task<bool> Insertar(Administrador entity)
        {
            try
            {
                _context.Administradors.Add(entity);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }

        public async Task<Administrador> ObtenerById(int id)
        {
            Administrador admin = _context.Administradors.FirstOrDefault(a => a.IdAdministrador == id);
            return admin;
        }

        public async Task<List<Administrador>> ObtenerTodos()
        {
            List<Administrador> admins = _context.Administradors.ToList();
            return admins;
        }
    }
}
