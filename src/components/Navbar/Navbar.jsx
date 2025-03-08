import './Navbar.css'

function Navbar() {
   return (
    <header>
        <div className='logo'>
        <img src="./src/components/Navbar/logoBernardo.png" alt="Logo" />
        </div>
        <nav className='nav-bar'>
            <ul className='nav-bar-items'>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
