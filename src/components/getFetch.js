import almendras from '../img/almendras.jpg'
import avellanas from '../img/avellanas.jpg'
import castañas from '../img/castañas.jpg'
import nueces from '../img/nueces.jpg'
import pasas from '../img/pasas.jpg'
import pasasRubias from '../img/pasasRubias.jpg'

const productos = [{
    id: 1,
    nombre: 'Almendras',
    precio: 100,
    img: almendras,
    stock: 20
    },
    {
        id: 2,
        nombre: 'Avellanas',
        precio: 200,
        img: avellanas,
        stock: 15
    },
    {
        id: 3,
        nombre: 'Castañas',
        precio: 150,
        img: castañas,
        stock: 13
    },
    {
        id: 4,
        nombre: 'Nueces',
        precio: 130,
        img: nueces,
        stock: 16
    },
    {
        id: 5,
        nombre: 'Pasas negras',
        precio: 50,
        img: pasas,
        stock: 10
    },
    {
        id: 6,
        nombre: 'Pasas rubias',
        precio: 80,
        img: pasasRubias,
        stock: 19
    }
]

const find = productos.find(producto => producto.nombre === 'Almendras')

const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(find)
    }, 2000)
})

export default getFetch