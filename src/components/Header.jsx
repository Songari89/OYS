import React from 'react';
import styles from "./Header.module.css";

export default function Header() {
  return (
    <hearder>
      Header 
      <p className={styles.gothic}>이 글씨체 나눔 고딕인가?</p>
      <p className={styles.gothic}>인가 아닌가 나눔 고딕인가?</p>
    </hearder>
  );
}

