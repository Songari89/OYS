import React from "react";
import styles from "./NotFound.module.css";
import {useNavigate} from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
        <section className={styles.container}>
      <div className={styles.contentscontainer}>
        <div className={styles.text}>
        <img src="/image/icons/error.svg" alt="erroricon" />
        <p>페이지를 찾지 못 했습니다.</p></div>
        <button className="btn" onClick={() => navigate('/')}>홈으로 이동</button>
      </div>
      
    </section>
  );
}
