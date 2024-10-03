import React, { useState, useEffect } from "react";
import AdminTable from '../organisms/AdminTable';
import { GetAdminDatos } from "../../services/administradorService";
import ComplementTable from "../organisms/ComplementTable";

const AdminPanel = ({}) => {
    // Estado para almacenar los datos de las celdas
    const [cedls, setCedls] = useState([]);

    useEffect(() => {
        // Función para obtener los datos asíncronamente
        const fetchAdminDatos = async () => {
            const data = await GetAdminDatos(); // Esperar a que la promesa se resuelva
            setCedls(data); // Guardar los datos en el estado
        };

        fetchAdminDatos(); // Llamar a la función al montar el componente
    }, []);

    // Función para quitar un administrador de la lista
    const handleDeleteAdmin = (id) => {
        setCedls(prevCedls => prevCedls.filter(admin => admin.idAdministrador !== id));
    };

    let colums = ['ID', 'Nombre', 'Apellido', 'Correo', 'Opciones'];

    return (
        <div>
            <ComplementTable button="Agregar administrador"/>
            <AdminTable celdas={cedls} encabezados={colums} onDeleteAdmin={handleDeleteAdmin} />
        </div>
    );
};

export default AdminPanel;
