import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {useState, useEffect} from 'react'
import getFetch from './GetFetch'
import {doc, getDoc, getFirestore} from 'firebase/firestore'


export const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {
        const bd = getFirestore()
        const prodDetail = doc(bd, 'productos', id)
        getDoc(prodDetail)
        .then(resp => setProductos({id: resp.id, ...resp.data()}))
        .catch(err=> console.log(err))
        .finally(()=> setLoading(false))
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
