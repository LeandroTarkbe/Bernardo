import './Navbar.css'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

function Navbar() {

   const carrito = []

   return (
    <header>
        <div className='logo'>
        <img src="./src/components/Navbar/logoBernardo.png" alt="Logo" />
        </div>
        <ul className='nav-bar'>
            <ul className='nav-bar-items'>
                <Link to= "/">
                    <li>Inicio</li>
                </Link>
                <Link to= "/productos">
                    <li>Productos</li>
                </Link>
                <Link to= "/contacto">
                    <li>Contacto</li>
                </Link>
            </ul>
            </ul>
            <Link to= "/carrito">
                <CartWidget cantidad = {carrito.length} />
            </Link>
    </header>
  )
}

export default Navbar
