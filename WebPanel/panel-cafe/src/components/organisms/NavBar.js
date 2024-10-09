import React from 'react';
import { Drawer, Box } from '@mui/material';
import NavItemList from '../molecules/NavItemList';

const drawerWidth = 240;

const NavBar = ({ isDrawerOpen }) => {
  return (
    <Drawer
      variant="persistent"
      open={isDrawerOpen}
      anchor="left"
      sx={{
        width: isDrawerOpen ? drawerWidth : 60, // Cambia el ancho si está abierto o cerrado
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: isDrawerOpen ? drawerWidth : 60,
          marginTop: '55px',  // Posición debajo del Header fijo
          transition: 'width 0.3s ease',
          backgroundColor: '#231708',
          position: 'fixed', // Fijo en la pantalla
        },
      }}
    >
      <NavItemList isDrawerOpen={isDrawerOpen} />
    </Drawer>
  );
};

export default NavBar;
