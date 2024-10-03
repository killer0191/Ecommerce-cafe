import React from 'react';
import NavBar from '../organisms/NavBar';
import Header from '../organisms/Header';
import getDataCookie from '../../services/cookieService';
import { Box } from '@mui/material';

const AdminTemplate = ({ children }) => {
  const json = getDataCookie();
  const name = json?.nombre || 'Admin'; // Nombre por defecto si no hay cookie

  return (
    <Box sx={{ display: 'flex' }}>
      {/* NavBar fijo en la parte izquierda */}
      <NavBar />

      <Box sx={{ flexGrow: 1 }}>
        {/* Header en la parte superior */}
        <Header src="url_de_la_imagen.jpg" adminName={name} />

        {/* Contenido dinámico de cada página */}
        <Box sx={{ padding: '16px' }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminTemplate;
