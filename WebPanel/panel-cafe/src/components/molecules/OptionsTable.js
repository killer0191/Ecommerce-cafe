import React, { useState } from "react";
import OptionTable from "../atoms/OptionTable";
import ConfirmationModal from '../atoms/ConfirmationAlert';
import { DeleteAdmin } from '../../services/administradorService';

const OptionsTable = ({ id, onDelete }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Función que se ejecuta al confirmar la eliminación
  const handleDelete = async () => {
    try {
      const response = await DeleteAdmin({ id });
      if (response.ok) {
        console.log("Administrador eliminado con éxito.");
        onDelete(id); // Llama la función para quitar el admin de la lista
      } else {
        console.error("Error al eliminar el administrador.");
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
        />
      </ul>

      {/* Mostrar la ventana de confirmación */}
      {showConfirmation && (
        <ConfirmationModal
          title="¿Estás seguro de que quieres eliminar este administrador?"
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
