import React, { useState }  from "react";
import Swal from "sweetalert2";
import InputField from '../../atoms/InputField';
import Button from '../../atoms/Button';
import { EditOldTipos } from "../../../services/tiposService";

const EditTipo =({onSuccess, data}) =>{
    const [tipoData, setTipoData] = useState({
      idTipoProducto: data.idTipoProducto,
        nombre: data.nombre
    });

    const handleInputChange = (e) =>{
        const {name, value} = e.target;
        setTipoData((prevData) => ({
            ...prevData,
            [name]:value,
        }));
    }

    const handleSubmit = async () =>{
        const result = await Swal.fire({
           title: "¿Editar tipo de producto?",
           text: "¿Estás seguro de que deseas editar este tipo de producto?",
           icon: "warning",
           showCancelButton:true,
           confirmButtonText:"Editar",
           cancelButtonText: "Cancelar", 
        });

        if(result.isConfirmed){
            try{
                const response = await EditOldTipos(tipoData);
  
        if (response.ok) {
          Swal.fire({
            title: "Editado",
            text: "El tipo de producto ha sido editado con éxito.",
            icon: "success",
          });
  
          // Aquí llamas a la función de éxito
          onSuccess();
          
          // Recargar la vista
          window.location.reload(); // Esto refresca la página
        } else {
          Swal.fire({
            title: "Error",
            text: `Hubo un problema al editar el tipo de producto: ${response.statusText}`,
            icon: "error",
          });
        }
            }catch(error){
                Swal.fire({
                    title: "Error",
                    text:`Hubo un problema al editar el tipo del producto: ${error.message}`,
                    icon:"error",
                });
            }
        }

    }

    return(
        <div>
      <h2>Editar tipo de producto</h2>
      <form>
        <InputField
          type="hidden"
          value={tipoData.idTipoProducto}
          onChange={handleInputChange}
          placeholder="ID Tipo Producto"
          name="idTipoProducto"
          required={true}
        />
        <InputField
          type="text"
          value={tipoData.nombre}
          onChange={handleInputChange}
          placeholder="Nombre"
          name="nombre"
          required
        />

        
        <Button text="Guardar" className="button-confirm" onClick={handleSubmit} />
      </form>
    </div>
    );
};

export default EditTipo;