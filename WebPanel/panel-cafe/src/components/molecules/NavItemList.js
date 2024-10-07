import React from 'react';
import { List, ListItem, ListItemText, Collapse, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Si usas react-router para la navegación
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import CoffeeIcon from '@mui/icons-material/Coffee';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import SellIcon from '@mui/icons-material/Sell';
import StyleIcon from '@mui/icons-material/Style';

const NavItemList = ({ isDrawerOpen }) => {
  const navigate = useNavigate(); // Para navegar entre las páginas

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/home' },
    { text: 'Administradores', icon: <AdminPanelSettingsIcon />, path: '/admin' },
    { text: 'Usuarios', icon: <PersonIcon />, path: '/usuarios' },
    { text: 'Productos', icon: <CoffeeIcon />, path: '/producto' },
    { text: 'Tipos de producto', icon: <CoffeeMakerIcon />, path: '/tipos' },
    { text: 'Historial de ventas', icon: <SellIcon />, path: '/historial' },
    { text: 'Métodos de pago', icon: <StyleIcon />, path: '/metodos' },
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
