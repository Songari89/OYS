import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import Menuicon from "./Menuicon";
import AuthPopup from "./AuthPopup";
import SubMenu from "./SubMenu";

export default function Header() {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const navigate = useNavigate();

  const handleMenu = () => {
    navigate("/products", { state: { path: "products" } });
    setShowSubMenu((pre) => !pre);
  };

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
          <p className={styles.products} onClick={handleMenu}>
            PRODUCTS
          </p>
          <Link to="/" state={{ path: "aboutus" }}>
            <p>ABOUT US</p>
          </Link>
          <Link to="/cart" state={{ path: "cart" }}>
            <p>CART</p>
          </Link>
          <Link to="/mypage">
            <p>MYPAGE</p>
          </Link>
        </nav>
        {showSubMenu && <SubMenu path={"/products"} />}
      </header>
    </>
  );
}
