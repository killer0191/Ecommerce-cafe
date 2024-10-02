using Ecommerce_Cafe.Business.Services;
using Ecommercer_Cafe.Entitys;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerce_Cafe.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CarritoController : Controller
    {
        private readonly CarritoService _carritoService;
        public CarritoController(CarritoService carritoService)
        {
            _carritoService = carritoService;
        }

        [HttpGet]
        [Route("ObtenerCarrito")]
        public async Task<IActionResult> GetCarrito()
        {
            try
            {
                var response = await _carritoService.GetCarritos();
                return Ok(response);
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("ObtenerCarritoById/{id}")]
        public async Task<IActionResult> GetCarritoById(int id)
        {
            try
            {
                var response = await _carritoService.GetCarritoById(id);
                if (response.IdCarrito == id) { return Ok(response);}
                return NotFound("Carrito no encontrado");
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("ObtenerCarritoDeUsuario/{id}")]
        public async Task<IActionResult> GetCarritoByUser(int id)
        {
            try
            {
                var response = await _carritoService.GetCarritoByIdUsuario(id);
                return Ok(response);
            }catch(Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        [Route("EliminarCarrito")]
        public async Task<IActionResult> DeleteCarrito(int id)
        {
            try
            {
                var response = await _carritoService.EliminarCarrito(id);
                if (response) { return Ok(response); }
                return BadRequest("Carrito no eliminado");
            }catch(Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("AgregarCarrito")]
        public async Task<IActionResult> insertCarrito([FromBody] Carrito carrito)
        {
            try
            {
                var response = await _carritoService.InsertarCarrito(carrito);
                if (response) { return Ok("Carrito insertado"); }
                return BadRequest("Carrito no insertado");
            }catch(Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        [Route("ActualizarCarrito")]
        public async Task<IActionResult> updateCarrito([FromBody] Carrito carrito)
        {
            try
            {
                var response = await _carritoService.ActualizarCarrito(carrito);
                if (response) { return Ok("Carrito actualizado"); }
                return BadRequest("Carrito no actualiado");
            }catch(Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("ComprarAllCarrito")]
        public async Task<IActionResult> buyCarrito([FromBody] HistorialMetodoPago historialMetodoPago)
        {
            try
            {
                var response = await _carritoService.MoveToHistorialByIdUsuario(historialMetodoPago);
                if(response) { return Ok("Carrito comprado"); }
                return BadRequest("Carrito no comprado");
            }catch(Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

    }
}
