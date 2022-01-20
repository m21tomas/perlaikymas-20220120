import React, { useState } from 'react'
import axios from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const AddNewItem = (props) => {

    const [state, setState] = useState({ trainNumber: "", yearManufacture: "", manufacturer: "", wagons: "", departureCity: "", arrivalCity:"" });
    const [itemAdd, setItemAdded] = useState("");
    var intervalID = setInterval(unsetText, 3000);

    let item = {};
    const handleChange = (e) => {
        let id_num = props.trainList.length + 1;
        item["id"] = id_num;
        let name = e.target.name;
        let value = e.target.value;
        item[name] = value;
        console.log("AddNewItem.js handleChange item log:");
        console.log(item);
    }

    const submitHandle = (e) => {
        props.parentCallback(item);
        setItemAdded(item.title + " is added to the Shop products list");
        intervalID = setInterval(unsetText, 3000);
        setState({ trainNumber: "", yearManufacture: "", manufacturer: "", wagons: "", departureCity: "", arrivalCity:""  })
        console.log("AddNewItem.js submit state: " + state);
        e.preventDefault();
    }

    function unsetText() {
        setItemAdded("");
        clearInterval(intervalID);
    }

    const uploadCenter = async () => {

        try {
           const response = await axios.post(process.env.PUBLIC_URL + "/api/trains", state);
            if (response.status < 400) {
             console.log("data is sent to backend");
            }

        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div className='container'>


            <form onSubmit={submitHandle} >

                <div className="row bg-dark col-5-lg" style={{ color: "white", "width": "400px" }}>
                    <h4>Pridėti naują traukinį</h4>
                </div>
                <div className="row pt-2">
                    <div className="col-5-lg">
                        <span className="m-2">Traukinio numeris:</span>
                        <input className="col-5-lg" type="text"
                            maxLength={10}
                            name="trainNumber"
                            placeholder="Pavadinimas"
                            onChange={handleChange} />

                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-5-lg">
                        <span className="m-2">Pagaminimo metai:</span>
                        <input className="col-5-lg" type="text"
                            maxLength={4}
                            name="yearManufacture"
                            placeholder="Paveiksliukas"
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-5-lg">
                        <span className="m-2">Gamintojas</span>
                        <input className="col-5-lg" type="text"
                            maxLength={20}
                            name="manufacturer"
                            placeholder="Aprašymas (URL / classpath)"
                            onChange={handleChange} />

                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col">
                        <span className="m-2">Vagonu skaicius:</span>
                        <input className="col" type="text"
                            maxLength={7}
                            name="wagons"
                            placeholder="Kaina"
                            onChange={handleChange} />

                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col">
                        <span className="m-2">Išvykimo miestas:</span>
                        <input className="col" type="text"
                            maxLength={30}
                            name="departureCity"
                            placeholder="Kiekis"
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col">
                        <span className="m-2">Atvykimo miestas:</span>
                        <input className="col" type="text"
                            maxLength={30}
                            name="arrivalCity"
                            placeholder="Kiekis"
                            onChange={handleChange} />
                    </div>
                </div>
                <input type="submit" value="Add.." />
            </form>
            <div>
                <h3 name="place">{itemAdd}</h3>
            </div>
        </div>
    )
}

export default AddNewItem;