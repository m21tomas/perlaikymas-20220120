import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

class TableImage extends Component{

    render() {
        return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p  style={{"paddingTop": "20px", "textAlign": "left", "fontWeight": "bold", "fontSize": "20px"}}> 
                    Traukiniu lentele:</p>
                </div>
             </div>
            <div className="row">
                <Table style={{"width": "auto"}} borderless>
                    <tr>
                        <th>#</th>
                        <th>Traukinio numeris</th>
                        <th>Pagaminimo metai</th>
                        <th>Gamintojas</th>
                        <th>Vagonu skaicius</th>
                        <th>Atvyksta is</th>
                        <th>Vaziuoja i</th>
                    </tr>
                    <tbody>
                    {
                        this.props.trainList.map(item => (
                            <tr key={it.id}>
                            <th>{it.trainNumber}</th>
                            <th>{it.yearManufacture}</th>
                            <th>{it.manufacturer}</th>
                            <th>{it.wagons}</th>
                            <th>{it.arrivalCity}</th>
                            <th>{it.departureCity}</th>
                            </tr>
                            )
                        )
                    }
                    </tbody>
                </Table>
            </div> 
        </div>
        )
    };
};

export default TableImage;