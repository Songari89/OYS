import React, { useState } from "react";
import styles from "./ProductDetail.module.css";
import { useLocation } from "react-router-dom";

export default function ProductDetail() {
  const {
    state: { product },
  } = useLocation();
  const { title, image, saleprice, price, description, colors } = product;
  const [selected, setSelected] = useState();
  const handleChange = (e) => setSelected(e.target.value);
  return (
    <section className="section">
      <p className="sectiontitle">{title}</p>
      <div className={styles.container}>
        <img className={styles.image} src={image} alt={title} />

        <div className={styles.contents}>
          <p className={styles.title}>{title}</p>
          {saleprice && <span className={styles.sale}>₩{price}</span>}
          <span className={styles.price}>
            {saleprice ? `₩${saleprice}` : `₩${price}`}
          </span>
          <p className={styles.description}>{description}</p>
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
              <option disabled  value="defaultvalue">
                --- 선택 ---
              </option>
              {colors &&
                colors.map((color, index) => (
                  <option key={index}>{color}</option>
                ))}
            </select>
          </div>
          {selected &&
          <div className={styles.selectedproduct}>
            <p>선택한 상품 :</p>
            <span>{title}</span>
            <span>{saleprice ? `₩${saleprice}` : `₩${price}`}</span>
            <span>{selected}</span>
          </div>}
          <button className="submitbtn">장바구니에 담기</button>
        </div>
      </div>
    </section>
  );
}
