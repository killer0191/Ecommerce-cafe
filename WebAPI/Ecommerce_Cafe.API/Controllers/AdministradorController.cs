using Microsoft.AspNetCore.Mvc;
using Ecommerce_Cafe.Business.Services;
using Ecommercer_Cafe.Entitys;
namespace Ecommerce_Cafe.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AdministradorController : Controller
    {
        private readonly AdministradorService _administradorService;
        public AdministradorController(AdministradorService administradorService)
        {
            _administradorService = administradorService;
        }
        [HttpGet]
        [Route("ObtenerAdministradores")]
        public async Task<IActionResult> lista()
        {
            var result = await _administradorService.ObtenerTodos();
            return Ok(result);
        }
        [HttpPost]
        [Route("AgregarAdministrador")]
        public async Task<IActionResult> insertAdmin(Administrador admin)
        {
            var response = await _administradorService.InsertarAdministrador(admin);
            return Ok(response);
        }

        [HttpGet]
        [Route("ObtenerAdministrador/{id}")]
        public async Task<IActionResult> getAdminById(int id)
        {
            try
            {
                var response = await _administradorService.ObtenerAdminById(id);
                if(response.IdAdministrador == id)
                {
                    return Ok(response);
                }
                return NotFound("Administrador no encontrado");
            }
            catch (Exception ex) 
            {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        [Route("ActualizarAdministrador")]
        public async Task<IActionResult> updateAdmin(Administrador admin)
        {
            try
            {
                var response = await _administradorService.ActualizarAdministrador(admin);
                if (response) { 
                    return Ok("Administrador actualizado");
                }
                return BadRequest("Administrador no actualizado");
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        [Route("EliminarAdministrador")]
        public async Task<IActionResult> deleteAdmin(int id)
        {
            try
            {
                var response = await _administradorService.EliminarAdministrador(id);
                if (response) {
                    return Ok("Administrador eliminado");
                }
                return BadRequest("Administrador no eliminado");
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
            var response = await _administradorService.Login(log);
            
            if (!response) { return Json("Usuario no encontrado"); }
            return Ok(response);
        }
    }
}
