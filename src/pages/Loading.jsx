import React from "react";
import styles from "./Loading.module.css";


export default function Loading() {
  return (
    <section className={styles.container}>
      <div className={styles.contentscontainer}>
        <img src="/image/icons/loading.svg" alt="loadingicon" />
        <p>페이지를 읽어오는 중입니다.</p>
      </div>
    </section>
  );
}
