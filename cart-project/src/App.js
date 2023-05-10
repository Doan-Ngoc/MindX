import './App.css';
import Header from "./components/Header/Header"
import AddProductForm from './components/AddProductForm/AddProductForm';
import ProductList from './components/ProductList/ProductList';
import CartModal from './components/CartModal/CartModal';
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import {Routes, Route} from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Homepage from './pages/Homepage';
import CartPage from './pages/CartPage';
import NotFound from './pages/NotFound';
import React from 'react';

function App() {
  const initialProducts = [
    {
      id: "1",
      productName: "IPhone 14 Pro Max",
      productPrice: 2000,
      productImage:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/250257/iphone-13-pink-1-600x600.jpg",
        id: uuidv4()
      },
    {
      id: "2",
      productName: "IPhone 13",
      productPrice: 3000,
      productImage:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/250257/iphone-13-pink-1-600x600.jpg",
        id: uuidv4()
      },
    {
      id: "3",
      productName: "BPhone Pro Max",
      productPrice: 1500,
      productImage:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/250257/iphone-13-pink-1-600x600.jpg",
        id: uuidv4(),
      },
  ];
  const [products, setProducts] = useState(initialProducts)
  //Add sản phẩm vào Product List
  const onAddNewProductToProductList = (product) => {
    console.log("New product is coming...", product);
    const newProduct = {
      ...product,
      id: uuidv4(),
      }
    const newProductList = [...products, newProduct]
    setProducts(newProductList)
  }
  const [cart, setCart] = useState([])
  
  //Add sản phẩm vào giỏ hàng
  const onAddProductToCart = (productId) => {
    const existingProduct = products.find(
      (product) => product.id === productId
    )
  // Nếu trong cart chưa có sản phẩm đó thì thêm vào
  const indexOfAddingProductInCart = cart.findIndex(cartItem => cartItem.id === productId)
  if (indexOfAddingProductInCart === -1) {
    const newCartItem = {
      ...existingProduct,
      quantity: 1,
      index: cart.length + 1
    }
  setCart([...cart, newCartItem])
  }
  //Nếu trong cart đã có sản phẩm đó thì cộng số lượng
  else {
    const clonedCart = [...cart]
    clonedCart[indexOfAddingProductInCart].quantity += 1
    setCart(clonedCart)
  }
}
// Hàm xử lý tăng số lượng cartItem
const onInCreaseCartQuantity = (productId) => {
  const existingProduct = cart.find(cartItem => cartItem.id === productId)
const indexOfIncreasedProduct = cart.indexOf(existingProduct)
const increasedProduct = {
  ...existingProduct,
  quantity: existingProduct.quantity + 1
}
const clonedCart = [...cart]
clonedCart[indexOfIncreasedProduct] = increasedProduct
setCart(clonedCart)
}
// Hàm xử lý giảm số lượng cartItem
const onDeCreaseCartQuantity = (productId) => {
  const existingProduct = cart.find(cartItem => cartItem.id === productId)
const indexOfDecreasedProduct = cart.indexOf(existingProduct)
const decreasedProduct = {
  ...existingProduct,
  quantity: existingProduct.quantity -1
}
const clonedCart = [...cart]
clonedCart[indexOfDecreasedProduct] = decreasedProduct
setCart(clonedCart)
}
//Xóa sản phẩm khỏi giỏ hàng
const onDeleteCartItem  = (productID) => {
  const existingProduct = cart.find(productItem => productItem.id === productID)
  const indexofDeletedProduct = cart.indexOf(existingProduct)
  //findIndex(productItem => productItem.id === productID)
  const clonedcart = [...cart]
  clonedcart.splice(indexofDeletedProduct, 1)
  setCart(clonedcart)
}
  return (
    <div className="App">
      <Header cart = {cart}/>
      <main className='container py-3'>
      <Routes>
        <Route path = "/" element= {<Homepage 
        onAddNewProductToProductList= {onAddNewProductToProductList}
        productNumber = {products.length}
        products={products} 
        onAddToCart={onAddProductToCart}/>}></Route>
          <Route path = "/about-us" element = {<AboutUs />}> </Route>
          <Route path = "/cart" element = {<CartPage 
          cart = {cart}
          onInCreaseCartQuantity = {onInCreaseCartQuantity}
          onDeCreaseCartQuantity = {onDeCreaseCartQuantity}
          onDeleteCartItem  = {onDeleteCartItem }/>}> </Route>
          <Route path= "*" element = {<NotFound />}> </Route>
        </Routes>
        </main>
    </div>
  );
}

export default App;
