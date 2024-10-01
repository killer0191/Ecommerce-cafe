using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce_Cafe.DATA.Interfaces
{
    public interface IGlobalRepository<TEntityModel> where TEntityModel : class
    {
        Task<bool> Insertar(TEntityModel entity);
        Task<bool> Actualizar(TEntityModel entity);
        Task<bool> Eliminar(int id);
        Task<TEntityModel> ObtenerById(int id);
        Task<List<TEntityModel>> ObtenerTodos();

    }
}
