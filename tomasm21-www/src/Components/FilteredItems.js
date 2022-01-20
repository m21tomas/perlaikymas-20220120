import React from 'react';
import { Table } from 'react-bootstrap';

const getItems = (props) => {
    return props.trainList.filter(it => it.wagons < 50).map(it => {
        return (
            <tr key={it.id}>
                <th>{it.trainNumber}</th>
                <th>{it.yearManufacture}</th>
                <th>{it.manufacturer}</th>
                <th>{it.wagons}</th>
                <th>{it.arrivalCity}</th>
                <th>{it.departureCity}</th>
            </tr>
        )
    });
}

function FilteredItems(props) {
    //  return props.trainList.filter(item => item.price < 200).map(item => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p style={{ "paddingTop": "20px", "textAlign": "left", "fontWeight": "bold", "fontSize": "20px" }}>
                        Traukiniai kuriu vagonu skaicius maziau nei 50:</p>
                </div>
            </div>

            <Table style={{ "width": "auto" }} className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Traukinio numeris</th>
                        <th>Pagaminimo metai</th>
                        <th>Gamintojas</th>
                        <th>Vagonu skaicius</th>
                        <th>Atvyksta is</th>
                        <th>Vaziuoja i</th>
                    </tr>
                </thead>
                <tbody>
                    {getItems(props)}
                </tbody>
            </Table>
        </div>
    )
}

export default FilteredItems;