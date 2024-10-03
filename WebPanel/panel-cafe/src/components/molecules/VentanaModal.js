import React, { useState } from "react";
import { Modal, Box, Typography, Avatar } from "@mui/material";
import Button from "../atoms/Button"; // Importa tu átomo 'button'
import ConfirmationModal from "../atoms/ConfirmationAlert"; // Importa el componente de confirmación
import { logoutUser } from "../../services/authService"; // Importa la función de cerrar sesión

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const VentanaModal = ({ open, onClose, userData }) => {
  const [showConfirmation, setShowConfirmation] = useState(false); // Controla la ventana de confirmación

  const { nombre, apellido, correo, imagen } = userData;

  // Función que maneja el cierre de sesión
  const handleLogout = async () => {
    const success = await logoutUser();
    if (success) {
      onClose(); // Cierra el modal al confirmar el logout
      window.location.href = "/login"; // Redirige al login
    }
  };

  return (
    <>
      {/* Modal del usuario */}
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="user-modal-title"
        aria-describedby="user-modal-description"
      >
        <Box sx={style}>
          {/* Imagen del usuario */}
          <Avatar alt="User Image" src={imagen} sx={{ width: 80, height: 80, mb: 2 }} />

          {/* Nombre y Apellido */}
          <Typography id="user-modal-title" variant="h6" component="h2">
            {nombre} {apellido}
          </Typography>

          {/* Correo */}
          <Typography variant="body1" sx={{ mt: 1 }}>
            Correo: {correo}
          </Typography>

          {/* Botón de cerrar sesión */}
          <Box sx={{ mt: 3 }}>
  <Button 
    onClick={() => {
      setShowConfirmation(true); // Muestra la ventana de confirmación
      onClose(); // Cierra el modal principal al abrir la confirmación
    }} 
    text="Cerrar sesión" 
  />
</Box>

        </Box>
      </Modal>

      {/* Ventana de confirmación */}
      {showConfirmation && (
        <ConfirmationModal
          title="¿Estás seguro de que quieres cerrar sesión?"
          text="Esta acción te llevará de vuelta al login."
          confirmText="Cerrar sesión"
          cancelText="Cancelar"
          onConfirm={handleLogout} // Ejecuta el logout al confirmar
          onCancel={() => setShowConfirmation(false)} // Cierra la confirmación si se cancela
        />
      )}
    </>
  );
};

export default VentanaModal;
