import React from "react";
import styles from "./OffLineBanner.module.css";

export default function OffLineBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}>
        <h2>OFFLINE STORE</h2>
        <p>OYS의 제품을 직접 만날 수 있는 직영 매장에 방문하세요!</p>
        <button className="subbtn">매장찾기</button>
      </div>
    </div>
  );
}
