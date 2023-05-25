import "./Items.css"
import { Link } from "react-router-dom"

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
                Precio: $ {precio}
            </p>
            <p className='info'>
                Stock disponible: {stock}
            </p>
            <p className="info">ID:{id}</p>
        </section>

        <footer className='ItemFooter'>
        <Link to={`/item/${id}`}> Ver Detalles </Link>
        
        </footer>
    </article>
  )
}

export default Items