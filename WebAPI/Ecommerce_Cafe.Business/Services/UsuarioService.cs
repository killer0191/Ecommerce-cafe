using Ecommerce_Cafe.DATA.Interfaces;
using Ecommercer_Cafe.Entitys;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Ecommerce_Cafe.Business.Services
{
    public class UsuarioService
    {
        private readonly IGlobalRepository<Usuario> _usuarioRepository;
        private readonly PersonaService _personaService;
        public UsuarioService(IGlobalRepository<Usuario> personaRepository, PersonaService personaService)
        {
            _usuarioRepository = personaRepository;
            _personaService = personaService;
        }

        public async Task<List<Usuario>> ObtenerTodos()
        {
            var users = await _usuarioRepository.ObtenerTodos();
            return users;
        }
        public async Task<Usuario> ObtenerUserById(int id)
        {
            try
            {
                var response = await _usuarioRepository.ObtenerById(id);
                return response;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return new Usuario();
            }
        }
        public async Task<bool> InsertarUsuario(Usuario user)
        {
            try
            {
                var options = new JsonSerializerOptions
                {
                    ReferenceHandler = ReferenceHandler.Preserve // Evita los ciclos de referencias
                };

                var response = await _personaService.InsertarPersona(user.IdPersonaNavigation);
                if (response.IdPersona > 0)
                {
                    user.IdPersona = user.IdPersonaNavigation.IdPersona;
                    bool admin = await _usuarioRepository.Insertar(user);
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
        public async Task<bool> ActualizarUsuario(Usuario usuario)
        {
            try
            {
                var options = new JsonSerializerOptions
                {
                    ReferenceHandler = ReferenceHandler.Preserve // Evita los ciclos de referencias
                };

                var response = await _personaService.Actualizar(usuario.IdPersonaNavigation);
                if (usuario.IdPersonaNavigation.IdPersona > 0)
                {
                    usuario.IdPersona = usuario.IdPersonaNavigation.IdPersona;
                    bool admin = await _usuarioRepository.Actualizar(usuario);
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
        public async Task<bool> EliminarUsuario(int id)
        {
            try
            {
                bool bandera = false;
                var auxUsuario = await ObtenerUserById(id);
                if(auxUsuario.IdUsuario == id)
                {
                    var rsp = await _personaService.BorrarPersona(auxUsuario.IdPersona);
                    var response = await _usuarioRepository.Eliminar(id);
                    if (response) { bandera = true; }

                }
                return bandera;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
        public async Task<Usuario> ObtenerUserByIdPersona(int id)
        {
            var response = await _usuarioRepository.ObtenerTodos();
            var res = response.FirstOrDefault(a => a.IdPersona == id);
            return res;
        }
        public async Task<UsuarioLogin> Login(Login log)
        {
            UsuarioLogin auxUsuario = new UsuarioLogin();
            try
            {
                var personas = await _personaService.ObtenerPersonas();
                var persona = personas.FirstOrDefault(p => p.Correo == log.correo);

                if (persona == null)
                {
                    return auxUsuario;
                }
                var passwordHasher = new PasswordHasher<Persona>();

                var passwordVerificationResult = passwordHasher.VerifyHashedPassword(persona, persona.Contraseña, log.password);

                if (passwordVerificationResult == PasswordVerificationResult.Success)
                {
                    var admin = await ObtenerUserByIdPersona(persona.IdPersona);
                    auxUsuario.IdUsuario = admin.IdUsuario;
                    auxUsuario.IdPersona = persona.IdPersona;
                    auxUsuario.Numero = admin.Numero;
                    auxUsuario.Nombre = persona.Nombre;
                    auxUsuario.Apellido = persona.Apellido;
                    auxUsuario.Correo = persona.Correo;
                    auxUsuario.Contraseña = persona.Contraseña;

                    return auxUsuario;
                }

                return auxUsuario; // Si la contraseña no coincide
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return auxUsuario;
            }
        }
    }
}
