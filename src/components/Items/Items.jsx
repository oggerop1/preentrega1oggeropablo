import React from 'react'
import "./Items.css"

const Items = ({id, name, imagen, precio, stock}) => {
  return (
    <article className='CardItem'>
        <header className='Header'>
            <h2 className='ItemHeader'>
                {name}
            </h2>
        </header>

        <picture>
            <img src={imagen} alt={name} className='Itemimag'/>
        </picture>

        <section>
            <p className='info'>
                precio: $ {precio}
            </p>
            <p className='info'>
                stok disponible: {stock}
            </p>
        </section>

        <footer className='ItemFooter'>
            <link to={`/item/${id}`} className='btnProducto'>   Ver detalles </link>
        </footer>
    </article>
  )
}

export default Items