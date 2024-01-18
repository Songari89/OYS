import React from "react";
import styles from "./CartStatus.module.css";
import useUserContext from "../context/UserProvider";
import { useQuery } from "@tanstack/react-query";

export default function CartStatus() {
  const { uid } = useUserContext();
  const { data: items } = useQuery({
    queryKey: [],
    queryFn: () => getCart(uid),
  });
  return (
    <div className={styles.container}>
      <p>CART</p>
      {items && items.lenth > 0 && <p>{items.length}</p>}
    </div>
  );
}
