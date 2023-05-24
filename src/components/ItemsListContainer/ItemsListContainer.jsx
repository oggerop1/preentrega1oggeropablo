import './ItemsListContainer.css'
import { useState, useEffect } from 'react'
import { getProducto, getProductoByCategoria} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemsListContainer = ({greeting}) => {
  const [producto, SetProducto] = useState([])
  const {categoriaId}= useParams()
  useEffect(() =>{
    const asyncFunc = categoriaId ? getProductoByCategoria : getProducto
    
    asyncFunc(categoriaId)
      .then(response =>{
        SetProducto(response)
      })
      .catch( error =>{
        console.error(error)
      })
  },[categoriaId])
  return (
    <div>
      <h1 className='titulo'>{greeting}</h1>
      < ItemList producto ={producto}/>
    </div>
    
  )
}

export default ItemsListContainer