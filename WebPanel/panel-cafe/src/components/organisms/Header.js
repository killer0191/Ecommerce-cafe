import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Avatar, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'; // Ícono para maximizar
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'; // Ícono para minimizar
import VentanaModal from "../molecules/VentanaModal"; // Tu modal personalizado

const Header = ({ src, adminName, isDrawerOpen, toggleDrawer, userData }) => {
  // Estado para controlar si el modal está abierto o cerrado
  const [openModal, setOpenModal] = useState(false);
  let colorText = '#F2F7E7';
  // Funciones para abrir y cerrar el modal
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <AppBar 
        position="fixed"  // Mantén el Header fijo
        sx={{ backgroundColor: '#231708', zIndex: 1201 }}  // ZIndex más alto para estar sobre el Drawer
      >
        <Toolbar sx={{ color: colorText }}>
          {/* Botón de minimizar/maximizar el menú */}
          <IconButton
            onClick={toggleDrawer}
            edge="start"
            sx={{ color: '#F2D9C2', marginRight: '16px' }}
          >
            {isDrawerOpen ? <ChevronLeftIcon /> : <MenuIcon />} {/* Cambia el ícono */}
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Panel de Administración
          </Typography>

          <Box display="flex" alignItems="center">
            <Typography variant="body1" sx={{ mr: 2 }}>
              {adminName}
            </Typography>
            {/* Al hacer clic en el avatar, se abre el modal */}
            <Avatar 
              alt={adminName} 
              src={src} 
              sx={{ width: 56, height: 56, cursor: "pointer" }} 
              onClick={handleOpenModal} // Llamamos a la función para abrir el modal
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Componente VentanaModal */}
      <VentanaModal 
        open={openModal}           // Estado del modal (abierto o cerrado)
        onClose={handleCloseModal} // Función para cerrar el modal
        userData={userData}        // Pasamos la data del usuario al modal
      />
    </>
  );
};

export default Header;
