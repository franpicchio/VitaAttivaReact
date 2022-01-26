import React from 'react'
import { useState } from 'react'

export const InfoComprador = ({idOrden}) => {
    const [ordenComprador, setOrdenComprador] = useState({nombre:"", telefono:"", email:""})
    const [finCompra, setFinCompra] = useState(false)

    const HandleSubmit = () =>{
        setFinCompra(true)
    }

    const HandleOrden = (e) => {
        setOrdenComprador({
            ...ordenComprador, 
            [e.target.name]: e.target.value
        })
    }

    return (
        <section>
            {finCompra ?
                <>
                    <h2>Compra Finalizada con Exito</h2>
                    <p>El id de su orden es {idOrden}</p>
                </>
            :
                <form onChange={HandleOrden}>
                    <div className="mb-3">
                        <label className="form-label">Nombre y Apellido</label>
                        <input type="text" placeholder='Ingrese su nombre y apellido' className="form-control" name='nombre' value={ordenComprador.nombre} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Teléfono</label>
                        <input type="text" placeholder='Ingrese su número de teléfono' className="form-control" name='telefono' value={ordenComprador.telefono} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" placeholder='Ingrese su email' className="form-control" aria-describedby="emailHelp" name='email' value={ordenComprador.email} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirmar email</label>
                        <input type="email" placeholder='Confirme su email' className="form-control" aria-describedby="emailHelp" name='email2' />
                    </div>
                    {ordenComprador.nombre !== '' && ordenComprador.telefono !== '' && ordenComprador.email !== '' && ordenComprador.email2 === ordenComprador.email ?
                    <button type="submit" className="btn btn-success" onClick={HandleSubmit}>Comprar</button>
                    :
                    <button type="submit" className="btn btn-success" disabled>Comprar</button>
                    }
                </form>
            }
        </section>
    )
}

