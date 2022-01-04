import React from 'react'
import {memo} from 'react'
import Item from './Item'

const ItemList = memo(
    ({productos}) => {
        return (
            <div className='d-flex flex-wrap justify-content-around'>
                {productos.map((prod) => <Item prod={prod} key={prod.id} />)}
            </div>
        )
    }
)

export default ItemList