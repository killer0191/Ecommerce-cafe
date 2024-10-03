import React from "react";
import AdminTemplate from '../templates/AdminTemplate';
import AdminPanel from '../templates/AdminPanel';

const AdminPage = () => {
    return (
        <AdminTemplate>
            <div>
                {/* Contenido de la página Administrador */}
                <AdminPanel/>
            </div>
        </AdminTemplate>
    );
};

export default AdminPage;