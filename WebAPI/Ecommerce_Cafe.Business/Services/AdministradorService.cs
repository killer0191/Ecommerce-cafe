using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Identity;
using System.Text.Json;
using System.Threading.Tasks;
using Ecommerce_Cafe.DATA.Interfaces;
using Ecommercer_Cafe.Entitys;
using System.Net.Http.Json;

namespace Ecommerce_Cafe.Business.Services
{
    public class AdministradorService
    {
        private readonly IGlobalRepository<Administrador> _adminRepository;
        private readonly PersonaService _personaService;
        public AdministradorService(IGlobalRepository<Administrador> adminRepository, PersonaService personaService)
        {
            _adminRepository = adminRepository;
            _personaService = personaService;
        }

        public async Task<List<Administrador>> ObtenerTodos()
        {
            var admins = await _adminRepository.ObtenerTodos();
            return admins;
        }
        public async Task<Administrador> ObtenerAdminById(int id)
        {
            try
            {
                var response = await _adminRepository.ObtenerById(id);
                return response;
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return new Administrador();
            }
        }
        public async Task<bool> InsertarAdministrador(Administrador administrador)
    {
        try
        {
            var options = new JsonSerializerOptions
            {
                ReferenceHandler = ReferenceHandler.Preserve // Evita los ciclos de referencias
            };

            var response = await _personaService.InsertarPersona(administrador.IdPersonaNavigation);
                Console.WriteLine($"id: {response.IdPersona}");
            if (response.IdPersona > 0)
            {
                administrador.IdPersona = administrador.IdPersonaNavigation.IdPersona;
                bool admin = await _adminRepository.Insertar(administrador);
                return admin;
            }
            return false;
        }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return false;
            }

        }
        public async Task<bool> ActualizarAdministrador(Administrador administrador)
        {
            try
            {
                var options = new JsonSerializerOptions
                {
                    ReferenceHandler = ReferenceHandler.Preserve // Evita los ciclos de referencias
                };

                var response = await _personaService.Actualizar(administrador.IdPersonaNavigation);
                if (administrador.IdPersonaNavigation.IdPersona > 0)
                {
                    administrador.IdPersona = administrador.IdPersonaNavigation.IdPersona;
                    bool admin = await _adminRepository.Actualizar(administrador);
                    return admin;
                }
                return false;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
        public async Task<bool> EliminarAdministrador(int id)
        {
            try
            {
                var auxAdmin = await ObtenerAdminById(id);
                bool bandera = false;
                if(auxAdmin.IdAdministrador == id)
                {
                    var rsp = await _personaService.BorrarPersona(auxAdmin.IdPersona);
                    var response = await _adminRepository.Eliminar(id);

                    if(response) { bandera = true; }

                }
                return bandera;
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
        public async Task<Administrador> ObtenerAdminByIdPersona(int id)
        {
            var response = await _adminRepository.ObtenerTodos();
            var res = response.FirstOrDefault(a => a.IdPersona == id);
            return res;
        }
        public async Task<AdministradorLogin> Login(Login log)
    {
            AdministradorLogin auxAdmin = new AdministradorLogin();
        try
        {
            var personas = await _personaService.ObtenerPersonas();
            var persona = personas.FirstOrDefault(p => p.Correo == log.correo);

            if (persona == null)
            {
                return auxAdmin;
            }
            var passwordHasher = new PasswordHasher<Persona>();

            var passwordVerificationResult = passwordHasher.VerifyHashedPassword(persona, persona.Contraseña, log.password);

            if (passwordVerificationResult == PasswordVerificationResult.Success)
            {              
                var admin = await ObtenerAdminByIdPersona(persona.IdPersona);

                admin.Sesion = true;
                var resp = await _adminRepository.Actualizar(admin);

                auxAdmin.IdAdministrador = admin.IdAdministrador;
                auxAdmin.Sesion = true;
                auxAdmin.IdPersona = persona.IdPersona;
                auxAdmin.Nombre = persona.Nombre;
                auxAdmin.Apellido = persona.Apellido;
                auxAdmin.Correo = persona.Correo;
                auxAdmin.Contraseña = persona.Contraseña;

                return auxAdmin;
            }

            return auxAdmin; // Si la contraseña no coincide
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.ToString());
            return auxAdmin;
        }
    }

}
}
