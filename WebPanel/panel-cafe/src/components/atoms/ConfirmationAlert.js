import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../styles/buttons.sass';

const ConfirmationModal = ({ title, text, confirmText, cancelText, onConfirm, onCancel }) => {
  const swalWithBootstrapButtons = withReactContent(Swal.mixin({
    customClass: {
      confirmButton: 'button-confirm',
      cancelButton: 'button-cancel'
    },
    buttonsStyling: false
  }));

  useEffect(() => {
    const swalInstance = swalWithBootstrapButtons.fire({
      title: title || '¿Estás seguro?',
      text: text || "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: confirmText || 'Sí, eliminar!',
      cancelButtonText: cancelText || 'No, cancelar',
      reverseButtons: true,
      allowOutsideClick: false, // Evita que se cierre al hacer clic fuera del modal
      allowEscapeKey: true // Permite cerrar con la tecla ESC
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: 'Confirmado!',
          text: 'Proceso finalizado.',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
        if (onConfirm) {
          onConfirm(); // Llama a la función pasada como prop si se confirma
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: 'Cancelado',
          text: 'Proceso cancelado.',
          icon: 'error'
        });
        if (onCancel) {
          onCancel(); // Llama a la función pasada como prop si se cancela
        }
      }
    });

    return () => {
      // Asegura que se cierra el modal al desmontar el componente
      //swalInstance.close();
    };
  }, [title, text, confirmText, cancelText, onConfirm, onCancel]); // Dependencias necesarias

  return null; // No renderizamos nada, ya que SweetAlert maneja la UI
};

export default ConfirmationModal;
