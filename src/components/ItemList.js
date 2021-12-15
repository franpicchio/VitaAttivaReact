import React from 'react'
//import Item from './Item'
import ItemDetail from './ItemDetail'

const ItemList = ({productos}) => {
    return (
        <div className='d-flex flex-wrap justify-content-around'>
            <ItemDetail productos={productos} />
        </div>
    )
}

export default ItemList            

//{productos.map((prod) => <Item prod={prod} />)}