import React from 'react'
import './CartWidget.css'
import carrito from './assets/images.png';

const CartWidget = () => {
    return (
    <div>
        <img src={carrito} alt="carrito imagen" className='imgCarrito' />
        <strong>10</strong>
    </div>
  )
}

export default CartWidget