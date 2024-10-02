import Swal from "sweetalert2";
import { useEffect } from "react";

const AlertOK = ({ label, onClose }) => { // Añadimos onClose como prop para manejar el cierre
  useEffect(() => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: label,
      showConfirmButton: false,
      timer: 1500,
      backdrop: false,
      timerProgressBar: false, 
    }).then(() => {
      if (onClose) {
        onClose(); // Ejecutamos onClose cuando la alerta se cierra
      }
    });
  }, [label, onClose]); // Agregamos onClose como dependencia

  return null;
};

export default AlertOK;
