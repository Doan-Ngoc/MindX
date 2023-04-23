
  import React from 'react'
  import {FaCartPlus} from "react-icons/fa";
  import {FaTrashAlt} from "react-icons/fa";
  const CartModal = (props) => {
    const {cart, onInCreaseCartQuantity, onDeCreaseCartQuantity, onDeleteCartItem } = props
    
      let totalPrice = 0;
      for (let i = 0; i < cart.length; i++) {
        const cartItem = cart[i];
        totalPrice += cartItem.productPrice * cartItem.quantity;
      }

    const ProductItemInCart = (cartItemProps) => {
      let {cartItem} = cartItemProps
      
    return (<tbody className='productItemInCart'>
    <tr>
    <td>{cartItem.index}</td>
    <td>{cartItem.productName}</td>
    <td>
      <img src={cartItem.productImage} alt="Cart image" height={"50px"}/>
    </td>
    <td>${cartItem.productPrice}</td>
    <td className="d-flex justify-content-center">
    <button className="btn btn-primary mr-2" onClick = {() => {cartItem.quantity === 1 ? onDeleteCartItem(cartItem.id) : onDeCreaseCartQuantity(cartItem.id)}} style={{fontSize: 12, height: "50%"}}>-</button>
    <p>{cartItem.quantity}</p>
    <button className="btn btn-primary ml-2" onClick = {() => onInCreaseCartQuantity(cartItem.id)} style={{fontSize: 12, height: "50%"}}>+</button></td>
    <td>${cartItem.productPrice * cartItem.quantity}</td>
    <td>
      <button className="btn btn-danger" onClick={() => onDeleteCartItem(cartItem.id)} style={{height: "50%"}}><FaTrashAlt /></button>
      </td>
  </tr>
</tbody>)}
  
  return (
    <div className="cart-section modal fade" id="cart" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Cart</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
          <div className="table-responsive">
            <table className="table text-center">
            <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Image</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th scope='col'>...</th>
                </tr>
                </thead>
                {cart.map((cartItem) => {
                  return (
                    <ProductItemInCart 
                    cartItem = {cartItem} />
                  )
                })}
                <tr> 
                <th scope="col">Total price</th>
                <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col">${totalPrice}</th>
                </tr>
            </table>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">Check Out</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
  }
  export default CartModal


