import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import getFetch from './GetFetch'
import ItemList from './ItemList'


function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {cateProd} = useParams()

    useEffect(() => {
        if (cateProd) {
            getFetch
            .then(resp => setProductos (resp.filter(producto=>producto.categoria===cateProd)))
            .catch(err => console.log(err))
            .finally(()=>setLoading(false)) 
        } else {
            getFetch
            .then(resp => setProductos (resp))
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))  
        }
    }, [cateProd])

    

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
