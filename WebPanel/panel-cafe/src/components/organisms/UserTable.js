import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ColumName from "../atoms/ColumName";
import Celda from '../atoms/Celda';
import OptionsTable from "../molecules/OptionsTable";

const UserTable = ({ celdas, encabezados = [], onDeleteAdmin }) => { 
    return (
      <TableContainer component={Paper} sx={{ maxWidth: '100%', overflowX: 'auto' }}>
        <Table sx={{ minWidth: 650 }} aria-label="admin table">
          {/* Encabezado de la tabla */}
          <TableHead>
            <TableRow>
              {encabezados.length > 0 && encabezados.map((element, index) => (
                <TableCell key={index} align="center">
                  <ColumName label={element} />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* Cuerpo de la tabla */}
          <TableBody>
            {celdas.length > 0 && celdas.map((element, index) => (
              <TableRow key={index} hover>
                <TableCell align="center">
                  <Celda label={element.idUsuario} />
                </TableCell>
                <TableCell align="center">
                  <Celda label={element.nombre} />
                </TableCell>
                <TableCell align="center">
                  <Celda label={element.apellido} />
                </TableCell>
                <TableCell align="center">
                  <Celda label={element.correo} />
                </TableCell>
                <TableCell align="center">
                  <Celda label={element.numero} />
                </TableCell>
                <TableCell align="center">
                  <OptionsTable id={element.idUsuario} onDelete={onDeleteAdmin} type="User" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default UserTable;
