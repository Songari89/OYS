import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Login from "./Login";
import  Menuicon from "./Menuicon";
import AuthPopup from "./AuthPopup";

export default function Header() {
  return (
    <>
    <AuthPopup/>
      <header className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <img className={styles.logoimage} src="/image/OYS.svg" />
          </Link>
          
            <Menuicon />
            <Login />
          
        </div>
        <nav className={styles.menu}>
          <Link to="/" state={{ path: "products" }}>
            <p>PRODUCTS</p>
          </Link>
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
      </header>
    </>
  );
}
