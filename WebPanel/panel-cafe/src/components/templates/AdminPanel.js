import React, { useState, useEffect } from "react";
import AdminTable from '../organisms/AdminTable';
import { GetAdminDatos } from "../../services/administradorService";
import InsertAdmin from "../molecules/Modales/InsertAdmin"; // Asegúrate de que la ruta sea correcta
import ComplementTable from "../organisms/ComplementTable";
import handleAddAdmin from '../molecules/Modales/InsertAdmin';

const AdminPanel = () => {
    const [cedls, setCedls] = useState([]);
  
    const fetchAdminDatos = async () => { // Define esta función aquí
      const data = await GetAdminDatos();
      setCedls(data);
    };
  
    useEffect(() => {
      fetchAdminDatos(); // Carga los datos al montar el componente
    }, []);
  
    const handleInsertSuccess = () => {
      fetchAdminDatos(); // Volver a obtener los datos actualizados
    };
  
    const handleDeleteAdmin = (id) => {
      setCedls(prevCedls => prevCedls.filter(admin => admin.idAdministrador !== id));
    };
  
    let columns = ['ID', 'Nombre', 'Apellido', 'Correo', 'Opciones'];
  
    return (
      <div>
        <ComplementTable button="Agregar administrador" onAddAdmin={handleAddAdmin} />
        <AdminTable celdas={cedls} encabezados={columns} onDeleteAdmin={handleDeleteAdmin} />
      </div>
    );
  };
  
export default AdminPanel;
