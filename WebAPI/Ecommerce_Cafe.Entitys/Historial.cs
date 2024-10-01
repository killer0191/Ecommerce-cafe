using System;
using System.Collections.Generic;

namespace Ecommercer_Cafe.Entitys;

public partial class Historial
{
    public int IdHistorial { get; set; }

    public int Cantidad { get; set; }

    public decimal? Total { get; set; }

    public int IdMetodoPago { get; set; }

    public int IdUsuario { get; set; }

    public int IdProducto { get; set; }

    public virtual MetodoPago IdMetodoPagoNavigation { get; set; } = null!;

    public virtual Producto IdProductoNavigation { get; set; } = null!;

    public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
}

public class HistorialMetodoPago
{
    public int idUsuario { get; set; }
    public int idMetodoPago { get; set; }
}

