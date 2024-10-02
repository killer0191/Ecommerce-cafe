using Ecommerce_Cafe.Business.Services;
using Ecommercer_Cafe.Entitys;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerce_Cafe.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductoController : Controller
    {
        private readonly ProductoService _productoService;
        public ProductoController(ProductoService productoService)
        {
            _productoService = productoService;
        }

        [HttpGet]
        [Route("ObtenerProductos")]
        public async Task<IActionResult> GetProductos()
        {
            try
            {
                var response = await _productoService.GetProductos();
                return Ok(response);
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }
        
        [HttpGet]
        [Route("ObtenerProductos/{id}")]
        public async Task<IActionResult> GetProductoById(int id)
        {
            try
            {
                var response = await _productoService.GetProductoById(id);
                return Ok(response);
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("AgregarProducto")]
        public async Task<IActionResult> InsertProducto([FromBody] Producto producto)
        {
            try
            {
                var response = await _productoService.InsertarProducto(producto);
                if (response) { return Ok("Producto insertado"); }
                return BadRequest("Producto no insertado");
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        [Route("ActualizarProducto")]
        public async Task<IActionResult> UpdateProducto([FromBody] Producto producto)
        {
            try
            {
                var response = await _productoService.ActualizarProducto(producto);
                if (response) { return Ok("Producto actualizado"); }
                return BadRequest("Producto no actualizado");
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        [Route("EliminarProducto/{id}")]
        public async Task<IActionResult> DeleteProducto(int id)
        {
            try
            {
                var response = await _productoService.EliminarProducto(id);
                if (response) { return Ok("Producto eliminado"); }
                return BadRequest("Producto no eliminado");
            }catch(Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        [Route("ActualizarCantidadProducto/{id}/{cant}")]
        public async Task<IActionResult> UpdateStockProducto(int id, int cant)
        {
            try
            {
                var response = await _productoService.ActualizarCantidad(id, cant);
                if (response) { return Ok("Producto actualizado"); }
                return BadRequest("Producto no actualizado");
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }
    }
}
