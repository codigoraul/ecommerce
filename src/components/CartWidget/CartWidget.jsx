import React from 'react'
import cart from './assets/carrito.png'

function CartWidget() {
  return (
    <div>
        <img src={cart}alt="" />
        0
    </div>
  )
}

export default CartWidget