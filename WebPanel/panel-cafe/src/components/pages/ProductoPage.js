import React from "react";
import AdminTemplate from '../templates/AdminTemplate';
import ProductoPanel from "../templates/ProductoPanel";

const ProductoPage = () => {
    return (
        <AdminTemplate>
        <div>
            {/* Contenido de la página Usuarios */}
            <ProductoPanel />
        </div>
    </AdminTemplate>
    );
};

export default ProductoPage;