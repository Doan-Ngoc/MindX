import React from 'react'
import AddProductForm from '../components/AddProductForm/AddProductForm'
import ProductList from '../components/ProductList/ProductList'
const Homepage = ({onAddNewProductToProductList, productNumber, products, onAddToCart}) => {
  return (
    <div className = "row">
          <div className='col-12 col-md-4'>
          <AddProductForm 
          onAddNewProductToProductList= {onAddNewProductToProductList}
          productNumber = {productNumber}/>
          </div>
          <div className='col-12 col-md-8'>
            <ProductList 
            products={products} 
            onAddToCart={onAddToCart}/>
          </div>
        </div>
  )
}

export default Homepage