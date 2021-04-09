import React from 'react';

import "./styles/index.css"; 

export class Index extends React.Component {
    render() {
        return (
            <>
               <div className="container_index">
                   <h1>Jairo Sebastian</h1>
                   <p>Jimenez Taborda</p>
                   <a href="./realizarCompra">Realizar Compra</a>
                   <a href="./ordenes">Historial de compras</a>
               </div>
            </>
        );
    };
};