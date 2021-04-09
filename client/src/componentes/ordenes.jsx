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
 
            </>
        );
    };
};