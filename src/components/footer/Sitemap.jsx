import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sitemap.module.css";

export default function Sitemap() {
  return (
    <ul className={styles.listcontainer}>
      <li>
        <p className={styles.title}>Store Info</p>
        <ul className={styles.storeinfo}>
          <li>
            <Link to="/">회사소개</Link>
          </li>
          <li>
            <Link to="/">이용약관안내</Link>
          </li>
          <li>
            <Link to="/">개인정보취급방침</Link>
          </li>
          <li>
            <Link to="/">사업자등록정보</Link>
          </li>
        </ul>
      </li>
      <li>
        <p className={styles.title}>Contact Us</p>
        <div className={styles.contactus}>
          <p>월 - 금 10:00 - 5:30</p>
          <p>토 - 일 휴무</p>
          <p>📞02 - 466 - 0649</p>
          <img src="/image/icons/kakao.svg" alt="kakaoicon" />
          <img src="/image/icons/instargram.svg" alt="instargramicon" />
        </div>
      </li>
      <li>
        <Link to="/products">
          <p className={styles.title}>Products</p>
        </Link>
      </li>
      <li>
        <Link to="/">
          <p className={styles.title}>Warranty</p>
        </Link>
      </li>
    </ul>
  );
}
