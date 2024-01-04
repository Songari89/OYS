import React from "react";
import styles from "./AuthPopup.module.css";

export default function AuthPopup() {
  return (
    <div className={styles.authcontainer}>
      <p>로그인하고 더 많은 혜택을 받으세요!</p>
      <button>로그인</button>
    </div>
  );
}
