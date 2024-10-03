import React from "react";
import SearchForm from "../molecules/SearchForm";
import Button from "../atoms/Button";
import InsertAdmin from "../molecules/Modales/InsertAdmin"; // Importamos el componente del modal
import Swal from 'sweetalert2';

const ComplementTable = ({ text, button }) => {

  // Función para mostrar el modal de inserción de administrador
  const openInsertAdminModal = () => {
    Swal.fire({
      html: '<div id="insert-admin-modal"></div>', // Usamos un contenedor div para React
      showConfirmButton: false, // Ocultamos los botones de confirmación de SweetAlert
      width: '600px', // Ajusta el ancho si es necesario
      didOpen: () => {
        const modalElement = document.getElementById('insert-admin-modal');
        // Renderizamos el componente React dentro del modal
        if (modalElement) {
          import('react-dom').then(({ createRoot }) => {
            const root = createRoot(modalElement);
            root.render(<InsertAdmin onSuccess={() => Swal.close()} />);
          });
        }
      }
    });
  };

  return (
    <div>
      <SearchForm text={text} />
      <Button text={button} onClick={openInsertAdminModal} disabled={false} />
    </div>
  );
};

export default ComplementTable;
