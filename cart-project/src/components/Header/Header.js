import {FaCartPlus} from "react-icons/fa";
import CartModal from "../CartModal/CartModal";
import { Link } from "react-router-dom";
import CartPage from '../../pages/CartPage';

export default function Header(props) {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to = "/">Shoppi</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to = "/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className = "nav-link" to="/about-us">About Us</Link>
      </li>
      <li className="nav-item">
        <Link className = "nav-link" to="/admin">Admin</Link>
      </li>
    </ul>
        <Link className="btn btn-primary d-flex align-items-center" to="/cart">
      <FaCartPlus className="mr-3" style={{color: "white"}}/><span>({props.cart.length})</span>
      </Link>
</div>
</nav>
        </>
    )
}