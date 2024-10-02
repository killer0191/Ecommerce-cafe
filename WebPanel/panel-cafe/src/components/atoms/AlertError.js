import Swal from "sweetalert2";
import { useEffect } from "react";

const AlertError = ({ label, onClose }) => { // Añadimos onClose como prop para manejar el cierre
  useEffect(() => {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: label,
        timer: 1500
      }).then(() => {
      if (onClose) {
        onClose(); // Ejecutamos onClose cuando la alerta se cierra
      }
    });
  }, [label, onClose]); // Agregamos onClose como dependencia

  return null;
};

export default AlertError;
