import React, { useState } from "react";
import ReactDOM from 'react-dom/client'; // Correcto para React 18+
import OptionTable from "../atoms/OptionTable";
import ConfirmationModal from '../atoms/ConfirmationAlert';
import Swal from 'sweetalert2'; // Importar SweetAlert2
import EditMetodo from "./Modales/EditMetod";
import EditTipo from "./Modales/EditTipo";
import EditProduct from "./Modales/EditProduct";
import { DeleteAdmin } from '../../services/administradorService';
import { DeleteUser } from "../../services/usuarioService";
import { DeleteMetodo } from "../../services/metodoService";
import { DeleteTipos } from "../../services/tiposService";
import { DeleteProduct } from "../../services/prodcutoService";
import '../../styles/buttons.sass';


const OptionsTable = ({ id, onDelete, type="Admin", registro, label="Eliminar" }) => {
  let auxClass = "button";
  let auxType = false;
  if(label === "Eliminar"){
    auxClass = "button-delete";
  }else if(label === "Editar"){
    auxClass = "button-cancel";
  }

  const [showConfirmation, setShowConfirmation] = useState(false);

  // Función que se ejecuta al confirmar la eliminación
  const handleDelete = async () => {
    try {
      let response;
      if(type === "Admin"){
        response = await DeleteAdmin({ id });
      } else if(type === "User"){
        response = await DeleteUser({ id });
      } else if(type === "Metod"){
        response = await DeleteMetodo({ id });
      } else if(type === "Tipos"){
        response = await DeleteTipos({ id });
      } else if(type === "Products"){
        response = await DeleteProduct({ id });
      }
      if (response.ok) {
        console.log("Registro eliminado con éxito.");
        onDelete(id); // Llama la función para quitar el registro de la lista
      } else {
        console.error("Error al eliminar el registro.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Función para abrir el modal de edición como ventana emergente
  // Función para abrir el modal de edición como ventana emergente
const handleEditModal = () => {
  Swal.fire({
    title: `Editar`,
    html: `<div id="edit-metodo-container"></div>`, // Aquí se inyectará el contenido de React
    showConfirmButton: false, // No mostramos los botones de SweetAlert
    showCancelButton: true, // Mostramos el botón de cancelar
    cancelButtonText: 'Cerrar',
    willOpen: () => {
      const container = Swal.getHtmlContainer().querySelector('#edit-metodo-container');
      
      if (container) {
        
        const root = ReactDOM.createRoot(container); // Crear un root en React 18
       if(type==="EditMetod"){
        auxType = true;
        root.render(
          <EditMetodo metodo={registro} onSuccess={() => Swal.close()} />
        );
       }else if(type==="EditTipo"){
        root.render(
          <EditTipo data={registro} onSuccess={() => Swal.close()} />
        );
       }
       else if(type==="EditProduct"){
        root.render(
          <EditProduct product={registro} onSuccess={() => Swal.close()} />
        );
       }
      }
    },
    willClose: () => {
      const container = Swal.getHtmlContainer().querySelector('#edit-metodo-container');
      
      if (container) {
        const root = ReactDOM.createRoot(container);
        root.unmount(); // Desmontar el componente al cerrar el modal
      }
    }
  });
};

  return (
    <td>
      <ul>
        {/* Botón para editar o eliminar */}
        <OptionTable
          label={label}
          action={() => type === "EditMetod" || "EditTipo" || "EditProduct" ? handleEditModal() : setShowConfirmation(true)} // Abre el modal de edición o el de confirmación
          className={auxClass}
        />
      </ul>

      {/* Mostrar el modal de confirmación solo si no es de tipo edición */}
      {
        showConfirmation && (
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
        )
      }
    </td>
  );
};

export default OptionsTable;
