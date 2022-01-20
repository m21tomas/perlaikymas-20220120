import React from 'react'


import FilteredItems from './FilteredItems';
import SumOfAllPrices from './SumOfAllPrices';

import UpperBar from './UpperBar';
import ShowItems from './ShowItems';
import TableImage from './TableImage';


const ActualItems = (props) => {

    

    return (
        <div>
            <h2> WTF</h2>
            <UpperBar />
            <ShowItems trainList={props.trainList} />
            <TableImage trainList={props.trainList} />
            <FilteredItems trainList={props.trainList} />
            <SumOfAllPrices trainList={props.trainList} />
        </div>
    );
}

export default ActualItems;