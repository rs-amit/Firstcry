import React from "react";
import "./Header.css";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/UserRducer";
import Swal from "sweetalert2";

function Header() {

  const dispatch = useDispatch();
  const { cart, user } = useSelector((state) => state);
  console.log(cart);
  const { products } = cart;

  const LogoutHandler = () => {
    if (user.currentUser) {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to logout",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Logout",
        allowOutsideClick: () => !Swal.isLoading(),
        preConfirm: () => {
          dispatch(logout());
        },
      });
    }
  };

  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header-left">
          <Link to="/">
            <div className="header-left-logo">
              <img
                src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png"
                alt="icon"
              />
            </div>
          </Link>
          <div className="Header-input">
            <input
              className="header-input-field"
              placeholder="Search for a Category, Brand or Product"
            />
            <div className="searchIcon">
              <IoIosSearch size={24} color="#fa8043" />
            </div>
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-nav">
            <div className="nav"> Stores & Preschool </div>
            <div className="nav">Support</div>
            <div className="nav">Track Order</div>
            <div className="nav">FirstCry Parenting</div>
            <Link to="/login" style={{ textDecoration: "none", color: "black" }}> <div className="nav" onClick={LogoutHandler}>Login / Register</div> </Link>
          </div>
          <Link to="/carts" style={{ textDecoration: "none", color: "black" }}>
            <div className="cart-nav">
              <div className="cart-nav-wrapper">
                <FiShoppingCart size={32} />
                <div className="count">{products.length}</div>
              </div>
              <div className="cart-title">Cart</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
