import React, { Component } from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';

class ShowItems extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        };
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p style={{ "paddingTop": "20px", "textAlign": "center", "fontWeight": "bold", "fontSize": "20px" }}>
                            We have these products:</p>
                    </div>
                </div>
                <div className="row"> 
                    { 
                        this.props.dataList.map(fig => ( 
                            <div key={fig.id} className="col-12 col-sm-12 col-md-6 col-lg-4">
                                <div style={{ "textAlign": "center" }} className="card">
                                    {console.log("Image Link: " + fig.imageUrl) }
                                    <img
                                        src={fig.imageUrl}
                                        className="card-img-top"
                                        alt={fig.id}
                                    />
                                    <h5 className="card-title">{fig.title}</h5>
                                    <p className="card-text">{fig.description}</p>
                                    <p className="card-text">Price: {fig.price}</p>
                                    <p className="card-text">Quantity: {fig.quantity}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
};

export default ShowItems;