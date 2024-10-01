using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Ecommercer_Cafe.Entitys;
namespace Ecommerce_Cafe.DATA.DataContext;

public partial class EcommerceCafeContext : DbContext
{
    public EcommerceCafeContext()
    {
    }

    public EcommerceCafeContext(DbContextOptions<EcommerceCafeContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Administrador> Administradors { get; set; }

    public virtual DbSet<Carrito> Carritos { get; set; }

    public virtual DbSet<Favorito> Favoritos { get; set; }

    public virtual DbSet<Historial> Historials { get; set; }

    public virtual DbSet<MetodoPago> MetodoPagos { get; set; }

    public virtual DbSet<Persona> Personas { get; set; }

    public virtual DbSet<Producto> Productos { get; set; }

    public virtual DbSet<TipoProducto> TipoProductos { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) { }
/* To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(local);Database=Ecommerce_Cafe;Integrated Security=true;Trust Server Certificate=true");*/

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Administrador>(entity =>
        {
            entity.HasKey(e => e.IdAdministrador).HasName("PK__Administ__9EC0BA901ED4B1EB");

            entity.ToTable("Administrador");

            entity.Property(e => e.IdAdministrador).HasColumnName("id_Administrador");
            entity.Property(e => e.IdPersona).HasColumnName("id_Persona");

            entity.HasOne(d => d.IdPersonaNavigation).WithMany(p => p.Administradors)
                .HasForeignKey(d => d.IdPersona)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Administr__id_Pe__398D8EEE");
        });

        modelBuilder.Entity<Carrito>(entity =>
        {
            entity.HasKey(e => e.IdCarrito).HasName("PK__Carrito__A2759B5BE350BDE5");

            entity.ToTable("Carrito");

            entity.Property(e => e.IdCarrito).HasColumnName("id_Carrito");
            entity.Property(e => e.IdProducto).HasColumnName("id_Producto");
            entity.Property(e => e.IdUsuario).HasColumnName("id_Usuario");

            entity.HasOne(d => d.IdProductoNavigation).WithMany(p => p.Carritos)
                .HasForeignKey(d => d.IdProducto)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Carrito__id_Prod__44FF419A");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.Carritos)
                .HasForeignKey(d => d.IdUsuario)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Carrito__id_Usua__440B1D61");
        });

        modelBuilder.Entity<Favorito>(entity =>
        {
            entity.HasKey(e => e.IdFavorito).HasName("PK__Favorito__2369F55ADF077BFD");

            entity.ToTable("Favorito");

            entity.Property(e => e.IdFavorito).HasColumnName("id_Favorito");
            entity.Property(e => e.IdProducto).HasColumnName("id_Producto");
            entity.Property(e => e.IdUsuario).HasColumnName("id_Usuario");

            entity.HasOne(d => d.IdProductoNavigation).WithMany(p => p.Favoritos)
                .HasForeignKey(d => d.IdProducto)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Favorito__id_Pro__48CFD27E");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.Favoritos)
                .HasForeignKey(d => d.IdUsuario)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Favorito__id_Usu__47DBAE45");
        });

        modelBuilder.Entity<Historial>(entity =>
        {
            entity.HasKey(e => e.IdHistorial).HasName("PK__Historia__51E84F64DDFC2029");

            entity.ToTable("Historial");

            entity.Property(e => e.IdHistorial).HasColumnName("id_Historial");
            entity.Property(e => e.IdMetodoPago).HasColumnName("id_MetodoPago");
            entity.Property(e => e.IdProducto).HasColumnName("id_Producto");
            entity.Property(e => e.IdUsuario).HasColumnName("id_Usuario");
            entity.Property(e => e.Total).HasColumnType("decimal(18, 0)");

            entity.HasOne(d => d.IdMetodoPagoNavigation).WithMany(p => p.Historials)
                .HasForeignKey(d => d.IdMetodoPago)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Historial__id_Me__4D94879B");

            entity.HasOne(d => d.IdProductoNavigation).WithMany(p => p.Historials)
                .HasForeignKey(d => d.IdProducto)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Historial__id_Pr__4F7CD00D");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.Historials)
                .HasForeignKey(d => d.IdUsuario)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Historial__id_Us__4E88ABD4");
        });

        modelBuilder.Entity<MetodoPago>(entity =>
        {
            entity.HasKey(e => e.IdMetodoPago).HasName("PK__MetodoPa__1D3E342887211DCA");

            entity.ToTable("MetodoPago");

            entity.Property(e => e.IdMetodoPago).HasColumnName("id_MetodoPago");
            entity.Property(e => e.Nombre)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Persona>(entity =>
        {
            entity.HasKey(e => e.IdPersona).HasName("PK__Persona__214BF5271D3A2E9F");

            entity.ToTable("Persona");

            entity.Property(e => e.IdPersona).HasColumnName("id_Persona");
            entity.Property(e => e.Apellido)
                .HasMaxLength(60)
                .IsUnicode(false);
            entity.Property(e => e.Contraseña)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.Correo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Nombre)
                .HasMaxLength(60)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Producto>(entity =>
        {
            entity.HasKey(e => e.IdProducto).HasName("PK__Producto__DB05CEDB823D58DE");

            entity.ToTable("Producto");

            entity.Property(e => e.IdProducto).HasColumnName("id_Producto");
            entity.Property(e => e.Descripcion).IsUnicode(false);
            entity.Property(e => e.IdTipoProducto).HasColumnName("id_TipoProducto");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Precio).HasColumnType("decimal(18, 0)");

            entity.HasOne(d => d.IdTipoProductoNavigation).WithMany(p => p.Productos)
                .HasForeignKey(d => d.IdTipoProducto)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Producto__id_Tip__412EB0B6");
        });

        modelBuilder.Entity<TipoProducto>(entity =>
        {
            entity.HasKey(e => e.IdTipoProducto).HasName("PK__Tipo_Pro__A36786B4ABCB13FC");

            entity.ToTable("Tipo_Producto");

            entity.Property(e => e.IdTipoProducto).HasColumnName("id_TipoProducto");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.IdUsuario).HasName("PK__Usuario__8E901EAA6F9D5EF0");

            entity.ToTable("Usuario");

            entity.Property(e => e.IdUsuario).HasColumnName("id_Usuario");
            entity.Property(e => e.IdPersona).HasColumnName("id_Persona");
            entity.Property(e => e.Numero)
                .HasMaxLength(10)
                .IsUnicode(false);

            entity.HasOne(d => d.IdPersonaNavigation).WithMany(p => p.Usuarios)
                .HasForeignKey(d => d.IdPersona)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Usuario__id_Pers__3C69FB99");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
