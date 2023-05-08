import React from 'react'
import './CartWidget.css'
import carrito from './assets/images.png';

const CartWidget = () => {
    return (
    <div>
        <img src={carrito} alt="carrito imagen" srcset="" />
        <strong>10</strong>
    </div>
  )
}

export default CartWidget