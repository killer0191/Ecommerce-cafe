using System;
using System.Collections.Generic;

namespace Ecommercer_Cafe.Entitys;

public partial class MetodoPago
{
    public int IdMetodoPago { get; set; }

    public string? Nombre { get; set; }

    public virtual ICollection<Historial> Historials { get; set; } = new List<Historial>();
}
