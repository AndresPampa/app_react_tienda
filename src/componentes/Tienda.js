import React from "react";
import Productos from "./Productos";

const Tienda = ({productos, agregarProductoAlCarrito}) =>{
    return (
        <div>
            <h2>Pagina de Tienda</h2>
            <Productos productos={productos} agregarProductoAlCarrito={agregarProductoAlCarrito}/>
        </div>
    );
}

export default Tienda;
