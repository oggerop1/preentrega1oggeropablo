import React from 'react'
import './ItemsListContainer.css'

const ItemsListContainer = ({greeting}) => {
  return (
    <h1 className='titulo'>{greeting}</h1>
  )
}

export default ItemsListContainer