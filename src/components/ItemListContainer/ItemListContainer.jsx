import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import Item from "../Item/Item"
import Loader from "../Loader/Loader"
import { fetchData } from "../../fetchData"
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const [loading, setLoading] = useState(true)
  const [todosLosProductos, setTodosLosProductos] = useState(null)

  const { categoría } = useParams()

  useEffect(() => {
    if (!todosLosProductos) {
      fetchData()
        .then(response => {
          setTodosLosProductos(response)
          setTimeout(() => {
            setLoading(false)
          }, 600)
        })
        .catch(err => console.error(err))
    }

  }, [categoría])

  return(
    loading ?

      <Loader />

      :

      <div>
        <div className="container-productos">
          {
            categoría ?

              todosLosProductos.filter(el => el.categoria === categoria).map(el => {
                return (
                  <Item key={el.id} producto={el} />
                );
              })

              :
              todosLosProductos.map(el => {
                return (
                  <Item key={el.id} producto={el} />
                );
              })}
        </div>
      </div>
  )

}

export default ItemListContainer;