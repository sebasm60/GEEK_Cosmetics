import React from 'react';
import axios from 'axios';



import "./styles/realizarCompra.css"; 

export class RealizarCompra extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            articulos : [],
            total : 0,
            art : "",
            cantidad : 0,
            orden : []
        };
    }

    async componentDidMount() {
        const articulos = await axios.get(`http://localhost:5000/`);
        this.setState({articulos : articulos.data});
        console.log(this.state.articulos);
    };

    onChange = (e) =>{
        let precio = 0;

        for (let i = 0; i < this.state.articulos.length; i++){            
            if(this.state.articulos[i].descripcion === this.state.art){
                precio = this.state.articulos[i].precio;
                break;
            };
        };
        this.setState({total : e.target.value * precio});
        this.setState({cantidad : e.target.value});
    };

    onChangeArticulo = (e) =>{
        this.setState({art : e.target.value });
    };

    handleSubmit = async () =>{
        localStorage.removeItem('orden');
        localStorage.removeItem('subtot');
        localStorage.removeItem('iva');
        localStorage.removeItem('total');
        const datos = {
            subtot : localStorage.getItem('subtot'),
            iva : localStorage.getItem('iva'),
            total : localStorage.getItem('total'),
        };
        await axios.post(`http://localhost:5000/ordenes/agregarOrden`, datos);
        
        ;
    };

    render() {

        const detalleOrden = () => {
            if (localStorage.getItem('orden') == null){
               return <tbody>
                    <tr>
                    </tr>
                </tbody>
            } else {
               return <tbody>
                    {JSON.parse(localStorage.getItem('orden')).map((orden, index) =>(
                        <tr key={index}>
                            <td>{orden[0].articulo}</td> 
                            <td>{orden[0].cantidad}</td> 
                            <td>{orden[0].subtotal}</td>
                            <td><button id={`delete_${orden[0].articulo}`}>delete</button></td>                                        
                         </tr>
                    ))}
                </tbody>
            };
        };

        return (
            <>
               <div className="container_realizar_compra">
                   <h1>Realizar <span>compra</span></h1>

                   <div className="form_wrapper">
                       <div className="form_info">
                            <h3>Orden</h3>
                            <form>
                                <p>
                                    <label htmlFor="nombre">Nombre: </label>
                                    <input type="text" name="nombre" id="nombre"/>
                                </p>
                                <p>
                                    <label htmlFor="fecha">Fecha:</label>
                                    <input type="text" name="fecha" id="fecha"  disabled={true}/>
                                </p>
                                <p>
                                    <label htmlFor="articulo">Articulo:</label>
                                    <select onChange={this.onChangeArticulo} id="articulo">
                                        <option>--Seleccionar--</option>
                                        {this.state.articulos.map((articulo, index) =>(
                                            <option 
                                            key={index} 
                                            name={articulo.id} 
                                            id={articulo.id}                                            
                                            value={articulo.descripcion}>
                                                {articulo.descripcion}
                                            </option>
                                        ))}
                                    </select>
                                </p>
                                <p>
                                    <label htmlFor="cantidad">Cantidad:</label>
                                    <input
                                        type="number" 
                                        name="cantidad" 
                                        id="cantidad" 
                                        placeholder="0"
                                        min="0"
                                        onChange={this.onChange}/>
                                </p>
                                <p className="block">
                                    <label htmlFor="subtotal">Subtotal:</label>
                                    <input 
                                        type="text" 
                                        name="subtotal" 
                                        id="subtotal" 
                                        value={this.state.total} 
                                        disabled={true}/>
                                </p>
                                <p className="block">
                                    <button type="submit" id="btnAdd">Agregar</button>
                                </p>
                            </form>
                       </div>
                       
                       <div className="detalle_orden">
                            <h3>Detalle de Orden</h3>
                            <form >
                                <table className="orden">
                                    <thead>
                                        <tr>
                                            <th>Articulo</th>
                                            <th>Cantidad</th>
                                            <th>Subtotal</th>
                                            <th>Eliminar</th>
                                        </tr>
                                    </thead>
                                    {detalleOrden()}
                                </table>
                                <br/>
                                <table className="total">
                                    <tbody>
                                        <tr>
                                            <th>Subtotal: </th>
                                            <th id="subtot" name="subtot" ></th>
                                        </tr>
                                        <tr>
                                            <th>Iva: </th>
                                            <th id="iva" name="iva"></th>
                                        </tr>
                                        <tr>
                                            <th>Total: </th>
                                            <th id="total" name="total"></th>
                                        </tr>
                                    </tbody>                                
                                </table>
                                <br/>
                                <button onClick={this.handleSubmit}><a href="http://localhost:3000/">Finalizar</a></button>
                            </form>
                       </div>
                   </div>
                </div>     
            </>
        );
    };
};