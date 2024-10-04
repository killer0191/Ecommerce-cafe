import React from "react";
import AdminTemplate from '../templates/AdminTemplate';
import HistorialPanel from "../templates/HistorialPanel";

const AdminPage = () => {
    return (
        <AdminTemplate>
            <div>
                {/* Contenido de la página Administrador */}
                <HistorialPanel />
            </div>
        </AdminTemplate>
    );
};

export default AdminPage;