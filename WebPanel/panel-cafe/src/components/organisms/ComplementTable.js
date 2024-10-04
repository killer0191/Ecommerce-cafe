import React from "react";
import SearchForm from "../molecules/SearchForm";
import Button from "../atoms/Button";
import InsertAdmin from "../molecules/Modales/InsertAdmin"; // Importamos el componente del modal InsertAdmin
import InsertMetodo from "../molecules/Modales/InsertMetod"; // Importamos el componente del modal InsertMetodo
import Swal from 'sweetalert2';
import '../../styles/buttons.sass';

const ComplementTable = ({ text, button, onAddAdmin, onAddMetodo, visBut = true, modalType = "admin" }) => { // Agregamos modalType como prop

  // Función para mostrar el modal de inserción
  const openInsertModal = () => {
    Swal.fire({
      html: '<div id="insert-modal"></div>', // Usamos un contenedor div para React
      showConfirmButton: false, // Ocultamos los botones de confirmación de SweetAlert
      width: '600px', // Ajusta el ancho si es necesario
      didOpen: () => {
        const modalElement = document.getElementById('insert-modal');
        // Renderizamos el componente React dentro del modal según el tipo
        if (modalElement) {
          import('react-dom').then(({ createRoot }) => {
            const root = createRoot(modalElement);

            if (modalType === "admin") {
              root.render(<InsertAdmin onSuccess={(newAdmin) => {
                onAddAdmin(newAdmin); // Llama a la función onAddAdmin
                Swal.close(); // Cierra el modal después de agregar el admin
              }} />);
            } else if (modalType === "metodo") {
              root.render(<InsertMetodo onSuccess={(newMetodo) => {
                onAddMetodo(newMetodo); // Llama a la función onAddMetodo
                Swal.close(); // Cierra el modal después de agregar el método
              }} />);
            }
          });
        }
      }
    });
  };

  return (
    <div>
      <SearchForm text={text} />
      <Button text={button} onClick={openInsertModal} disabled={false} className="button-insert" visual={visBut} />
    </div>
  );
};

export default ComplementTable;
