import React, { useState } from 'react';
import { Drawer, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NavItemList from '../molecules/NavItemList'; // Importa la molécula

const drawerWidth = 240; // Ancho del Drawer cuando está abierto

const NavBar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(true); // Controla si el menú está abierto o minimizado

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      {/* Contenedor del botón con el mismo color de fondo que el Drawer */}
      <Box 
        sx={{
          backgroundColor: '#1976d2', // Aplica el mismo color que el Drawer
          height: '64px', // Ajusta la altura del contenedor al mismo que el Header
          display: 'flex', // Alinea el contenido horizontalmente
          alignItems: 'center', // Centra el IconButton verticalmente
          position: 'relative',
          zIndex: 1300,
        }}
      >
        {/* Icono para abrir/cerrar el Drawer */}
        <IconButton
          onClick={toggleDrawer}
          edge="start"
          sx={{
            margin: '10px',
            position: 'relative',
            left: isDrawerOpen ? `${drawerWidth - 50}px` : '0px',
            color: '#fff', // Asegúrate de que el ícono sea visible
          }}
        >
          {isDrawerOpen ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </Box>

      {/* Drawer que será el menú lateral */}
      <Drawer
        variant="persistent"
        open={isDrawerOpen}
        anchor="left"
        sx={{
          width: isDrawerOpen ? drawerWidth : 60, // Ajusta el ancho cuando está minimizado
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: isDrawerOpen ? drawerWidth : 60,
            marginTop: '64px', // Desplaza el Drawer debajo del Header
            transition: 'width 0.3s ease',
            backgroundColor: '#1976d2', // Aplica el mismo color del Header
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // Aplica el sombreado
          },
        }}
      >
        {/* Usa la molécula para las opciones del menú */}
        <NavItemList isDrawerOpen={isDrawerOpen} />
      </Drawer>
    </div>
  );
};

export default NavBar;
