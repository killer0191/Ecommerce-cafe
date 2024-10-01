using Ecommerce_Cafe.DATA.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Ecommercer_Cafe.Entitys;
using Ecommerce_Cafe.DATA.Interfaces;

namespace Ecommerce_Cafe.Business.Services
{
    
    public class PersonaService
    {
        private readonly PersonaRepository _personaRepository;
        public PersonaService(PersonaRepository personaRepository)
        {
            _personaRepository = personaRepository;
        }

        public async Task<List<Persona>> ObtenerPersonas()
        {
            var personas = await _personaRepository.ObtenerTodos();
            return personas;
        }
        public async Task<Persona> ObtenerPersonaById(int id)
        {
            try
            {
                var response = await _personaRepository.ObtenerById(id);
                return response;
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return new Persona();
            }
        }
        public async Task<Persona> InsertarPersona(Persona persona)
        {
            var respon = await _personaRepository.Insertar(persona);
            return respon;
        }
        public async Task<bool> Actualizar(Persona persona)
        {
            try
            {
                var response = await _personaRepository.Actualizar(persona);
                return response;
            }
            catch (Exception ex) 
            {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
        public async Task<bool> BorrarPersona(int id)
        {
            try
            {
                var response = await _personaRepository.Eliminar(id);
                return response;
            }
            catch (Exception ex) 
            {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
    }
}
