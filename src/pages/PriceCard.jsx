import React from 'react';
import styles from './PriceCard.module.css'

export default function PriceCard({text, price}) {
  const pricetoSting = price.toLocaleString("ko-KR");

  return (
    <div className={styles.container}>
      <p className={styles.title}>{text}</p>
      <p className={styles.price}>₩{pricetoSting}</p>
    </div>
  );
}

