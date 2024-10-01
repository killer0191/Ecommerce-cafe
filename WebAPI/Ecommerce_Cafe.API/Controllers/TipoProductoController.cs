using Ecommerce_Cafe.Business.Services;
using Ecommercer_Cafe.Entitys;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerce_Cafe.API.Controllers
{
    public class TipoProductoController : Controller
    {
        private readonly TipoProductoService _tipoProductoService;
        public TipoProductoController(TipoProductoService tipoProductoService)
        {
            _tipoProductoService = tipoProductoService;
        }

        [HttpGet]
        [Route("ObtenerTiposProductos")]
        public async Task<IActionResult> GetTiposProductos()
        {
            try
            {
                var response = await _tipoProductoService.GetTipoProductos();
                return Ok(response);
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("ObtenerTipoProducto/{id}")]
        public async Task<IActionResult> GetTipoProducto(int id)
        {
            try
            {
                var response = await _tipoProductoService.GetTipoProducto(id);
                return Ok(response);
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        [Route("EliminarTipoProducto/{id}")]
        public async Task<IActionResult> DeleteTipoProducto(int id)
        {
            try
            {
                var response = await _tipoProductoService.EliminarTipoProducto(id);
                if (response) { return Ok("Tipo producto eliminado"); }
                return BadRequest("Tipo producto no eliminado");
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("AgregarTipoProducto")]
        public async Task<IActionResult> InsertTipoProducto([FromBody] TipoProducto tipoProducto)
        {
            try
            {
                var response = await _tipoProductoService.InsertarTipoProducto(tipoProducto);
                if (response) { return Ok("Tipo de producto insertado"); }
                return BadRequest("Tipo producto no insertado");
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        [Route("ActualizarTipoProducto")]
        public async Task<IActionResult> UpdateTipoProducto([FromBody] TipoProducto tipoProducto)
        {
            try
            {
                var response = await _tipoProductoService.ActualizarTipoProducto(tipoProducto);
                if (response) { return Ok("Tipo de producto actualizado"); }
                return BadRequest("Tipo producto no actualizado");
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }
    }
}
