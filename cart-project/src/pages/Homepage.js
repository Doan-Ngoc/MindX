import React from 'react'
import AddProductForm from '../components/AddProductForm/AddProductForm'
import ProductList from '../components/ProductList/ProductList'
const Homepage = ({onAddNewProductToProductList, productNumber, products, onAddToCart}) => {
  return (
    <div className = "homepage">
          <div>
            <ProductList />
          </div>
        </div>
  )
}

export default Homepage