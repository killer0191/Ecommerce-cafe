import React, { useState, useEffect } from "react";
import { GetTipos } from "../../services/tiposService";
import ComplementTable from "../organisms/ComplementTable";
import handleAddAdmin from '../molecules/Modales/InsertAdmin';
import MetodoTable from "../organisms/MetodoTable";
import TiposTable from "../organisms/TiposTable";

const MetodoPanel = () => {
    const [cedls, setCedls] = useState([]);
  
    const fetchAdminDatos = async () => { // Define esta función aquí
      const data = await GetTipos();
      setCedls(data);
    };
  
    useEffect(() => {
      fetchAdminDatos(); // Carga los datos al montar el componente
    }, []);
  
    const handleInsertSuccess = () => {
      fetchAdminDatos(); // Volver a obtener los datos actualizados
    };
  
    const handleDeleteAdmin = (id) => {
      setCedls(prevCedls => prevCedls.filter(admin => admin.idTipoProducto !== id));
    };
  
    let columns = ['ID', 'Nombre', 'Opciones'];
  
    return (
      <div>
        <ComplementTable button="Agregar tipo de producto" onAddAdmin={handleAddAdmin} visBut={true} modalType="tipos" />
        <TiposTable celdas={cedls} encabezados={columns} onDeleteAdmin={handleDeleteAdmin} />
      </div>
    );
  };
  
export default MetodoPanel;
