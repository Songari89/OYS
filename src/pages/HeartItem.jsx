import React, { useState } from "react";
import Heart from "../components/Heart";
import styles from "./HeartItem.module.css";
import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";

export default function HeartItem({ product }) {
  const [selected, setSelected] = useState();
  const navigate = useNavigate();
  const { addOrUpdateItem } = useCart();
  const { id, category, title, image, price, saleprice, colors } = product;

  const handleClick = () => {
    if (product) {
      return navigate(`/products/${category}/${id}`, { state: { product } });
    }
  };

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const handleCart = (e) => {
    if (!selected) {
      alert("옵션을 선택해주세요.");
      return;
    }
    const product = {
      id,
      image,
      title,
      price: saleprice ? saleprice : price,
      color: selected,
      quantity: 1,
    };
    addOrUpdateItem.mutate(product);
    alert('장바구니에 제품이 담겼습니다.');
    setTimeout(() => {
      setSelected();
    }, 3000);
  };

  return (
    <li className={styles.list}>
      <div className={styles.heartcontainer}>
        <Heart product={product} />
      </div>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.content}>
        <p onClick={handleClick}>{title}</p>
        {saleprice && <span className={styles.sale}>₩{price}</span>}
        <span className={styles.price}>
          {saleprice ? `₩${saleprice}` : `₩${price}`}
        </span>
        <div className={styles.selectcontainer}>
          <label className={styles.label} htmlFor="option">
            색상 :
          </label>
          <select
            className={styles.select}
            id="option"
            onChange={handleChange}
            value={selected}
            defaultValue="defaultvalue"
          >
            <option disabled value="defaultvalue">
              --- 선택 ---
            </option>
            {colors &&
              colors.map((color, index) => (
                <option key={index}>{color}</option>
              ))}
          </select>
        </div>
      </div>
      <button className={`submitbtn ${styles.tocart}`} onClick={handleCart}>
        장바구니 담기
      </button>
    </li>
  );
}
