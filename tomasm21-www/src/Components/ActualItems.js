import React from 'react'


import FilteredItems from './FilteredItems';
import SumOfAllPrices from './SumOfAllPrices';

import UpperBar from './UpperBar';
import ShowItems from './ShowItems';
import TableImage from './TableImage';


const ActualItems = (props) => {

    

    return (
        <div>
            <UpperBar />
            <ShowItems dataList={props.dataList} />
            <TableImage dataList={props.dataList} />
            <FilteredItems dataList={props.dataList} />
            <SumOfAllPrices dataList={props.dataList} />
        </div>
    );
}

export default ActualItems;