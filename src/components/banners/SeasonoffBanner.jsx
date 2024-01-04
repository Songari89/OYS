import React from "react";
import styles from "./SeasonoffBanner.module.css";

export default function SeasonoffBanner() {
  return (
    <>
      <img
        className={styles.soimage}
        src="/image/banner/soimage.jpg"
        alt="seasonoffbanner"
      />
      <div className={styles.textcontainer}>
        <img
          className={styles.sotext}
          src="/image/banner/seasonofftext.svg"
          alt="seasonofftext"
        />

        <button className="btn">바로보기</button>
      </div>
    </>
  );
}
