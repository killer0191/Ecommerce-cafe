using System;
using System.Collections.Generic;

namespace Ecommercer_Cafe.Entitys;

public partial class Producto
{
    public int IdProducto { get; set; }

    public string Nombre { get; set; } = null!;

    public string Descripcion { get; set; } = null!;

    public decimal Precio { get; set; }

    public int Stock { get; set; }

    public int IdTipoProducto { get; set; }

    public virtual ICollection<Carrito>? Carritos { get; set; } = new List<Carrito>();

    public virtual ICollection<Favorito>? Favoritos { get; set; } = new List<Favorito>();

    public virtual ICollection<Historial>? Historials { get; set; } = new List<Historial>();

    public virtual TipoProducto? IdTipoProductoNavigation { get; set; } = null!;
}
