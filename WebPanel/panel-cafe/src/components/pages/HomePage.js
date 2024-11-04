import React from 'react';
import AdminTemplate from '../templates/AdminTemplate';
import LogoHome from '../atoms/logoHome';

const HomePage = () => {
  let colorBack = '#3B2808';
  return (
    <AdminTemplate>
      <div>
        {/* Contenido de la página Home */}
        <LogoHome img={"logo_cafe.png"}></LogoHome>
      </div>
    </AdminTemplate>
  );
};

export default HomePage;
