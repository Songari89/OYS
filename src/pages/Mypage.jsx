import React from "react";
import styles from "./Mypage.module.css";
import useUserContext from "../context/UserProvider";
import useHeart from "../hooks/useHeart";
import HeartItem from "./HeartItem";

export default function Mypage() {
  const { logout } = useUserContext();
  const {
    heartQuery: { data: products },
  } = useHeart();


  return (
    <section className="section">
      <p className="sectiontitle">마이 페이지</p>
      <div className="container">
        <p className={styles.like}>
          <img src="/image/icons/fullheart.svg" alt="like" />
          Like
        </p>
        {!products && <p>찜한 상품이 없습니다.</p>}
        {products && (
          <ul>
            {products.map((product) => <HeartItem key={product.id} product={product}/>
            )}
          </ul>
        )}
      </div>
      <button onClick={logout} className={`btn ${styles.logout}`}>로그아웃</button>
    </section>
  );
}
