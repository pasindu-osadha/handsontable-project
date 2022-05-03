import React from 'react'
import { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination'



export const PaginationComponent = (props) => {
    const [itemclick, setitemclick] = useState(0);

    const paginationClicked = async (event) => {
      
        var c = await parseInt(event.target.text);
        props.parentCallback(c);
    }


    let active = itemclick;
    let items = [];
    for (let number = 1; number <= props.pageCount; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={(event) => paginationClicked(event)}>
                {number}
            </Pagination.Item>,
        );
    }


    return (
        <div>
            <Pagination size="sm">{items}</Pagination>
        </div>
    )
}


