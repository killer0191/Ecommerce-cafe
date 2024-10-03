import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ConfirmationModal = ({ title, text, confirmText, cancelText, onConfirm, onCancel }) => {
  const swalWithBootstrapButtons = withReactContent(Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  }));

  useEffect(() => {
    swalWithBootstrapButtons.fire({
      title: title || 'Are you sure?',
      text: text || "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: confirmText || 'Yes, delete it!',
      cancelButtonText: cancelText || 'No, cancel!',
      reverseButtons: true
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
  }, []); // Ejecuta el SweetAlert al montar el componente

  return null; // No renderizamos nada, ya que SweetAlert maneja la UI
};

export default ConfirmationModal;
