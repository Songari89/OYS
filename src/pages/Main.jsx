import React from "react";
import styles from "./Main.module.css";
import LookbookBanner from "../components/LookbookBanner";

export default function Main() {
  return (
    <section className={styles.maincontainer}>
      <div className={styles.flexbox}>
        <div className={styles.bannercontainer}>
          <img
            className={`${styles.banner} ${styles.banner1}`}
            src="/image/banner/banner.jpg"
            alt="banner1"
          />
          <img
            className={`${styles.banner} ${styles.banner2}`}
            src="/image/banner/banner2.jpg"
            alt="banner2"
          />
        </div>
      </div>
      <div className={styles.flexbox}>
        <LookbookBanner />
      </div>
    </section>
  );
}