import React from "react";
import styles from "./LookbookBanner.module.css";
import {useInView} from 'react-intersection-observer';

export default function LookbookBanner() {
    const { ref, inView } = useInView({
      root: null,
      threshold: 0.4,
    });
  return (
    <div ref={ref} className={styles.container}>
      {inView && (
        <div className={styles.bannercontainer}>
          <img
            className={styles.lookbook1}
            src="/image/banner/lookbook1.jpg"
            alt="lookbookimage1"
          />
          <div className={styles.text}>
            <p>2023 F/W</p>
            <p>Look Book</p>
            <p>Color On Your Shoulder</p>
          </div>
          <img
            className={styles.lookbook2}
            src="/image/banner/lookbook2.jpg"
            alt="lookbookimage1"
          />
        </div>
      )}
    </div>
  );
}
