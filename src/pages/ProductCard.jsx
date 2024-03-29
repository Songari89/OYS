import React from "react";
import styles from "./ProductCard.module.css";
import {useNavigate} from 'react-router-dom';


export default function ProductCard({ product }) {
  const { id,image,category,title, price, saleprice, colors } = product;
  const navigate = useNavigate();

  const handleClick = () => {
    return navigate(`/products/${category}/${id}`, {state:{product}})
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <img className={styles.image} src={image} alt={title} />
    
        <div className={styles.contents}>
          <p className={styles.title}>{title}</p>
          {saleprice && <span className={styles.sale}>₩{price}</span>}
          <span className={styles.price}>
            {saleprice ? `₩${saleprice}` : `₩${price}`}
          </span>
          <p className={styles.color}>{colors.length} colors</p>
        </div>
        
      
    </div>
  );
}
