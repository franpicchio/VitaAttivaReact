import React from 'react'
import {useState, useEffect} from 'react'
import getFetch from './getFetch'
import ItemList from './ItemList'


function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
        .then(resp => setProductos (resp))
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
    }, [])

    return (
        <div>
            <h1>Vita Attiva</h1>
            <section>
                {loading ?
                <div className="spinner-border" role="status">
                <span className="visually-hidden">Cargando...</span>
                </div>
                :
                <ItemList productos = {productos} />
                }
            </section>
        </div>
        
    )
}

export default ItemListContainer
