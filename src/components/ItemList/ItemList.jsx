import React from 'react'
import "./Itemlist.css"
import Items from '../Items/Items'


const ItemList = ({producto}) => {
  return (
    <div className='ListGroup'>
        {producto.map(prod => < Items key={prod.id}{...prod}/>)}
    </div>
  )
}

export default ItemList