import almendras from '../img/almendras.jpg'
import avellanas from '../img/avellanas.jpg'
import castañas from '../img/castañas.jpg'
import nueces from '../img/nueces.jpg'
import pasas from '../img/pasas.jpg'
import pasasRubias from '../img/pasasRubias.jpg'
import creatina from '../img/creatina.jfif'
import isoProt from '../img/isoProt.jpg'
import preEntreno from '../img/preEntreno.png'
import wheyProtein from '../img/wheyProtein.jpg'
import wheyXpro from '../img/wheyXpro.jpg'

const productos = [{
    id: 1,
    nombre: 'Almendras',
    precio: 100,
    img: almendras,
    stock: 20,
    categoria: 'frutos'
    },
    {
        id: 2,
        nombre: 'Avellanas',
        precio: 200,
        img: avellanas,
        stock: 15,
        categoria: 'frutos'
    },
    {
        id: 3,
        nombre: 'Castañas',
        precio: 150,
        img: castañas,
        stock: 13,
        categoria: 'frutos'
    },
    {
        id: 4,
        nombre: 'Nueces',
        precio: 130,
        img: nueces,
        stock: 16,
        categoria: 'frutos'
    },
    {
        id: 5,
        nombre: 'Pasas negras',
        precio: 50,
        img: pasas,
        stock: 10,
        categoria: 'frutos'
    },
    {
        id: 6,
        nombre: 'Pasas rubias',
        precio: 80,
        img: pasasRubias,
        stock: 19,
        categoria: 'frutos'
    },
    {
        id: 7,
        nombre: 'Creatina',
        precio: 300,
        img: creatina,
        stock: 7,
        categoria: 'suplementos'
    },{
        id: 8,
        nombre: 'Iso Proteina',
        precio: 350,
        img: isoProt,
        stock: 13,
        categoria: 'suplementos'
    },{
        id:9,
        nombre: 'Pre Entreno',
        precio: 250,
        img: preEntreno,
        stock: 10,
        categoria: 'suplementos'
    },{
        id: 10,
        nombre: 'Whey Protein',
        precio: 230,
        img: wheyProtein,
        stock: 16,
        categoria: 'suplementos'
    },{
        id: 11,
        nombre: 'Whey X Protein',
        precio: 270,
        img: wheyXpro,
        stock: 8,
        categoria: 'suplementos'
    },
]

const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productos)
    }, 2000)
})

export default getFetch