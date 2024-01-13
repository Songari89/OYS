import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Menuicon.module.css";

export default function Menuicon() {
  const location = useLocation();
  const path = location.state?.path || null;
  let menuclassname;
  if (location.pathname.includes("/products")) {
    menuclassname = styles["products"];
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
    </div>
  );
}
