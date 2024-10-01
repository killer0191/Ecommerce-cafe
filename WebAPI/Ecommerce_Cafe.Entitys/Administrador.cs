using System;
using System.Collections.Generic;

namespace Ecommercer_Cafe.Entitys;

public partial class Administrador
{
    public int IdAdministrador { get; set; }

    public bool Sesion { get; set; }

    public int IdPersona { get; set; }

    public virtual Persona? IdPersonaNavigation { get; set; } = null!;
}

public class Login
{
    public string correo { get; set; }
    public string password { get; set; }
}