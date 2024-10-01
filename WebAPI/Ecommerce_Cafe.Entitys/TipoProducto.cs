using System;
using System.Collections.Generic;

namespace Ecommercer_Cafe.Entitys;

public partial class TipoProducto
{
    public int IdTipoProducto { get; set; }

    public string Nombre { get; set; } = null!;

    public virtual ICollection<Producto> Productos { get; set; } = new List<Producto>();
}
