import {FaCartPlus} from "react-icons/fa";

const ProductItem = (props) => {
    const { productImage, productName, productPrice, productId, onAddToCart} = props;
    return (
        <div className="card col-12 col-md-6 col-lg-4 p-3" >
            <img src= {productImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{productName}</h5>
                <div className="d-flex justify-content-between">
                <p className="card-text">${productPrice}</p>
                <button className="btn btn-primary" onClick = {() => onAddToCart(productId)}><FaCartPlus/></button>
            </div>
            <button className="btn btn-primary w-100 mt-3">View details</button>
        </div>
        </div>
    )
}

export default ProductItem