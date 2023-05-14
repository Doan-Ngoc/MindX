import React from 'react'
import CartModal from '../components/CartModal/CartModal'
import { useNavigate, Link } from 'react-router-dom'

const CartPage = ({cart, onInCreaseCartQuantity, onDeCreaseCartQuantity, onDeleteCartItem}) => {
    const cartValid = cart && cart.length > 0
    const navigate = useNavigate()
    return (
    cartValid 
    ? <CartModal 
    cart = {cart}
          onInCreaseCartQuantity = {onInCreaseCartQuantity}
          onDeCreaseCartQuantity = {onDeCreaseCartQuantity}
          onDeleteCartItem  = {onDeleteCartItem }/>
    : <div>
      <h1>Cart empty, <Link to="/">continue shopping</Link></h1>
      <button className='btn btn-primary my-5' onClick= {() =>navigate(-1)}>Go back</button>
      </div>
  )
}

export default CartPage