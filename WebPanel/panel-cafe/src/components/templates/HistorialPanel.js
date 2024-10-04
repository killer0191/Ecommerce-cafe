import React, { useState, useEffect } from "react";
import { GetHistorialDatos } from "../../services/historialService";
import ComplementTable from "../organisms/ComplementTable";
import handleAddAdmin from '../molecules/Modales/InsertAdmin';
import HistorialTable from "../organisms/HistorialTable";

const HistorialPanel = () => {
    const [cedls, setCedls] = useState([]);
  
    const fetchAdminDatos = async () => { // Define esta función aquí
      const data = await GetHistorialDatos();
      setCedls(data);
    };
  
    useEffect(() => {
      fetchAdminDatos(); // Carga los datos al montar el componente
    }, []);
  
    const handleInsertSuccess = () => {
      fetchAdminDatos(); // Volver a obtener los datos actualizados
    };
  
    const handleDeleteAdmin = (id) => {
      setCedls(prevCedls => prevCedls.filter(admin => admin.idHistorial !== id));
    };
  
    let columns = ['ID', 'Productos', 'Cantidad', 'Total', 'Forma de pago', 'Cliente'];
  
    return (
      <div>
        <ComplementTable button="Agregar método" onAddAdmin={handleAddAdmin} visBut={false} modalType="#" />
        <HistorialTable celdas={cedls} encabezados={columns} onDeleteAdmin={handleDeleteAdmin} />
      </div>
    );
  };
  
export default HistorialPanel;
