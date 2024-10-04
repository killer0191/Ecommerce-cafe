import React, { useState, useEffect } from "react";
import { GetMetodos } from "../../services/metodoService";
import ComplementTable from "../organisms/ComplementTable";
import handleAddAdmin from '../molecules/Modales/InsertAdmin';
import MetodoTable from "../organisms/MetodoTable";

const MetodoPanel = () => {
    const [cedls, setCedls] = useState([]);
  
    const fetchAdminDatos = async () => { // Define esta función aquí
      const data = await GetMetodos();
      setCedls(data);
    };
  
    useEffect(() => {
      fetchAdminDatos(); // Carga los datos al montar el componente
    }, []);
  
    const handleInsertSuccess = () => {
      fetchAdminDatos(); // Volver a obtener los datos actualizados
    };
  
    const handleDeleteAdmin = (id) => {
      setCedls(prevCedls => prevCedls.filter(admin => admin.idMetodoPago !== id));
    };
  
    let columns = ['ID', 'Nombre', 'Opciones'];
  
    return (
      <div>
        <ComplementTable button="Agregar método" onAddAdmin={handleAddAdmin} visBut={true} modalType="metodo" />
        <MetodoTable celdas={cedls} encabezados={columns} onDeleteAdmin={handleDeleteAdmin} />
      </div>
    );
  };
  
export default MetodoPanel;
