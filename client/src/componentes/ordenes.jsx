import React from 'react';
import axios from 'axios';

export class Ordenes extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ordenes : [],
        };
    }

    async componentDidMount() {
        const orden = await axios.get(`http://localhost:5000/ordenes`);
        this.setState({ordenes : orden.data});
        console.log(this.state.ordenes);
    };

    
    render() {
        return (
            <>
                <div className="contaier_realizar_compra">
                    <div className="form_wrapper_ordenes">
                            <table className="">
                                <thead>
                                    <tr>
                                        <th>Nomero de orden</th>
                                        <th>Subtotal</th>
                                        <th>Iva</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.ordenes.map((orden,index) => (
                                        <tr key={index}>
                                            <th>{orden.numero_de_orden}</th>
                                            <th>{orden.subtotal}</th>
                                            <th>{orden.iva}</th>
                                            <th>{orden.total}</th>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                    </div>
                </div>
            </>
        );
    };
};