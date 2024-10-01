using Ecommerce_Cafe.Business.Services;
using Ecommercer_Cafe.Entitys;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerce_Cafe.API.Controllers
{
    public class MetodoPagoController : Controller
    {
        private readonly MetodoPagoService _metodoPagoService;
        public MetodoPagoController(MetodoPagoService metodoPagoService)
        {
            _metodoPagoService = metodoPagoService;
        }

        [HttpGet]
        [Route("ObtenerMetodosDePago")]
        public async Task<IActionResult> GetMetodosPago()
        {
            try
            {
                var response = await _metodoPagoService.GetMetodoPagos();
                return Ok(response);
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("ObtenerMetodoPago/{id}")]
        public async Task<IActionResult> GetMetodoPagoById(int id)
        {
            try
            {
                var response = await _metodoPagoService.GetMetodoPagoById(id);
                return Ok(response);
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        [Route("EliminarMetodoPago/{id}")]
        public async Task<IActionResult> DeleteMetodoPago(int id)
        {
            try
            {
                var response = await _metodoPagoService.EliminarMetodoPago(id);
                if (response) { return Ok("Metodo eliminado"); }
                return BadRequest("Metodo no eliminado");
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("AgregarMetodoPago")]
        public async Task<IActionResult> InsertMetodoPago([FromBody] MetodoPago metodoPago)
        {
            try
            {
                var response = await _metodoPagoService.InsertMetodoPago(metodoPago);
                if (response) { return Ok("Metodo insertado"); }
                return BadRequest("Metodo no insertado");
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }
        
        [HttpPut]
        [Route("ActualizarMetodoPago")]
        public async Task<IActionResult> UpdateMetodoPago([FromBody] MetodoPago metodoPago)
        {
            try
            {
                var response = await _metodoPagoService.ActualizarMetodoPago(metodoPago);
                if (response) { return Ok("Metodo actualizado"); }
                return BadRequest("Metodo no actualizado");
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

    }
}
