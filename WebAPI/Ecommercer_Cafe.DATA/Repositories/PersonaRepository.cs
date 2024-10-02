using Ecommerce_Cafe.DATA.DataContext;
using Ecommerce_Cafe.DATA.Interfaces;
using Ecommercer_Cafe.Entitys;
using System;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce_Cafe.DATA.Repositories
{
    public class PersonaRepository
    {
        private EcommerceCafeContext _context;

        public PersonaRepository(EcommerceCafeContext context)
        {
            _context = context;
        }
        public async Task<bool> Actualizar(Persona entity)
        {
            _context.Personas.Update(entity);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Eliminar(int id)
        {
            Persona admin = _context.Personas.FirstOrDefault(p => p.IdPersona == id);
            _context.Personas.Remove(admin);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<Persona> Insertar(Persona entity)
        {
            try
            {
                var passwordHasher = new PasswordHasher<Persona>();
                entity.Contraseña = passwordHasher.HashPassword(entity, entity.Contraseña);

                var aux = _context.Personas.Add(entity);
                await _context.SaveChangesAsync();

                return aux.Entity;
            }
            catch (Exception ex) { 
                Persona auxPersona = new Persona();
                //auxPersona = ex.Message;
                return auxPersona;
            }
        }

        public async Task<Persona> Add(Persona entity)
        {

            var passwordHasher = new PasswordHasher<Persona>();
            entity.Contraseña = passwordHasher.HashPassword(entity, entity.Contraseña);

            var aux = _context.Personas.Add(entity);
            await _context.SaveChangesAsync();

            return aux.Entity;
        }

        public async Task<Persona> ObtenerById(int id)
        {
            Persona persona = _context.Personas.FirstOrDefault(p => p.IdPersona == id);
            return persona;
        }

        public async Task<List<Persona>> ObtenerTodos()
        {
            List<Persona> personas = _context.Personas.ToList();
            return personas;
        }
    }
}
