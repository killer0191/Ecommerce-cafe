using System;
using System.Collections.Generic;

namespace Ecommercer_Cafe.Entitys;

public partial class Persona
{
    public int IdPersona { get; set; }

    public string Nombre { get; set; } = null!;

    public string Apellido { get; set; } = null!;

    public string Correo { get; set; } = null!;

    public string Contraseña { get; set; } = null!;

    public virtual ICollection<Administrador> Administradors { get; set; } = new List<Administrador>();

    public virtual ICollection<Usuario> Usuarios { get; set; } = new List<Usuario>();
}
