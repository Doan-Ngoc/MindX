


const ProductItem = (props) => {
    const { productImage, productName, productPrice, productId, onAddToCart} = props;
    return (
        <div className="card col-12 col-md-6 col-lg-4">
            <img src= {productImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{productName}</h5>
                <p className="card-text">${productPrice}</p>
                <a href="#" className="btn btn-primary" onClick = {() => onAddToCart(productId)}>Add to cart</a>
            </div>
        </div>
    )
}

export default ProductItem