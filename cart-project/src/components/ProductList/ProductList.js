import ProductItem from "../ProductItem/ProductItem"
import AppContext from "../../contexts/AppContext"
import { useContext } from "react"

const ProductList = () => {
    //const {products} = props
    const {products, onAddToCart} = useContext(AppContext)
    const listProducts = products && products.map((product) => {
        const {productName, productImage, productPrice, id} = product
        return (
            <ProductItem 
            productName = {productName}
            productImage = {productImage}
            productPrice = {productPrice}
            productId={id}
            key={id} 
            onAddToCart = {onAddToCart}
            className = "m-5" />
        )
    })
    return (
        <div>
            <div className="row my-5" >
                {listProducts}
            </div>
        </div>
    )
}

export default ProductList 