import { api } from "../config/apiConfig";

export const GetTiposProductos= async()=>{
    try{
        const tipos = await api.get("TipoProducto/ObtenerTiposProductos");
        return tipos.data;
    }catch(error: any){
        console.error(error);
        throw error;
    }
}