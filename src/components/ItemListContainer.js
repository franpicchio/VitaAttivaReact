import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'


function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {cateProd} = useParams()

     useEffect(() => {
        if (cateProd) {
            const bd = getFirestore()
            const queryCollection = query(collection(bd, 'productos'), where('categoria', '==', cateProd))
            getDocs(queryCollection)
            .then(resp => setProductos(resp.docs.map (prod => ({id: prod.id, ...prod.data()}))))
            .catch(err=> console.log(err))
            .finally(()=> setLoading(false))
        } else {
            const bd = getFirestore()
            const prodsCollection = collection(bd, 'productos')
            getDocs(prodsCollection)
            .then(resp => setProductos(resp.docs.map (prod => ({id: prod.id, ...prod.data()}))))
            .catch(err=> console.log(err))
            .finally(()=> setLoading(false))
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
