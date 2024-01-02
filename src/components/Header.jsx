import React from "react";
import styles from "./Header.module.css";
import { Link , useLocation } from "react-router-dom";
import Menuicon from "./Menuicon";

export default function Header() {
  const handleClick = () => {<Menuicon path="/cart"/>}
  const location = useLocation();
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">
          <img className={styles.logoimage} src="/image/OYS.svg" />
        </Link>
      </div>
      <div className={styles.menu}>
        <Link to="/">

          <p>PRODUCTS</p>
        </Link>
        <Link to="/">

          <p>ABOUT US</p>
        </Link>
        <Link to="/cart" onClick={handleClick}>

          <p>CART</p>
        </Link>
        <Link to="/mypage">
          <p>MYPAGE</p>
        </Link>
      </div>
    </header>
  );
}
