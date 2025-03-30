import { Link } from 'react-router'
import './Item.css'

function Item({ producto }) {
    const { id, denominacion, valorUnitario, stock } = producto

    function agregarAlCarrito(prod) {
        const nuevoProducto = {
            ...prod,
            cantidad: 1,
        }

        console.log("Usted esta agregando: ", nuevoProducto)
    }

    return (
        <div className="card p-4">
            <h3 className="card-header">{denominacion}</h3>
            <h5 className="card-body">Precio: ${valorUnitario}</h5>
            <p>Quedan {stock} disponibles</p>
            <button className="btn btn-secondary my-2" onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
            <Link to={`/detalle/${id}`}>
                <button className="btn btn-secondary my-2">Ver detalle</button>
            </Link>
        </div>
    )
}

export default Item