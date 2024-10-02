using Ecommerce_Cafe.Business.Services;
using Ecommercer_Cafe.Entitys;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerce_Cafe.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonaController : Controller
    {
        private readonly PersonaService _personaService;
        public PersonaController(PersonaService personaService)
        {
            _personaService = personaService;
        }

        [HttpGet]
        [Route("GetPersonas")]
        public async Task<IActionResult> GetPersonas()
        {
            var response = await _personaService.ObtenerPersonas();
            return Ok(response);
        }

        [HttpPost]
        [Route("InsertPersona")]
        public async Task<IActionResult> InsertPersona([FromBody] Persona persona)
        {
            try
            {
                var response = await _personaService.InsertarPersona(persona);
                Console.WriteLine(response);
                return Ok(persona);
            }
            catch (Exception ex) {
                return BadRequest(ex.Message);
            }

        }
        [HttpPost]
        [Route("AgregarPersona")]
        public async Task<IActionResult> AddPersona([FromBody] Persona persona)
        {
            try
            {
                var response = await _personaService.AgregarPersona(persona);
                Console.WriteLine(response);
                return Json(persona);
            }
            catch (Exception ex) {
                return BadRequest(ex.Message);
            }

        }

    }
}
