import React from "react";
import AdminTemplate from '../templates/AdminTemplate';
import TiposPanel from "../templates/TiposPanel";

const MetodoPage = () => {
    return (
        <AdminTemplate>
        <div>
            {/* Contenido de la página Usuarios */}
            <TiposPanel />
        </div>
    </AdminTemplate>
    );
};

export default MetodoPage;