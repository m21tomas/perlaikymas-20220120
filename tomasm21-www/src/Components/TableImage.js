import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

class TableImage extends Component{

    render() {
        return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p  style={{"paddingTop": "20px", "textAlign": "left", "fontWeight": "bold", "fontSize": "20px"}}> 
                    An image of overall products as table:</p>
                </div>
             </div>
            <div className="row">
                <Table style={{"width": "auto"}} borderless>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.dataList.map(item => (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <th>{item.title}</th>
                                <th>{item.price}</th>
                                <th style={{"textAlign": "center"}}>{item.quantity}</th>
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