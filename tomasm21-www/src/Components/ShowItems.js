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
                            Visi traukiniai:</p>
                    </div>
                </div>
                <div className="row"> 
                    { 
                        this.props.trainList.map(fig => ( 
                            <div key={fig.id} className="col-12 col-sm-12 col-md-6 col-lg-4">
                                <div style={{ "textAlign": "center" }} className="card">
                                    {console.log("Image Link: " + fig.imageUrl) }
                                    <img
                                        src={fig.imageUrl}
                                        className="card-img-top"
                                        alt={fig.id}
                                    />
                                    <h5 className="card-title">{fig.trainNumber}</h5>
                                    <p className="card-text">{fig.arrivalCity} - {fig.departureCity}</p>
                                    <p className="card-text">Vagonai: {fig.wagons}</p>
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