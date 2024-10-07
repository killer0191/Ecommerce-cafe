import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Avatar, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'; // Ícono para maximizar
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'; // Ícono para minimizar

const Header = ({ src, adminName, isDrawerOpen, toggleDrawer }) => {
  return (
    <AppBar 
      position="fixed"  // Mantén el Header fijo
      sx={{ backgroundColor: '#1976d2', zIndex: 1201 }}  // ZIndex más alto para estar sobre el Drawer
    >
      <Toolbar>
        {/* Botón de minimizar/maximizar el menú */}
        <IconButton
          onClick={toggleDrawer}
          edge="start"
          sx={{ color: '#fff', marginRight: '16px' }}
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
          <Avatar alt={adminName} src={src} sx={{ width: 56, height: 56, cursor: "pointer" }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
