import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Avatar, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import VentanaModal from "../molecules/VentanaModal"; // Importa la molécula
import { logoutUser } from "../../services/authService";

const Header = ({ src, adminName, userData }) => {
  const [openModal, setOpenModal] = useState(false); // Estado para controlar la ventana modal

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Panel de Administración
          </Typography>

          <Box display="flex" alignItems="center">
            <Typography variant="body1" sx={{ mr: 2 }}>
              {adminName}
            </Typography>
            {/* Abre la ventana modal al hacer clic en la imagen del usuario */}
            <Avatar
              alt="Admin Image"
              src={src}
              sx={{ width: 56, height: 56, cursor: "pointer" }}
              onClick={handleOpenModal}
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Ventana Modal */}
      <VentanaModal open={openModal} onClose={handleCloseModal} userData={userData} />
    </>
  );
};

export default Header;