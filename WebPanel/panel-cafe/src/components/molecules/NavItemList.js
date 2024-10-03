import React from 'react';
import { List, ListItem, ListItemText, Collapse, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Si usas react-router para la navegación
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const NavItemList = ({ isDrawerOpen }) => {
  const navigate = useNavigate(); // Para navegar entre las páginas

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/home' },
    { text: 'Administradores', icon: <AdminPanelSettingsIcon />, path: '/admin' },
    { text: 'Usuarios', icon: <AdminPanelSettingsIcon />, path: '/usuarios' },
    { text: 'Productos', icon: <AdminPanelSettingsIcon />, path: '/producto' },
    { text: 'Tipos de producto', icon: <AdminPanelSettingsIcon />, path: '/tipos' },
    { text: 'Historial de compra', icon: <AdminPanelSettingsIcon />, path: '/historial' },
    { text: 'Métodos de pago', icon: <AdminPanelSettingsIcon />, path: '/metodos' },
  ];

  return (
    <List>
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem button onClick={() => navigate(item.path)}>
            {item.icon}
            <Collapse in={isDrawerOpen} timeout="auto" unmountOnExit>
              <ListItemText primary={item.text} />
            </Collapse>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default NavItemList;
