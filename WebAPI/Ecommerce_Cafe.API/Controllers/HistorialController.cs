using Ecommerce_Cafe.Business.Services;
using Ecommerce_Cafe.DATA.Interfaces;
using Ecommercer_Cafe.Entitys;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerce_Cafe.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HistorialController : Controller
    {
        private readonly HistorialService _historialService;
        public HistorialController(HistorialService historialService)
        {
            _historialService = historialService;
        }

        [HttpGet]
        [Route("ObtenerHistoriales")]
        public async Task<IActionResult> GetHistoriales()
        {
            try
            {
                var response = await _historialService.GetHistoriales();
                return Ok(response);
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("ObtenerHistoralDelUsuario/{id}")]
        public async Task<IActionResult> GetHistorialByIdUser(int id)
        {
            try
            {
                var response = await _historialService.GetHistorialByIdUser(id);
                return Ok(response);
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("ObtenerHistorialPorId/{id}")]
        public async Task<IActionResult> GetHistorialById(int id)
        {
            try
            {
                var response = await _historialService.GetHistorialById(id);
                return Ok(response);
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        [Route("EliminarHistorial/{id}")]
        public async Task<IActionResult> DeleteHistorial(int id)
        {
            try
            {
                var response = await _historialService.EliminarHistorial(id);
                if (response) { return Ok("Registro eliminado"); }
                return BadRequest("Registro no eliminado");
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("AgregarHistorial")]
        public async Task<IActionResult> InsertHistorial([FromBody] Historial historial)
        {
            try
            {
                var response = await _historialService.InsertarHistorial(historial);
                if (response) { return Ok("Historial registrado"); }
                return BadRequest("Historial registrado");
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }
    }
}
