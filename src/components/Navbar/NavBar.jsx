import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
  return (
    <>
        <h2>Logotipo</h2>
        <div>
            <button>Inicio</button>
            <button>Productos</button>
            <button>Categorias</button>
            <button>Contacto</button>
        </div>
        <CartWidget />
    </>
  )
}

export default NavBar