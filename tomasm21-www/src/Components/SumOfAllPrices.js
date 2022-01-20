import React from 'react'

function SumOfAll(props) {
    return props.dataList.reduce((sum, item) => { return sum + item.quantity * item.price }, 0);
}

function SumOfAllPrices(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p style={{ "paddingTop": "20px", "textAlign": "left", "fontWeight": "bold", "fontSize": "20px" }}>
                        Sum of all items prices is: {SumOfAll(props)}</p>
                </div>
            </div>
        </div>
    );
}
export default SumOfAllPrices;