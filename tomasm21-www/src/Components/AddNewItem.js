import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const AddNewItem = (props) => {

    const [state, setState] = useState({ title: "", imageUrl: "", description: "", price: "", quantity: "" });
    const [itemAdd, setItemAdded] = useState("");
    var intervalID = setInterval(unsetText, 3000);

    let item = {};
    const handleChange = (e) => {
        let id_num = props.dataList.length + 1;
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
        setState({ title: "", imageUrl: "", description: "", price: "", quantity: "" })
        console.log("AddNewItem.js submit state: " + state);
        e.preventDefault();
    }

    function unsetText() {
        setItemAdded("");
        clearInterval(intervalID);
    }

    return (
        <div className='container'>


            <form onSubmit={submitHandle} >

                <div className="row bg-dark col-5-lg" style={{ color: "white", "width": "400px" }}>
                    <h4>Pridėti naują prekę</h4>
                </div>
                <div className="row pt-2">
                    <div className="col-5-lg">
                        <span className="m-2">Pavadinimas</span>
                        <input className="col-5-lg" type="text"
                            maxLength={40}
                            name="title"
                            placeholder="Pavadinimas"
                            onChange={handleChange} />

                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-5-lg">
                        <span className="m-2">Paveiksliukas</span>
                        <input className="col-5-lg" type="text"
                            name="imageUrl"
                            placeholder="Paveiksliukas"
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-5-lg">
                        <span className="m-2">Aprašymas</span>
                        <input className="col-5-lg" type="text"
                            maxLength={120}
                            name="description"
                            placeholder="Aprašymas (URL / classpath)"
                            onChange={handleChange} />

                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col">
                        <span className="m-2">Kaina</span>
                        <input className="col" type="text"
                            maxLength={7}
                            name="price"
                            placeholder="Kaina"
                            onChange={handleChange} />

                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col">
                        <span className="m-2">Kiekis</span>
                        <input className="col" type="text"
                            maxLength={7}
                            name="quantity"
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