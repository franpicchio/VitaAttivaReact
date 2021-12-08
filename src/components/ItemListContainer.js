import React from 'react'
import ItemCount from './ItemCount'


function ItemListContainer() {
    return (
        <div>
            <h1>Vita Attiva</h1>
            <ItemCount stock='10' initial='1' />  
        </div>
        
    )
}

export default ItemListContainer
