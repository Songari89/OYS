import React from "react";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
        <section className={styles.container}>
      <div className={styles.contentscontainer}>
        <img src="/image/icons/error.svg" alt="erroricon" />
        <p>페이지를 찾지 못 했습니다.</p>
      </div>
    </section>
  );
}
