import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Login from "./Login";
import Menuicon from "./Menuicon";
import AuthPopup from "../AuthPopup";
import SubMenu from "./SubMenu";
import Products from "./Products";

export default function Header() {
  const [showSubMenu, setShowSubMenu] = useState();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // const handleMenu = () => {
  //   setShowSubMenu((pre) => !pre);
  //   if (showSubMenu && !pathname.includes("/products")) {
  //     navigate("/products");
  //   }
    
  // };

  return (
    <>
      <AuthPopup />
      <header className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <img className={styles.logoimage} src="/image/OYS.svg" />
          </Link>
          <Menuicon />
          <Login />
        </div>
        <nav className={styles.menu}>
          {/* <p className={styles.products} onClick={handleMenu}>
            PRODUCTS
          </p> */}
          <Products />
          <Link to="/aboutus" state={{ path: "aboutus" }}>
            <p>ABOUT US</p>
          </Link>
          <Link to="/cart" state={{ path: "cart" }}>
            <p>CART</p>
          </Link>
          <Link to="/mypage">
            <p>MYPAGE</p>
          </Link>
        </nav>
        {showSubMenu && 
        <SubMenu path={"/products"} />}
      </header>
    </>
  );
}
