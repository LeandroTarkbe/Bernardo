import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/navBar/navBar'
import ItemDetail from './components/ItemDetail/ItemDetail'

function App() {
   return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element= {<ItemListContainer />} />
        <Route path="/categoría/:categoría" element= {<ItemListContainer />} />
        <Route path="/detalle/:id" element= {<ItemDetail />} />
        <Route path="*" element={<p>404 Not Found</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
