import React from "react";
import styles from "./Footer.module.css";
import Sitemap from "./Sitemap";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.companyinfo}>
        <img src="image/logo2.svg" alt="logo" />
        <p>04796 서울시 성동구 성수이로 26길 27</p>
        <p>대표: 송가람</p>
        <p>email: ari89.web@gmail.com</p>
        <p className={styles.copyright}>Copyright© OYS. All rights reserved.</p>
      </div>
      <div className={styles.sitemap}>
        <Sitemap />
      </div>
    </div>
  );
}
