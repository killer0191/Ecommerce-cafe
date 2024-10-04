import React from "react";
import AdminTemplate from '../templates/AdminTemplate';
import MetodoPanel from "../templates/MetodoPanel";
//import UserPanel from "../templates/UserPanel";

const MetodoPage = () => {
    return (
        <AdminTemplate>
        <div>
            {/* Contenido de la página Usuarios */}
            <MetodoPanel />
        </div>
    </AdminTemplate>
    );
};

export default MetodoPage;