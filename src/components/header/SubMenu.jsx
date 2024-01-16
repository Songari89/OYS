import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./SubMenu.module.css";

export default function SubMenu({ path }) {
  const [show, setShow] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes(path)) {
      setShow(true);
    }
    if (!pathname.includes(path) ) {
      setShow(false);
    }
  }, [pathname, path]);

  return (
    <>
      {show && (
        <div className={styles.submenu}>
          <Link to="/products">ALL</Link>
          <Link to="/products/crossbag">CROSS BAG</Link>
          <Link to="/products/totebag">TOTE BAG</Link>
          <Link to="/products/ecobag">ECO BAG</Link>
        </div>
      )}
    </>
  );
}
