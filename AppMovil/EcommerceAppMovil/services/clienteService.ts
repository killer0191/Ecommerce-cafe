import { api } from "../config/apiConfig";

export const GetCarritoDeUser = async(id: number)=>{
    try{
        let response = await api.get(`/Carrito/ObtenerCarritoDeUsuario/${id}`);
        return response.data;
    }catch(error: any){
        console.error(error);
        throw error;
    }
}

/*Consumos del carrito*/
export const AgregarProductoCarrito = async(data:any)=>{
    try{
        let response = await api.post("/Carrito/AgregarCarrito", data);
        return response.data;
    }catch(error:any){
        console.error(error);
        throw error;
    }
}
export const EliminarCarrito = async(id:number)=>{
    try{
        let response = await api.delete(`/Carrito/EliminarCarrito?id=${id}`);
        return response.data;
    }catch(error:any){
        console.error(error);
        throw error;
    }
}
export const ActualizarCarrito = async(data:any)=>{
    try{
        let response = await api.put("/Carrito/ActualizarCarrito");   
    }catch(error:any){
        console.error(error);
        throw error;
    }
}
export const ComprarCarrito = async(data:any)=>{
    try{
        let response = await api.post("/Carrito/ComprarAllCarrito", data);
    }catch(error:any){
        console.error(error);
        throw error;
    }
}

/*Consumos de los favortos*/
export const GetFavsUser = async(id:number)=>{
    try{
        let response = await api.get(`/Favorito/ObtenerFavoritosDeUsuario?id=${id}`);
        return response.data;
    }catch(error:any){
        console.error(error);
        throw error;
    }
}
export const EliminarFavs = async(id:number)=>{
    try{
     let response = await api.delete(`/Favorito/EliminarFavorito?id=${id}`);   
     return response.data;
    }catch(error:any){
        console.error(error);
        throw error;
    }
}
export const AgregarFav = async(data:any)=>{
    try{
        let response = await api.post("/Favorito/AgregarFavorito",data);
        return response.data;
    }catch(error:any){
        console.error(error);
        throw error;
    }
}

/*Consumos de los productos*/
const GetProducts = async()=>{
    try{
        let response = await api.get("/Producto/ObtenerProductos");
        return response.data;
    }catch(error:any){
        console.error(error);
        throw error;
    }
}

export const GetProductsByTipoProducto = async(id:number)=>{
    try{
        let productos = await GetProducts();
        let response: any[] = [];
        productos.map((producto: any) => {
            if (producto.idTipoProducto === id) {
                response.push(producto);
            }
        });
        
        return response;
    }catch(error:any){
        console.error(error);
        throw error;
    }
}