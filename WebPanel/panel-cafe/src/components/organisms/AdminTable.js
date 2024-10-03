import React from "react";
import ColumName from "../atoms/ColumName";
import Celda from '../atoms/Celda';
import OptionsTable from "../molecules/OptionsTable";

const AdminTable = ({ celdas, encabezados = [], onDeleteAdmin }) => { 
    return (
    <div>
      {
      encabezados.length > 0 && encabezados.map((element, index) => (
        <ColumName key={index} label={element} />
      ))  
      }
      {
        celdas.length > 0 && celdas.map((element, index) => (
            <tr key={index}>
                <Celda label={element.idAdministrador} />
                <Celda label={element.nombre} />
                <Celda label={element.apellido} />
                <Celda label={element.correo} />
                < OptionsTable id={element.idAdministrador} onDelete={onDeleteAdmin} />
            </tr>
        ))
      }
    </div>
  );
};

export default AdminTable;
