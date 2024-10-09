import React from 'react';
import AdminTemplate from '../templates/AdminTemplate';

const HomePage = () => {
  let colorBack = '#3B2808';
  return (
    <AdminTemplate>
      <div>
        {/* Contenido de la página Home */}
        Bienvenido a la página de inicio.
      </div>
    </AdminTemplate>
  );
};

export default HomePage;
