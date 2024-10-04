import React from "react";
import AdminTemplate from '../templates/AdminTemplate';
import UserPanel from "../templates/UserPanel";

const UserPage = () => {
    return (
        <AdminTemplate>
        <div>
            {/* Contenido de la página Usuarios */}
            <UserPanel />
        </div>
    </AdminTemplate>
    );
};

export default UserPage;