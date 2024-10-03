import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Avatar, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ src, adminName }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        
        {/* Nombre de la aplicación o panel de administración */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Panel de Administración
        </Typography>

        {/* Imagen y nombre del administrador */}
        <Box display="flex" alignItems="center">
          <Typography variant="body1" sx={{ mr: 2 }}>
            {adminName}
          </Typography>
          <Avatar alt="Admin Image" src={src} sx={{ width: 56, height: 56 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
