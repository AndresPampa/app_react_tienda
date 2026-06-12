import React from "react";
import Productos from "./Productos";

const Tienda = ({productos}) =>{
    return (
        <div>
            <h2>Pagina de Tienda</h2>
            <Productos productos={productos}/>
        </div>
    );
}

export default Tienda;
