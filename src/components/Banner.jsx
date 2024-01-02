import React from 'react';
import styles from './Banner.module.css';

export default function Banner() {

  return (
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
  );
}

