using Ecommerce_Cafe.Business.Services;
using Ecommercer_Cafe.Entitys;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerce_Cafe.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuarioController : Controller
    {
        private readonly UsuarioService _usuarioService;

        public UsuarioController(UsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [HttpGet]
        [Route("ObtenerUsuarios")]
        public async Task<IActionResult> getUsuarios()
        {
            try
            {
                var response = await _usuarioService.ObtenerTodos();
                return Ok(response);
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("ObtenerUsuario/{id}")]
        public async Task<IActionResult> getUserById(int id)
        {
            try
            {
                var response = await _usuarioService.ObtenerUserById(id);
                if (response.IdUsuario == id)
                {
                    return Ok(response);
                }
                return NotFound("Usuario no encontrado");
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        [Route("EliminarUsuario/{id}")]
        public async Task<IActionResult> deleteUsuario(int id)
        {
            try
            {
                bool response = await _usuarioService.EliminarUsuario(id);
                if (response) { return Ok("Usuario eliminado"); }
                return BadRequest(response);
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        [Route("ActualizarUsuario")]
        public async Task<IActionResult> updateUsuario([FromBody] Usuario user)
        {
            try
            {
                var response = await _usuarioService.ActualizarUsuario(user);
                if (response) { return Ok("Usuario actualizado"); }
                return BadRequest("Usuario no actualizado");
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("AgregarUsuario")]
        public async Task<IActionResult> insertUser([FromBody] Usuario user)
        {
            try
            {
                var response = await _usuarioService.InsertarUsuario(user);
                if (response) { return Ok("Usuario insertado"); }
                return BadRequest("Usuario no insertado");
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login(Login log)
        {
            var response = await _usuarioService.Login(log);

            if (!response) { return Json("Usuario no encontrado"); }
            return Ok(response);
        }
    }
}
