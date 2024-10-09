import Swal from "sweetalert2";
import { useEffect } from "react";
//
const AlertLoad = ({ label }) => {
  useEffect(() => {
    let timerInterval;

    // Llamamos a Swal cuando el componente se monta
    Swal.fire({
      title: "Espere un momento!",
      html: label, // Usamos el label directamente en la propiedad html
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          if (timer) {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });

    // Limpiamos el intervalo al desmontar el componente
    return () => clearInterval(timerInterval);
  }, [label]);

  return null; // El componente no devuelve ningún JSX visible
};

export default AlertLoad;
