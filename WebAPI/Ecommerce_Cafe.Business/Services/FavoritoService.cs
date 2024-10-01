using Ecommerce_Cafe.DATA.Interfaces;
using Ecommerce_Cafe.DATA.Repositories;
using Ecommercer_Cafe.Entitys;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce_Cafe.Business.Services
{
    public class FavoritoService
    {
        private readonly IGlobalRepository<Favorito> _favoritoRepository;
        private readonly CarritoService _carritoService;
        public FavoritoService(IGlobalRepository<Favorito> favoritoRepository, CarritoService carritoService)
        {
            _favoritoRepository = favoritoRepository;
            _carritoService = carritoService;
        }

        public async Task<List<Favorito>> GetFavoritos()
        {
            try
            {
                var response = await _favoritoRepository.ObtenerTodos();
                return response;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return new List<Favorito>();
            }
        }
        public async Task<Favorito> GetFavoritoById(int id)
        {
            try
            {
                var fav = await _favoritoRepository.ObtenerById(id);
                return fav;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return new Favorito();
            }
        }
        public async Task<List<Favorito>> GetFavoritosByIdUsuario(int id)
        {
            try
            {
                var favs = await GetFavoritos();
                var favos = favs.Where(f => f.IdUsuario == id).ToList();
                return favos;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return new List<Favorito>();
            }
        }
        public async Task<bool> EliminarFavorito(int id)
        {
            try
            {
                var response = await _favoritoRepository.Eliminar(id);
                return response;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
        public async Task<bool> InsertarFavorito(Favorito favorito)
        {
            try
            {
                var response = await _favoritoRepository.Insertar(favorito);
                return response;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
        public async Task<bool> ActualizarFavorito(Favorito favorito)
        {
            try
            {
                var response = await _favoritoRepository.Actualizar(favorito);
                return response;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
        public async Task<bool> MoverToCarritoByIdUser(int id)
        {
            try
            {
                Carrito auxCarrito = new Carrito();
                var favs = await GetFavoritosByIdUsuario(id);
                foreach(var fav in favs)
                {
                    auxCarrito.Cantidad = 1;
                    auxCarrito.IdProducto = fav.IdProducto;
                    auxCarrito.IdUsuario = fav.IdUsuario;

                    await _carritoService.InsertarCarrito(auxCarrito);
                }
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
        public async Task<bool> MoverFavToCarritoByIdFav(int id)
        {
            try
            {
                Carrito auxCarrito = new Carrito();
                var fav = await GetFavoritoById(id);

                auxCarrito.Cantidad = 1;
                auxCarrito.IdProducto = fav.IdProducto;
                auxCarrito.IdUsuario = fav.IdUsuario;

                var response = await _carritoService.InsertarCarrito(auxCarrito);

                return response;

            }
            catch (Exception ex) {
                Console.WriteLine(new { Message = ex.Message, InnerException = ex.InnerException?.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }

    }
}
