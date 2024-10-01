using Ecommerce_Cafe.Business.Services;
using Ecommercer_Cafe.Entitys;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerce_Cafe.API.Controllers
{
    public class FavoritoController : Controller
    {
        private readonly FavoritoService _favoritoService;
        public FavoritoController(FavoritoService favoritoService)
        {
            _favoritoService = favoritoService;
        }

        [HttpGet]
        [Route("ObtenerFavoritos")]
        public async Task<IActionResult> GetFavoritos()
        {
            try
            {
                var response = await _favoritoService.GetFavoritos();
                return Ok(response);
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("ObtenerFavorito/{id}")]
        public async Task<IActionResult> GetFavoritoById(int id)
        {
            try
            {
                var response = await _favoritoService.GetFavoritoById(id);
                return Ok(response);
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("ObtenerFavoritosDeUsuario")]
        public async Task<IActionResult> GetFavoritoByIdUser(int id)
        {
            try
            {
                var response = await _favoritoService.GetFavoritosByIdUsuario(id);
                return Ok(response);
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        [Route("EliminarFavorito")]
        public async Task<IActionResult> DeleteFaorito(int id)
        {
            try
            {
                var response = await _favoritoService.EliminarFavorito(id);
                if (response) { return Ok("Favorito eliminado"); }
                return BadRequest("Favorito no eliminado");
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("AgregarFavorito")]
        public async Task<IActionResult> InsertFavorito([FromBody] Favorito fav)
        {
            try
            {
                var response = await _favoritoService.InsertarFavorito(fav);
                if (response) { return Ok("Favorito insertado"); }
                return BadRequest("Favorito no insertado");
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        [Route("ActualizarFavorito")]
        public async Task<IActionResult> UpdateFavorito([FromBody] Favorito fav)
        {
            try
            {
                var response = await _favoritoService.ActualizarFavorito(fav);
                if (response) { return Ok("Favorito actualizado"); }
                return BadRequest("Favorito no actualizado");
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("MoverTodosFavoritosAlCarrito/{idUsuario}")]
        public async Task<IActionResult> BuyAllFav(int idUsuario)
        {
            try
            {
                var response = await _favoritoService.MoverToCarritoByIdUser(idUsuario);
                if (response) { return Ok("Productos en el carrito"); }
                return BadRequest("No se movieron al carrito");
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("MoverFavoritoAlCarrito/{idFav}")]
        public async Task<IActionResult> BuyFavById(int idFav)
        {
            try
            {
                var response = await _favoritoService.MoverFavToCarritoByIdFav(idFav);
                if (response) { return Ok("Se movio al carrito"); }
                return BadRequest("No se movio al carrito");
            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return BadRequest(ex.Message);
            }

        }
    }
}
