import React from "react";
import styles from "./LookbookBanner.module.css";


export default function LookbookBanner() {
  return (
    <>
      <img
        className={styles.lookbook1}
        src="/image/banner/lookbook1.jpg"
        alt="lookbookimage1"
      />
      <div className={styles.text}>
        <img src="/image/banner/lookbooktext.svg" alt="Lookbook" />
        <button className='btn'>바로보기</button>
      </div>
      <img
        className={styles.lookbook2}
        src="/image/banner/lookbook2.jpg"
        alt="lookbookimage1"
      />
    </>
  );
}
