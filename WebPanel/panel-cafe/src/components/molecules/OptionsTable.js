import React, { useState } from "react";
import OptionTable from "../atoms/OptionTable";
import ConfirmationModal from '../atoms/ConfirmationAlert';
import { DeleteAdmin } from '../../services/administradorService';
import { DeleteUser } from "../../services/usuarioService";
import { DeleteMetodo } from "../../services/metodoService";
import { DeleteTipos } from "../../services/tiposService";
import { DeleteProduct } from "../../services/prodcutoService";
import '../../styles/buttons.sass';

const OptionsTable = ({ id, onDelete, type="Admin" }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Función que se ejecuta al confirmar la eliminación
  const handleDelete = async () => {
    try {
      let response;
      if(type==="Admin"){
        response = await DeleteAdmin({ id });
      }else if(type==="User"){
        response = await DeleteUser({ id });
      }else if(type==="Metod"){
        response = await DeleteMetodo({id});
      }else if(type==="Tipos"){
        response = await DeleteTipos({id});
      }else if(type==="Products"){
        response = await DeleteProduct({id});
      }
      if (response.ok) {
        console.log("registro eliminado con éxito.");
        onDelete(id); // Llama la función para quitar el admin de la lista
      } else {
        console.error("Error al eliminar el registro.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <td>
      <ul>
        {/* Botón que activa la ventana de confirmación */}
        <OptionTable
          label="Eliminar"
          action={() => setShowConfirmation(true)}
          className="button-delete"
        />
      </ul>

      {/* Mostrar la ventana de confirmación */}
      {showConfirmation && (
        <ConfirmationModal
          title="¿Estás seguro de que quieres eliminar este registro?"
          text="Esta acción no se puede deshacer."
          confirmText="Eliminar"
          cancelText="Cancelar"
          onConfirm={() => {
            handleDelete(); // Llama a la función de eliminación
            setShowConfirmation(false); // Cierra el modal
          }}
          onCancel={() => setShowConfirmation(false)} // Cierra el modal si se cancela
        />
      )}
    </td>
  );
};

export default OptionsTable;
