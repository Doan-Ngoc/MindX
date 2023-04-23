import ProductItem from "../ProductItem/ProductItem"

const ProductList = (props) => {
    const {products} = props
    return (
        <div>
            <h6>Product List</h6>
            <div className="row">
                {products.map((product) => {
                    const {productName, productImage, productPrice, id} = product
                    return (
                        <ProductItem 
                        productName = {productName}
                        productImage = {productImage}
                        productPrice = {productPrice}
                        productId={id}
                        key={id} 
                        onAddToCart = {props.onAddToCart}/>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductList 