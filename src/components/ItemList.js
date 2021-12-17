import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
    return (
        <div className='d-flex flex-wrap justify-content-around'>
            {productos.map((prod) => <Item prod={prod} />)}
        </div>
    )
}

export default ItemList