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
  let colorIcon = "#F2D9C2";
  let colorText = '#F2F7E7';
  const menuItems = [
    { text: 'Home', icon: <HomeIcon htmlColor={colorIcon}/>, path: '/home' },
    { text: 'Administradores', icon: <AdminPanelSettingsIcon htmlColor={colorIcon} />, path: '/admin' },
    { text: 'Usuarios', icon: <PersonIcon htmlColor={colorIcon}/>, path: '/usuarios' },
    { text: 'Productos', icon: <CoffeeIcon htmlColor={colorIcon}/>, path: '/producto' },
    { text: 'Tipos de producto', icon: <CoffeeMakerIcon htmlColor={colorIcon}/>, path: '/tipos' },
    { text: 'Historial de ventas', icon: <SellIcon htmlColor={colorIcon}/>, path: '/historial' },
    { text: 'Métodos de pago', icon: <StyleIcon htmlColor={colorIcon}/>, path: '/metodos' },
  ];

  return (
    <List>
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem button onClick={() => navigate(item.path)}>
            {item.icon}
            <Collapse in={isDrawerOpen} timeout="auto" unmountOnExit>
              <ListItemText primary={item.text} sx={{ color: colorText }}/>
            </Collapse>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default NavItemList;
