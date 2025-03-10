import './App.css'
import CartWidget from '../src/components/CartWidget/CartWidget'
import Navbar from './components/navBar/navBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
   return (
    <>
      <Navbar></Navbar>
      <CartWidget></CartWidget>
      <ItemListContainer></ItemListContainer>      
    </>
  )
}

export default App
