import React from 'react'
import { useCompraContext } from '../context/CompraContext'

export const InfoComprador = () => {
    const {FinalizarCompra, ordenComprador, HandleOrden} = useCompraContext()

    return (
        <form onSubmit={FinalizarCompra} onChange={HandleOrden}>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" placeholder='Ingrese su email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' />
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre y Apellido</label>
                <input type="text" placeholder='Ingrese su nombre y apellido' className="form-control" id="exampleInputPassword1" name='nombre' />
            </div>
            <div className="mb-3">
                <label className="form-label">Teléfono</label>
                <input type="text" placeholder='Ingrese su número de teléfono' className="form-control" id="exampleInputPassword1" name='telefono' />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
