import React, { useState } from 'react';
import NavBar from '../organisms/NavBar';
import Header from '../organisms/Header';
import { Box } from '@mui/material';

const AdminTemplate = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(true); // Estado para controlar el menú

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen); // Cambia el estado del Drawer
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* NavBar fijo en la parte izquierda */}
      <NavBar isDrawerOpen={isDrawerOpen} />

      <Box sx={{ flexGrow: 1, paddingTop: '64px' }}> {/* Deja espacio para el Header fijo */}
        {/* Header fijo en la parte superior con el botón de abrir/cerrar el menú */}
        <Header 
          src="url_de_la_imagen.jpg" 
          adminName="Admin" 
          isDrawerOpen={isDrawerOpen} 
          toggleDrawer={toggleDrawer} 
        />

        {/* Contenido dinámico de cada página */}
        <Box sx={{ padding: '16px' }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminTemplate;
