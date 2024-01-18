import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Menuicon.module.css";
import useCart from "../../hooks/useCart";

export default function Menuicon() {
  const { cartQuery:{data:items}} = useCart();
  const location = useLocation();
  const path = location.state?.path || null;
  const item = items && items.length > 0 && items.length;
  let menuclassname;
  if (location.pathname.includes("/products")) {
    menuclassname = styles["products"];
  } else if (item && location.pathname.includes("/cart")) {
    menuclassname = styles.defaultclassname;
  } else {
    menuclassname = styles[path] || styles.defaultclassname;
  }

  return (
    <div className={styles.icons}>
      <img
        className={menuclassname}
        src="/image/icons/menuicon.svg"
        alt="menuicon"
      />
      {item && (
        <div className={styles.itemincart}>
          <img src="/image/icons/cart.svg" alt="itemincart"/>
          <p>{item}</p>
        </div>
      )}
    </div>
  );
}
