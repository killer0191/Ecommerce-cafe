using Microsoft.EntityFrameworkCore;
using Ecommerce_Cafe.DATA.DataContext;
using Ecommerce_Cafe.DATA.Repositories;
using Ecommerce_Cafe.DATA.Interfaces;
using Ecommercer_Cafe.Entitys;
using Microsoft.OpenApi.Models;
using Ecommerce_Cafe.Business.Services; // Asegúrate de tener esta directiva using

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<EcommerceCafeContext>(optiones =>
{
    optiones.UseSqlServer(builder.Configuration.GetConnectionString("cadenaSQL"));
});

builder.Services.AddScoped<IGlobalRepository<Administrador>, AdministradorRepository>();
builder.Services.AddScoped<AdministradorService>();

builder.Services.AddScoped<IGlobalRepository<Carrito>, CarritoRepository>();
builder.Services.AddScoped<CarritoService>();

builder.Services.AddScoped<IGlobalRepository<Favorito>, FavoritoRepository>();
builder.Services.AddScoped<FavoritoService>();

builder.Services.AddScoped<IGlobalRepository<Historial>, HistorialRepository>();
builder.Services.AddScoped<HistorialService>();

builder.Services.AddScoped<IGlobalRepository<MetodoPago>, MetodoPagoRepository>();
builder.Services.AddScoped<MetodoPagoService>();

builder.Services.AddScoped<PersonaRepository>();
builder.Services.AddScoped<PersonaService>();

builder.Services.AddScoped<IGlobalRepository<Producto>, ProductoRepository>();
builder.Services.AddScoped<ProductoService>();

builder.Services.AddScoped<IGlobalRepository<TipoProducto>, TipoProductoRepository>();
builder.Services.AddScoped<TipoProductoService>();

builder.Services.AddScoped<IGlobalRepository<Usuario>, UsuarioRepository>();
builder.Services.AddScoped<UsuarioService>();


// Configuración de Swagger
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please enter JWT with Bearer into field",
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            Array.Empty<string>()
        }
    });
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
    });
}
app.UseCors("AllowAll");
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
