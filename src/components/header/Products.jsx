import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { useLocation, Link, useNavigate } from "react-router-dom";

export default function Products() {
  const [showSubMenu, setShowSubMenu] = useState();
  const { pathname, state } = useLocation();
  const path = state?.path || "";
  const navigate = useNavigate();
  const handleClick = () => {
    if (!pathname.includes("products")) {
      navigate("/products", { state: { path: "products" } });
      setShowSubMenu(true);
      return;
    }
    setShowSubMenu((pre) => !pre);
  };

  useEffect(() => {
    if (path.includes("products")) {
      setShowSubMenu(true);
    } else if (!path.includes("products")) {
      setShowSubMenu(false);
    }
  }, [path]);

  return (
    <div className={styles.container}>
      <p className={styles.products} onClick={handleClick}>
        PRODUCTS
      </p>

      {showSubMenu && (
        <div className={styles.submenu}>
          <Link to="/products">ALL</Link>
          <Link to="/products/crossbag">CROSS BAG</Link>
          <Link to="/products/totebag">TOTE BAG</Link>
          <Link to="/products/ecobag">ECO BAG</Link>
        </div>
      )}
    </div>
  );
}
