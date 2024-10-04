import React, { useState, useEffect } from "react";
import { GetUserDatos } from "../../services/usuarioService";
import ComplementTable from "../organisms/ComplementTable";
import handleAddAdmin from '../molecules/Modales/InsertAdmin';
import UserTable from "../organisms/UserTable";

const UserPanel = () => {
    const [cedls, setCedls] = useState([]);
  
    const fetchAdminDatos = async () => { // Define esta función aquí
      const data = await GetUserDatos();
      setCedls(data);
    };
  
    useEffect(() => {
      fetchAdminDatos(); // Carga los datos al montar el componente
    }, []);
  
    const handleInsertSuccess = () => {
      fetchAdminDatos(); // Volver a obtener los datos actualizados
    };
  
    const handleDeleteAdmin = (id) => {
      setCedls(prevCedls => prevCedls.filter(admin => admin.idUsuario !== id));
    };
  
    let columns = ['ID', 'Nombre', 'Apellido', 'Correo', 'Numero', 'Opciones'];
  
    return (
      <div>
        <ComplementTable button="Agregar usuario" onAddAdmin={handleAddAdmin} visBut={false} />
        <UserTable celdas={cedls} encabezados={columns} onDeleteAdmin={handleDeleteAdmin} />
      </div>
    );
  };
  
export default UserPanel;
