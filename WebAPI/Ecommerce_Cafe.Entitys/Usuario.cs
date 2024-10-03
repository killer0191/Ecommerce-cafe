using System;
using System.Collections.Generic;

namespace Ecommercer_Cafe.Entitys;

public partial class Usuario
{
    public int IdUsuario { get; set; }

    public string Numero { get; set; } = null!;

    public int IdPersona { get; set; }

    public virtual ICollection<Carrito> Carritos { get; set; } = new List<Carrito>();

    public virtual ICollection<Favorito> Favoritos { get; set; } = new List<Favorito>();

    public virtual ICollection<Historial> Historials { get; set; } = new List<Historial>();

    public virtual Persona IdPersonaNavigation { get; set; } = null!;
}

public class UsuarioLogin
{
    public int IdUsuario { get; set; }

    public string Numero { get; set; } = null!;

    public int IdPersona { get; set; }
    public string Nombre { get; set; } = null!;

    public string Apellido { get; set; } = null!;

    public string Correo { get; set; } = null!;

    public string Contraseña { get; set; } = null!;
}