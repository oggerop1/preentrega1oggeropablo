import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCounts/ItemCount'

const ItemDetail = ({id, name, imagen, categoria, descripcion,precio, stock}) => {
  return (
    <article className='CardItem'>
        <header className='Header'>
            <h2 className='ItemHeader'>
                {name}
            </h2>
        </header>
        <picture >
            <img src={imagen} alt={name} className='img' />
        </picture>
        <section>
            <p className='Info'>
                categoria: {categoria}
            </p>
            <p className='Info'>
                Descripcion: {descripcion}
            </p>
            <p className='Info'>
                Precio: {precio}
            </p>
            <p className='Info'>ID: {id}</p>
        </section>
        <footer className='Itemfooter'>
            <ItemCount inicial={1} stock={stock} agregar={(cantidad) => console.log('cantidad agregada', cantidad)}/>
        </footer>
    </article>
  )
}

export default ItemDetail