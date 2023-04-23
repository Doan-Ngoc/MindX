import { useState } from "react"

const AddProductForm = (props) => {
    const [productValues, setProductValues] = useState({
        productName: "",
        productImage: "",
        productPrice: ""
    })
    const onProductChange = (event) => {
        const {name, value} = event.target
        setProductValues({
            ...productValues,
            [name]: value
        })
    }

const onSubmitProduct = (event) => {
    event.preventDefault()
    props.onAddNewProductToProductList(productValues)
    setProductValues({
        productName: "",
        productImage: "",
        productPrice: ""
    })
}
return(<div>
<h5>Add new product</h5>
Cart {props.productNumber}
<form className="mt-3" onSubmit = {onSubmitProduct}>
<div className="mb-3">
  <label htmlFor="productName" className="form-label">
    Product Name</label>
  <input className="form-control" id="productName" name = "productName" 
  value = {productValues.productName} onChange = {onProductChange} placeholder="Enter your product name"/>
</div>
<div className="mb-3">
  <label htmlFor="productImage" className="form-label">
    Product Image (url) </label>
  <input className="form-control" id="productImage" name = "productImage"
  value = {productValues.productImage} onChange = {onProductChange} placeholder="Enter your product image" />
</div>
<div className="mb-3">
  <label htmlFor="productPrice" className="form-label">
    Product Price ($) </label>
  <input type="number" className="form-control" name = "productPrice" id="productPrice" 
  value = {productValues.productPrice} min = "1" onChange = {onProductChange}  placeholder="Enter the product price"/>
</div>
<button className="mt-3 btn btn-primary w-100">Add new product</button>
</form>
</div>)
}

export default AddProductForm