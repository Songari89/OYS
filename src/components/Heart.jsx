import React, { useEffect, useState } from "react";
import styles from "./Heart.module.css";
import useHeart from "../hooks/useHeart";

export default function Heart({ product }) {
  const [heart, setHeart] = useState(false);
  const {
    heartQuery: { data: likedProducts },
    uid,
    addOrUpdateLike,
    removeLike,
  } = useHeart();
  const [isLikedProduct, setIsLikedProduct] = useState(false);


  useEffect(() => {
    if (likedProducts) {
      const isLike = likedProducts.find(
        (likedProduct) => likedProduct && likedProduct.id === product.id
      ); 
      setIsLikedProduct(!!isLike);
      setHeart(!!isLike);
    }
  }, [likedProducts, product]);

  const handleClick = () => {
    if (!uid) {
      return alert("로그인 후 사용이 가능합니다.");
    }
    if (!isLikedProduct) {
      addOrUpdateLike.mutate(product);
      setHeart(true);
    } else {
      removeLike.mutate(product.id);
      setHeart(false);
    }
  };
  return (
    
      <img
        className={styles.heart}
        onClick={handleClick}
        src={heart ? "/image/icons/fullheart.svg" : "/image/icons/heart.svg"}
        alt="like"
      />
    
  );
}
