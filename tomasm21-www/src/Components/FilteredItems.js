import React from 'react';
import { Table } from 'react-bootstrap';

const getItems = (props) => {
    return props.dataList.filter(it => it.price < 200).map(it => {
        return (
            <tr key={it.id}>
                <th>{it.title}</th>
                <th>{it.price}</th>
            </tr>
        )
    });
}

function FilteredItems(props) {
    //  return props.dataList.filter(item => item.price < 200).map(item => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p style={{ "paddingTop": "20px", "textAlign": "left", "fontWeight": "bold", "fontSize": "20px" }}>
                        Filtered products that price is less than 200:</p>
                </div>
            </div>

            <Table style={{ "width": "auto" }} className="table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
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