import React, { useState } from "react";
import styles from "./ProductDetail.module.css";
import { useLocation } from "react-router-dom";
import useUserContext from "../context/UserProvider";
import { addOrUpdateToCart } from "../API/firebase";
import Heart from "../components/Heart";
import useCart from "../hooks/useCart";

export default function ProductDetail() {
  const { uid, login } = useUserContext();
  const { addOrUpdateItem } = useCart();
  const {
    state: { product },
  } = useLocation();
  const { id, title, image, saleprice, price, description, colors } = product;
  const [selected, setSelected] = useState();
  const [success, setSuccess] = useState("");
  const handleChange = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
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
    setSuccess("✅ 상품이 장바니구에 담겼습니다.");
    setTimeout(() => {
      setSuccess(null);
      setSelected();
    }, 3000);
  };
  return (
    <section className="section">
      <p className="sectiontitle">{title}</p>
      <div className={`container ${styles.content}`}>
        <img className={styles.image} src={image} alt={title} />

        <div className={styles.contents}>
          <p className={styles.title}>
            {title} <Heart product={product} />
          </p>
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
              <option disabled value="defaultvalue">
                --- 선택 ---
              </option>
              {colors &&
                colors.map((color, index) => (
                  <option key={index}>{color}</option>
                ))}
            </select>
          </div>
          {selected && (
            <div className={styles.selectedproduct}>
              <p>선택한 상품 :</p>
              <span>{title}</span>
              <span>{selected}</span>
              <span>{saleprice ? `₩${saleprice}` : `₩${price}`}</span>
            </div>
          )}
          <p className={styles.success}>{success}</p>
          <button className="submitbtn" onClick={uid ? handleClick : login}>
            장바구니에 담기
          </button>
        </div>
      </div>
    </section>
  );
}
