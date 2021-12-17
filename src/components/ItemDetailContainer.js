import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {useState, useEffect} from 'react'
import getFetch from './GetFetch'


export const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {
        getFetch
        .then(resp => setProductos (resp.find(producto=>producto.id===parseInt(id))))
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
    }, [id])

    return (
        <section>
            {loading ?
            <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
            </div>
            :
            <ItemDetail productos = {productos} />
            }
        </section>
    )
}
