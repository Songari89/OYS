import React from "react";
import styles from "./CartItem.module.css";
import useCart from "../hooks/useCart";

export default function CartItem({ item}) {
  const { addOrUpdateItem, removeItem} = useCart();
  const { id, image, title, price, color, quantity } = item;
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...item, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    addOrUpdateItem.mutate({ ...item, quantity: quantity + 1 });
  const handleRemove = () => removeItem.mutate(id);


  return (
    <li className={styles.container}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.textcontainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.color}>{color}</p>
        <p className={styles.price}>₩{price}</p>
      </div>
      <div className={styles.quantitycontainer}>
        <img src="/image/icons/minus.svg" alt="minus" onClick={handleMinus} />
        <p>{quantity}</p>
        <img src="/image/icons/plus.svg" alt="plus" onClick={handlePlus} />
        <img
          className={styles.trash}
          src="/image/icons/trash.svg"
          alt="remove"
          onClick={handleRemove}
        />
      </div>
    </li>
  );
}
